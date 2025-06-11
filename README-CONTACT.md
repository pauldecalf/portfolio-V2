# Configuration du formulaire de contact

Ce document explique comment configurer le formulaire de contact pour qu'il envoie des emails à votre adresse email.

## Prérequis

Pour activer l'envoi d'emails, vous devez installer la bibliothèque nodemailer :

```bash
npm install nodemailer
```

## Configuration des paramètres SMTP

1. Ouvrez le fichier `app/api/contact/email-config.ts`
2. Modifiez les paramètres avec vos propres informations SMTP :

```typescript
export const emailConfig = {
  // Service SMTP (exemple avec Gmail)
  service: 'gmail', // ou 'outlook', etc.
  host: 'smtp.gmail.com', // ou autre serveur SMTP
  port: 587,
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: 'votre.email@gmail.com', // Votre email
    pass: 'votre-mot-de-passe-app', // Votre mot de passe d'application
  },
  // Destinataire par défaut (votre adresse email)
  defaultTo: 'contact@pauldecalf.fr',
  // Expéditeur
  from: 'Site Portfolio <votre.email@gmail.com>',
}
```

## Options de configuration SMTP

### Gmail
- Vous devez créer un mot de passe d'application dans votre compte Google
- Allez dans "Gérer votre compte Google" > Sécurité > Connexion à Google > Mot de passe des applications
- Utilisez ce mot de passe généré au lieu de votre mot de passe habituel

### Outlook/Hotmail
```typescript
service: 'outlook',
host: 'smtp.office365.com',
port: 587,
secure: false
```

### Services Email Dédiés (recommandés)
Ces services offrent souvent un quota gratuit et une meilleure délivrabilité:
- [Brevo (Sendinblue)](https://www.brevo.com)
- [SendGrid](https://sendgrid.com)
- [Mailgun](https://www.mailgun.com)
- [AWS SES](https://aws.amazon.com/ses/)

## Activation de l'envoi d'emails

Une fois nodemailer installé et les paramètres SMTP configurés, ouvrez le fichier `app/api/contact/route.ts` et décommentez le code d'envoi d'email :

1. Ajoutez l'import de nodemailer en haut du fichier :
```typescript
import nodemailer from 'nodemailer';
```

2. Décommentez le bloc de code qui utilise nodemailer (lignes 36-56 environ)

## Personnalisation du formulaire

Le formulaire se trouve dans le fichier `components/ContactSection.tsx`. Vous pouvez personnaliser :
- Les champs du formulaire
- Les messages d'erreur ou de succès
- Le design du formulaire

## Sécurité

Pour protéger votre formulaire contre le spam :
- Envisagez d'ajouter un CAPTCHA (comme reCAPTCHA)
- Mettez en place une limitation de taux (rate limiting)
- Ajoutez une validation côté serveur des données du formulaire

## Problèmes courants

- **Erreur d'authentification SMTP** : Vérifiez vos identifiants. Pour Gmail, assurez-vous d'utiliser un mot de passe d'application.
- **Emails marqués comme spam** : Utilisez un service d'email professionnel comme Brevo, SendGrid, etc.
- **Limitation du nombre d'emails** : Les fournisseurs de services gratuits comme Gmail ont des limites d'envoi quotidiennes.

## Alternatives

Si vous rencontrez des difficultés avec SMTP, vous pouvez utiliser des services tiers comme :
- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/) (si votre site est hébergé sur Netlify)
- [Getform](https://getform.io)
- [EmailJS](https://www.emailjs.com) 