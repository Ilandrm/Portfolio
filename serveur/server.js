// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { nom, prenom, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Ton Gmail
            pass: process.env.GMAIL_PASS  // Mot de passe d'application
        }
    });
    const mailOptions = {
        from: `"${prenom} ${nom}" <${email}>`,
        to: process.env.GMAIL_USER, // Email de réception
        subject: 'Nouveau message depuis le formulaire de contact',
        text: message,
        html: `<p><strong>De :</strong> ${prenom} ${nom} (${email})</p><p><strong>Message :</strong></p><p>${message}</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail envoyé avec succès !' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de l'envoi de l'e-mail." });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur email lancé sur http://localhost:${PORT}`);
});
