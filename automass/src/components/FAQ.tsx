'use client'

const faqs = [
  { q: 'Compatible avec ma voiture ?', a: 'Oui, l\'Automass fonctionne avec tous les véhicules 12V : voitures, motos, camionnettes.' },
  { q: 'Combien de démarrages par charge ?', a: 'Entre 5 et 10 démarrages selon le modèle. Recharge complète en 4-5h via USB.' },
  { q: 'La pompe fonctionne pour tous les pneus ?', a: 'Oui — voitures, motos, vélos, ballons. Adaptateurs inclus pour toutes les valves.' },
  { q: 'C\'est sûr pour ma batterie ?', a: 'Totalement. Protection contre surcharge, court-circuit et inversion de polarité.' },
  { q: 'Quelle est la garantie ?', a: 'Garantie complète 12 mois + support client en français 24/7.' },
  { q: 'Poids et encombrement ?', a: 'Seulement 650g et 20×10×5cm. Se range sous le siège ou dans le coffre.' },
]

export default function FAQ() {
  return (
    <section className="faq-b">
      <div className="container">
        <h2 className="section-title-b">Questions fréquentes</h2>
        <div className="faq-b-grid">
          {faqs.map((f, i) => (
            <div key={i} className="faq-b-item">
              <h3 className="faq-b-q">{f.q}</h3>
              <p className="faq-b-a">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
