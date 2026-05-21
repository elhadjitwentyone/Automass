'use client'

export default function FAQ() {
  const faqs = [
    {
      question: 'L\'Automass est-il compatible avec ma voiture ?',
      answer: 'Oui, l\'Automass 4-in-1 est compatible avec tous les véhicules 12V (voitures, motos, camionnettes). C\'est l\'équivalent universel du système électrique de votre voiture.'
    },
    {
      question: 'Combien de temps dure la batterie interne ?',
      answer: 'La batterie 16000mAh peut démarrer votre voiture 5-10 fois avant d\'avoir besoin d\'être rechargée (selon le modèle de voiture). Vous pouvez la recharger via USB en 4-5 heures.'
    },
    {
      question: 'La pompe à air fonctionne-t-elle pour tous les pneus ?',
      answer: 'Oui, la pompe fonctionne pour les pneus de voitures, motos, vélos et ballons de sport. Elle dispose d\'adaptateurs pour tous les types de valves.'
    },
    {
      question: 'Est-ce que c\'est sûr d\'utiliser l\'Automass sur ma batterie ?',
      answer: 'Totalement sûr ! L\'Automass dispose de multiples protections : protection contre les surcharges, les courts-circuits et l\'inversion de polarité. Les pinces sont isolées pour éviter tout danger.'
    },
    {
      question: 'Quelle est la garantie ?',
      answer: 'L\'Automass bénéficie d\'une garantie complète de 12 mois contre les défauts de fabrication. Nous offrons également un service client 24/7 en français.'
    },
    {
      question: 'Combien de poids cela ajoute-t-il à ma voiture ?',
      answer: 'Seulement 650 grammes ! L\'Automass est très compact et léger. Vous pouvez facilement le ranger dans le coffre, sous le siège ou dans la boîte à gants.'
    },
  ]

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Questions fréquemment posées</h2>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
