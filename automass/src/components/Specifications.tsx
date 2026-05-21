'use client'

const specs = [
  { label: 'Batterie interne', value: '16000mAh' },
  { label: 'Poids', value: '650g' },
  { label: 'Dimensions', value: '20 × 10 × 5 cm' },
  { label: 'Température de fonctionnement', value: '-20°C à +60°C' },
  { label: 'Certifications', value: 'CE, FCC, RoHS' },
  { label: 'Garantie', value: '12 mois' },
]

const includes = [
  '🚗 Câbles de démarrage robustes',
  '🎒 Sac de transport pratique',
  '📖 Manuel d\'utilisation en français',
  '🔌 Câbles de recharge USB',
  '📱 Support client 24/7',
]

export default function Specifications() {
  return (
    <section className="specifications">
      <div className="container">
        <h2 className="section-title">Spécifications techniques</h2>
        
        <div className="specs-grid">
          {specs.map((spec, index) => (
            <div key={index} className="spec-item">
              <p className="spec-label">{spec.label}</p>
              <p className="spec-value">{spec.value}</p>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">✓ Ce qui est inclus dans le pack</h3>
        <div className="includes-list">
          {includes.map((item, index) => (
            <div key={index} className="include-item">{item}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
