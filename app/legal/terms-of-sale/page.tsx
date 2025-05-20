import React from 'react';

export const metadata = {
  title: "Conditions Générales de Vente | Paul Decalf",
  description: "Consultez les conditions générales de vente applicables aux prestations proposées par Paul Decalf, développeur web indépendant.",
};


export default function TermsOfSale() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente (CGV)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
        <p className="mb-4">
          Les présentes conditions générales de vente régissent les relations contractuelles entre Paul Decalf, entrepreneur individuel, et toute personne physique ou morale souhaitant bénéficier de ses services. Elles s'appliquent à toute commande de prestations conclue via le site <strong>pauldecalf.fr</strong>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Prestations proposées</h2>
        <p className="mb-4">
          Les prestations disponibles incluent, sans s’y limiter : la création de sites internet, la refonte, l’optimisation SEO, les audits techniques, ainsi que le conseil personnalisé. Chaque service est décrit dans le devis transmis avant validation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Tarifs</h2>
        <p className="mb-4">
          Les prix sont exprimés en euros (€), toutes taxes comprises (TTC), selon le régime de la franchise en base de TVA (TVA non applicable, article 293 B du CGI). Le tarif est fixé par devis préalable accepté par le client.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Commandes</h2>
        <p className="mb-4">
          La commande est validée dès réception du devis signé et/ou du paiement de l’acompte demandé. Elle vaut acceptation entière et sans réserve des présentes conditions générales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Paiement</h2>
        <p className="mb-4">
          Le paiement peut être exigé en une ou plusieurs fois, selon les modalités précisées dans le devis. Les moyens de paiement acceptés sont : virement bancaire ou paiement sécurisé en ligne (carte bancaire, Stripe, etc.).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Délais et livraison</h2>
        <p className="mb-4">
          Les délais de réalisation sont estimés dans le devis. Tout retard dû à un manque de réactivité du client ou à une demande de modification non prévue initialement pourra entraîner un report de la livraison sans dédommagement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Droit de rétractation</h2>
        <p className="mb-4">
          Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut s’appliquer aux prestations pleinement exécutées avant la fin du délai de 14 jours, avec l’accord exprès du client. Dans tous les autres cas, vous disposez d’un délai de 14 jours pour changer d’avis à compter de la signature du devis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Garanties</h2>
        <p className="mb-4">
          Les prestations bénéficient des garanties légales prévues par les articles 1641 et suivants du Code civil. En cas de défaut constaté, le client s’engage à en informer l’entrepreneur sous 14 jours après livraison.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Responsabilité</h2>
        <p className="mb-4">
          La responsabilité de l’entrepreneur ne saurait être engagée pour tout dommage indirect lié à l’utilisation ou à l’impossibilité d’utiliser le site ou le service fourni, notamment en cas de perte de données ou de chiffre d’affaires.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Litiges</h2>
        <p className="mb-4">
          En cas de litige, une solution amiable sera recherchée prioritairement. À défaut, les tribunaux compétents seront ceux du ressort de Versailles. Le client peut également recourir gratuitement à un médiateur de la consommation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
        <p className="mb-4">
          Pour toute question relative aux présentes CGV, vous pouvez nous contacter à : <strong>pauldecalf@outlook.fr</strong>
        </p>
      </section>
    </div>
  );
}
