'use client'

const specs = [
  { label: 'Batterie interne', value: '16 000mAh' },
  { label: 'Poids', value: '650g' },
  { label: 'Dimensions', value: '20 × 10 × 5 cm' },
  { label: 'Température', value: '-20°C à +60°C' },
  { label: 'Certifications', value: 'CE, FCC, RoHS' },
  { label: 'Garantie', value: '12 mois' },
]

const includes = [
  '🚗 Câbles de démarrage robustes',
  '🎒 Sac de transport pratique',
  '📖 Manuel en français',
  '🔌 Câbles de recharge USB',
  '📱 Support client 24/7',
]

export default function Specifications() {
  return (
    <section className="specs-b">
      <div className="container">
        <h2 className="section-title-b">Spécifications techniques</h2>
        <div className="specs-b-grid">
          {specs.map((s, i) => (
            <div key={i} className="spec-b-item">
              <p className="spec-b-label">{s.label}</p>
              <p className="spec-b-value">{s.value}</p>
            </div>
          ))}
        </div>
        <h3 className="specs-b-subtitle">✓ Contenu du pack</h3>
        <div className="includes-b">
          {includes.map((item, i) => (
            <div key={i} className="include-b-item">{item}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
