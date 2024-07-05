const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

// Route to handle POST request
app.post('/send', async (req, res) => {
  const { name, email, phone, city, country, subject, inquiry, message } = req.body;

  // Create a transporter using the default SMTP transport
  // Make sure to replace the credentials with your actual SMTP host information
  let transporter = nodemailer.createTransport({
    host: 'smtp.youremailhost.com', // Replace with your SMTP host
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your-email@youremailhost.com', // Replace with your SMTP username
      pass: 'your-smtp-password' // Replace with your SMTP password
    }
  });

  // Setup email data
  let mailOptions = {
    from: '"Contact Form" <your-email@youremailhost.com>', // Sender address
    to: 'deepanshumethi123@gmail.com', // List of receivers
    subject: subject || 'New Inquiry from Contact Form', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nCountry: ${country}\nSubject: ${subject}\nInquiry About: ${inquiry.join(', ')}\nMessage: ${message}`, // Plain text body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email successfully sent');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
