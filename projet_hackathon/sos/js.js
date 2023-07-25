const nodemailer = require('nodemailer');

async function main() {
  // Créer un objet de transport réutilisable en utilisant SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false // true pour 465, false pour les autres ports
  });

  // Envoyer l'e-mail avec les options définies
  let info = await transporter.sendMail({
    from: '"Votre nom" <your_email@example.com>',
    to: 'recipient@example.com',
    subject: 'Sujet de l\'e-mail',
    text: 'Texte de l\'e-mail',
    html: '<b>Texte de l\'e-mail en HTML</b>'
  });

  console.log('Message envoyé: %s', info.messageId);
}

main().catch(console.error);
