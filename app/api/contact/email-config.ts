// Configuration pour l'envoi d'emails
// À remplacer par vos propres paramètres SMTP

export const emailConfig = {
  // Service SMTP pour Outlook
  service: 'outlook',
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'contact@pauldecalf.fr',
    pass: 'Decalff93',
  },
  // Destinataire par défaut
  defaultTo: 'contact@pauldecalf.fr',
  // Expéditeur
  from: 'Site Portfolio <contact@pauldecalf.fr>',
}

/*
INSTRUCTIONS POUR LA CONFIGURATION:

1. Gmail: 
   - Vous devez créer un mot de passe d'application dans votre compte Google
   - Allez dans "Gérer votre compte Google" > Sécurité > Connexion à Google > 
     Mot de passe des applications

2. Outlook/Hotmail:
   - service: 'outlook'
   - host: 'smtp.office365.com'
   - port: 587
   - secure: false

3. Services Email Dédiés (recommandés):
   - Brevo (Sendinblue): https://www.brevo.com
   - SendGrid: https://sendgrid.com
   - Mailgun: https://www.mailgun.com
   - AWS SES: https://aws.amazon.com/ses/

Ces services offrent souvent un quota gratuit et une meilleure délivrabilité.
*/ 