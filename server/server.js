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
const invoice = {
  shipping: {
    name: "John Doe",
    address: "1234 Main Street",
    city: "San Francisco",
    state: "CA",
    country: "US",
    postal_code: 94111,
  },
  items: [
    {
      item: "TC 100",
      description: "Toner Cartridge",
      quantity: 2,
      amount: 6000,
    },
    {
      item: "USB_EXT",
      description: "USB Cable Extender",
      quantity: 1,
      amount: 2000,
    },
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234,
};
createInvoice(invoice, "invoice.pdf");

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
    const doc = new PDFDocument();

    // Pipe its output somewhere, like to a file or HTTP response
    // See below for browser usage
    doc.pipe(fs.createWriteStream("output.pdf"));

    // Embed a font, set the font size, and render some text
    doc.fontSize(25).text("Some text with an embedded font!", 100, 100);

    // Add an image, constrain it to a given size, and center it vertically and horizontally
    /*     doc.image("path/to/image.png", {
      fit: [250, 300],
      align: "center",
      valign: "center",
    }); */

    // Add another page
    doc
      .addPage()
      .fontSize(25)
      .text("Here is some vector graphics...", 100, 100);

    // Draw a triangle
    doc
      .save()
      .moveTo(100, 150)
      .lineTo(100, 250)
      .lineTo(200, 250)
      .fill("#FF3300");

    // Apply some transforms and render an SVG path with the 'even-odd' fill rule
    doc
      .scale(0.6)
      .translate(470, -380)
      .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
      .fill("red", "even-odd")
      .restore();

    // Add some text with annotations
    doc
      .addPage()
      .fillColor("blue")
      .text("Here is a link!", 100, 100)
      .underline(100, 100, 160, 27, { color: "#0000FF" })
      .link(100, 100, 160, 27, "http://google.com/");

    // Finalize PDF file
    doc.end();
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
        }`,
        attachments: [
          {
            filename: "faktúra.pdf",
            path: "output.pdf",
            contentType: "application/pdf",
          },
        ], // plain text body
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
