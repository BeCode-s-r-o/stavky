require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const uuid = require("uuid").v4;
const fs = require("fs");
const cors = require("cors");
const { text } = require("express");

const sha1 = require("js-sha1");

const nodemailer = require("nodemailer");
const app = express();

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

const PORT = 5500;

const storeItems = new Map([
  [1, { priceInCents: 3990, name: "Stavkove Starter 15" }],
  [2, { priceInCents: 6990, name: "Stavkove Starter 30" }],
  [3, { priceInCents: 14990, name: "Stavkove Starter 90" }],
  [4, { priceInCents: 12990, name: "Stavkove Kobmi 30" }],
  [5, { priceInCents: 21990, name: "Stavkove Kobmi 90" }],
  [6, { priceInCents: 29990, name: "Stavkove Kobmi 180" }],
  [7, { priceInCents: 9900, name: "Stavkove Exclusive 30" }],
  [8, { priceInCents: 16990, name: "Stavkove Exclusive 90" }],
  [9, { priceInCents: 23990, name: "Stavkove Exclusive 180" }],
  [11, { priceInCents: 3990, name: "Forex Starter 15" }],
  [12, { priceInCents: 6990, name: "Forex Starter 30" }],
  [13, { priceInCents: 14990, name: "Forex Starter 90" }],
  [14, { priceInCents: 12990, name: "Forex Kombi 30" }],
  [15, { priceInCents: 21990, name: "Forex Kombi 90" }],
  [16, { priceInCents: 29990, name: "Forex Kombi 180" }],
  [17, { priceInCents: 9900, name: "Forex Exclusive 30" }],
  [18, { priceInCents: 16990, name: "Forex Exclusive 90" }],
  [19, { priceInCents: 23990, name: "Forex Exclusive 180" }],
]);
// post request
app.post("/checkout", async (req, res) => {
  let error, status;

  try {
    const { package, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const storeItem = storeItems.get(package.id);
    console.log(storeItem);
    const key = uuid();
    const charge = await stripe.charges.create({
      amount: storeItem.priceInCents,
      currency: "eur",
      customer: customer.id,
      receipt_email: token.email,
      description: storeItem.name,
      key: key,
    });
    async function sendEmail() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing

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
          storeItem.priceInCents / 100 + " €"
        }`, // plain text body
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
