require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");

const PDFDocument = require("pdfkit");
const { createInvoice } = require("./createInvoice.js");
const { createEmailTemplate } = require("./createEmailTemplate");
const { InvoiceNumber } = require("invoice-number");
const uuid = require("uuid").v4;
const fs = require("fs");
const cors = require("cors");
const { text } = require("express");
const { storeItems } = require("./storeItems.js");
const sha1 = require("js-sha1");
const admin = require("firebase-admin");
const credentials = require("./key.json");
const nodemailer = require("nodemailer");

admin.initializeApp({ credential: admin.credential.cert(credentials) });
const db = admin.firestore();
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
    const { token, package, discount, isForex } = req.body;
    const stripe = require("stripe")(
      isForex
        ? process.env.STRIPE_PRIVATE_KEY_FOREX
        : process.env.STRIPE_PRIVATE_KEY_STAVKOVE
    );
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const storeItem = storeItems.get(package.id);

    const key = uuid();
    const charge = await stripe.charges.create({
      amount: Math.round(
        storeItem.priceInCents - storeItem.priceInCents * discount
      ),
      currency: "eur",
      customer: customer.id,
      receipt_email: token.email,
      description: storeItem.name,
      key: key,
    });

    async function sendEmail() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      var invoiceNumber = "0100";
      try {
        const docRef = db.collection("cislo-objednavky").doc("invoiceNumber");
        var invoiceNumber = InvoiceNumber.next(docRef.number);
        await docRef.set({
          number: invoiceNumber,
        });
      } catch (err) {
        console.log(err);
      }

      const htmlMessage = createEmailTemplate({
        name: token.card.name,
        invoiceNumber: invoiceNumber,
        isForex: isForex,
        storeItem: storeItem,
        email: token.email,
        address: {
          street: token.card.address_line1,
          zip: token.card.address_zip,
          city: token.card.address_city,
          country: token.card.address_country,
        },
      });
      const invoice = {
        shipping: {
          name: token.card.name,
          address: token.card.address_line1,
          city: token.card.address_city,
          postal_code: token.card.address_zip,
          email: token.email,
        },
        items: [
          {
            item: storeItem.name,
            quantity: 1,
            amount: storeItem.priceInCents,
            duration: storeItem.duration,
          },
        ],
        subtotal: storeItem.priceInCents,
        discountValue: Math.round(storeItem.priceInCents * discount),
        discountPercent: discount * 100,
        invoice_nr: invoiceNumber,
        pageType: isForex ? "forex" : "stavkove",
      };
      createInvoice(invoice, `faktura č.${invoiceNumber + ".pdf"}`);
      try {
        const docRef = db
          .collection(`objednávky-${isForex ? "forex" : "stavkove"}`)
          .doc(String(invoiceNumber));
        await docRef.set({
          id: key,
          číslo: invoiceNumber,
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
          user: isForex
            ? "info@forexporadenstvo.sk"
            : "info@stavkoveporadenstvo.sk", // generated ethereal user
          pass: process.env.ACOUNT_PASSWORD, // generated ethereal password
        },
      });
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: isForex
          ? `"Objednávka č. ${invoiceNumber} | Forex Poradenstvo" <info@forexporadenstvo.sk>`
          : `"Objednávka č. ${invoiceNumber} | Stavkove Poradenstvo" <info@stavkoveporadenstvo.sk>`, // sender address
        to: token.email, // list of receivers
        subject: "Vaša Objednávka", // Subject line
        html: htmlMessage,
        attachments: [
          {
            filename: `faktura č.${invoiceNumber + ".pdf"}`,
            path: `faktura č.${invoiceNumber + ".pdf"}`,
            contentType: "application/pdf",
            send: true,
          },
          {
            filename: "stavkove.png",
            path: "./stavkove.png",
            cid: "stavkove",
            send: !isForex,
          },
          {
            filename: "forex.png",
            path: "./forex.png",
            cid: "forex",
            send: isForex,
          },
        ].filter((i) => i.send),
      });
      fs.unlink(`faktura č.${invoiceNumber + ".pdf"}`, (err) => {
        if (err) {
          throw err;
        }
      });
      console.log("Odoslané: %s", JSON.stringify(info, null, 2));
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }

    sendEmail().catch(console.error);

    status = "success";
  } catch (error) {
    console.log(error);
    status = "failure";
    return;
  }

  res.json({ error, status });
});

const htmlMessage = createEmailTemplate({
  name: "Vlado",
  invoiceNumber: "123",
  isForex: true,
  storeItem: {
    name: "Balík 1",
    priceInCents: 100,
    duration: "1 mesiac",
  },
  email: "tomkovladko@gmail.com",
  address: {
    street: "Street",
    zip: "Zip",
    city: "City",
    country: "Country",
  },
});

let transporter = nodemailer.createTransport({
  host: "smtp.m1.websupport.sk",
  port: 465,
  secure: true,
  auth: {
    user: "info@forexporadenstvo.sk",
    pass: process.env.ACOUNT_PASSWORD,
  },
});
// send mail with defined transport object
let info = transporter
  .sendMail({
    from: `"Objednávka č. ${123} | Forex Poradenstvo" <info@forexporadenstvo.sk>`,
    to: "tomkovladko@gmail.com",
    subject: "Vaša Objednávka",
    html: htmlMessage,
    attachments: [
      {
        filename: "stavkove.png",
        path: "./stavkove.png",
        cid: "stavkove",
        send: false,
      },
      {
        filename: "forex.png",
        path: "./forex.png",
        cid: "forex",
        send: true,
      },
    ].filter((i) => i.send),
  })
  .then((res) => console.log(res));

app.listen(PORT, () => {
  console.log("listening");
});
