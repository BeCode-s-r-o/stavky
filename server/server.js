require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const PDFDocument = require("pdfkit");
const { createInvoice } = require("./createInvoice.js");

const uuid = require("uuid").v4;
const fs = require("fs");
const cors = require("cors");
const { text } = require("express");
const { storeItems } = require("./storeItems.js");
const sha1 = require("js-sha1");
const admin = require("firebase-admin");
const credentials = require("../key.json");
admin.initializeApp({ credential: admin.credential.cert(credentials) });
const db = admin.firestore();
const nodemailer = require("nodemailer");
const app = express();

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

const PORT = 5500;
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return day + "." + month + "." + year;
}
// post request
app.post("/checkout", async (req, res) => {
  let error, status;

  try {
    const { package, token, discount } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const storeItem = storeItems.get(package.id);

    const key = uuid();
    const charge = await stripe.charges.create({
      amount: Math.round(storeItem.priceInCents * discount),
      currency: "eur",
      customer: customer.id,
      receipt_email: token.email,
      description: storeItem.name,
      key: key,
    });

    async function sendEmail() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      const invoice = {
        shipping: {
          name: token.card.name,
          address: token.card.address_line1,
          city: token.card.address_city,
          postal_code: token.card.address_zip,
        },
        items: [
          {
            item: storeItem.name,
            description: storeItem.description,
            quantity: 1,
            amount: storeItem.priceInCents,
          },
        ],
        subtotal: storeItem.priceInCents,
        discount: Math.round(
          storeItem.priceInCents - storeItem.priceInCents * discount
        ),
        invoice_nr: key,
        pageType: package.id > 9 ? "forex " : "stavkove",
      };
      createInvoice(invoice, `faktura_${key + ".pdf"}`);
      try {
        const docRef = db
          .collection(
            `${"Objednávky" + package.id > 9 ? "forex " : "stavkove"}`
          )
          .doc(key);
        await docRef.set({
          id: key,
          meno: token.card.name,
          adresa: token.card.address_line1,
          mesto: token.card.address_city,
          PSČ: token.card.address_zip,
          balik: storeItem.name,
          dátum: formatDate(new Date()),
        });
      } catch (err) {
        console.log(err);
      }

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.m1.websupport.sk",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user:
            package.id > 9
              ? "info@forexporadenstvo.sk"
              : "info@stavkoveporadenstvo.sk", // generated ethereal user
          pass: process.env.ACOUNT_PASSWORD, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from:
          package.id > 9
            ? '"Forex Poradenstvo" <info@forexporadenstvo.sk>'
            : '"Stavkove Poradenstvo" <info@stavkoveporadenstvo.sk>', // sender address
        to: token.email, // list of receivers
        subject: "Vaša Objednávka", // Subject line
        text: `Dobrý deň ${token.card.name}, 
        
Text musí začinať tu aby si mal spravne odsadenie
objednaný balík: ${storeItem.name} v cene ${
          (storeItem.priceInCents / 100) * discount + " €"
        }`,
        attachments: [
          {
            filename: `faktura_${key + ".pdf"}`,
            path: `faktura_${key + ".pdf"}`,
            contentType: "application/pdf",
          },
        ], // plain text body
      });
      fs.unlink(`faktura_${key + ".pdf"}`, (err) => {
        if (err) {
          throw err;
        }
      });
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }

    sendEmail().catch(console.error);

    status = "success";

    console.log("success");
  } catch (error) {
    console.log(error);
    status = "failure";
    return;
  }

  res.json({ error, status });
});
app.listen(PORT, () => {
  console.log("listening");
});
