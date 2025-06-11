import React from 'react';

export const metadata = {
  title: "Conditions Générales d'Utilisation | Paul Decalf",
  description: "Conditions d'utilisation du site pauldecalf.fr : obligations de l'utilisateur, propriété intellectuelle, responsabilité et droit applicable.",
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales d'Utilisation (CGU)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
        <p className="mb-4">
          En accédant et en naviguant sur le site <strong>pauldecalf.fr</strong>, vous acceptez, en tant qu'utilisateur, sans réserve, les présentes Conditions Générales d'Utilisation (CGU).
          Si vous n'acceptez pas tout ou partie des conditions, vous devez vous abstenir d'utiliser ce site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Utilisation du site</h2>
        <p className="mb-4">
          L'utilisateur s'engage à :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Utiliser le site de manière conforme aux lois et règlements en vigueur</li>
          <li>Ne pas compromettre la sécurité ou l'intégrité du site</li>
          <li>Ne pas tenter d'accéder à des données ou à des zones non autorisées</li>
          <li>Ne pas nuire au bon fonctionnement du site, notamment par des actes de piratage ou l'envoi de virus</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
        <p className="mb-4">
          L'ensemble des contenus présents sur ce site (textes, images, code, logo, design, etc.) est protégé par le droit d'auteur et demeure la propriété exclusive de <strong>Paul Decalf</strong>. 
          Toute reproduction, représentation ou diffusion, partielle ou totale, sans autorisation écrite est interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitation de responsabilité</h2>
        <p className="mb-4">
          Le site <strong>pauldecalf.fr</strong> est proposé à titre informatif. Bien que les informations soient régulièrement mises à jour, aucune garantie n'est apportée quant à leur exactitude, exhaustivité ou actualité. L'éditeur du site décline toute responsabilité en cas d'interruption, d'erreur ou de dommage direct ou indirect résultant de son utilisation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Modification des CGU</h2>
        <p className="mb-4">
          Les présentes CGU peuvent être modifiées à tout moment, sans préavis, afin de les adapter aux évolutions du site ou de la législation. Il est conseillé à l'utilisateur de les consulter régulièrement.
        </p>
        <p className="mb-4 italic">Dernière mise à jour : mai 2025</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Loi applicable</h2>
        <p className="mb-4">
          Les présentes CGU sont régies par la loi française. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux compétents seront ceux du ressort du siège de l'activité de <strong>Paul Decalf</strong>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
        <p className="mb-4">
          Pour toute question relative aux présentes conditions, vous pouvez contacter l'éditeur du site à l'adresse suivante : <strong>contact@pauldecalf.fr</strong>
        </p>
      </section>
    </div>
  );
}
