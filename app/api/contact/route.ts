import { NextRequest, NextResponse } from 'next/server';
import { emailConfig } from './email-config';
import nodemailer from 'nodemailer';

// Cette fonction gère les requêtes POST à /api/contact
export async function POST(req: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const formData = await req.json();
    const { name, email, subject, message } = formData;
    
    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    // Construction du sujet de l'email
    const emailSubject = subject 
      ? `[Portfolio] ${subject}` 
      : `[Portfolio] Nouveau message de ${name}`;

    // Construction du contenu de l'email
    const emailContent = `
      Nouveau message du formulaire de contact:
      --------------------------------------
      Nom: ${name}
      Email: ${email}
      Sujet: ${subject || 'Non spécifié'}
      --------------------------------------
      Message:
      ${message}
      --------------------------------------
    `;

    try {
      // Créer un transporteur avec la configuration
      const transporter = nodemailer.createTransport({
        service: emailConfig.service,
        host: emailConfig.host,
        port: emailConfig.port,
        secure: emailConfig.secure,
        auth: {
          user: emailConfig.auth.user,
          pass: emailConfig.auth.pass,
        },
      });

      // Envoi de l'email
      const info = await transporter.sendMail({
        from: emailConfig.from,
        to: emailConfig.defaultTo,
        subject: emailSubject,
        text: emailContent,
        replyTo: email,
      });

      console.log('Email envoyé avec succès:', info.messageId);
      
      // Réponse de succès
      return NextResponse.json({ 
        success: true, 
        message: 'Merci ! Votre message a bien été envoyé.'
      });
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError);
      
      // En cas d'erreur d'envoi d'email, on renvoie une erreur au client
      return NextResponse.json(
        { message: 'Une erreur est survenue lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 