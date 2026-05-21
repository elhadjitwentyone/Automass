'use client'

const features = [
  {
    id: 1,
    title: 'Démarrage d\'urgence',
    description: 'Démarrez votre voiture même si la batterie est morte. Puissance 12 V fiable.',
    icon: '🚗',
  },
  {
    id: 2,
    title: 'Pompe à air',
    description: 'Gonflez vos pneus en quelques minutes, où que vous soyez.',
    icon: '💨',
  },
  {
    id: 3,
    title: 'Power bank USB',
    description: 'Rechargez votre téléphone ou tablette en toute situation d\'urgence.',
    icon: '🔋',
  },
  {
    id: 4,
    title: 'Lampe LED',
    description: 'Éclaircissez la nuit, votre voiture ou le garage avec sa lampe LED puissante.',
    icon: '💡',
  },
]

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Caractéristiques principales</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
