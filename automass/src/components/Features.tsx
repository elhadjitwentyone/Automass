'use client'

const features = [
  {
    id: 1,
    title: 'Démarrage d\'urgence 12V',
    description: 'Démarrez votre voiture en quelques secondes, même avec une batterie complètement déchargée. Puissance de 1000A pour tous les modèles.',
    icon: '⚡',
    color: 'feature-red',
    specs: 'Tension: 12V | Courant: 1000A'
  },
  {
    id: 2,
    title: 'Pompe à air intégrée',
    description: 'Gonflez vos pneus de voiture en 3-5 minutes sans effort. Pratique pour les pneus dégonflés ou avant un long trajet.',
    icon: '💨',
    color: 'feature-blue',
    specs: 'Pression: 0-150 PSI | Débit: 35L/min'
  },
  {
    id: 3,
    title: 'Power bank USB 16000mAh',
    description: 'Rechargez votre téléphone, tablette ou tout appareil USB en cas d\'urgence. Batterie haute capacité pour plusieurs charges.',
    icon: '🔌',
    color: 'feature-green',
    specs: 'Capacité: 16000mAh | Sortie USB: 2A'
  },
  {
    id: 4,
    title: 'Lampe LED ultra-puissante',
    description: 'Éclairez brillamment votre voiture, le garage ou la route la nuit. 5 modes d\'éclairage pour tous les besoins.',
    icon: '💡',
    color: 'feature-yellow',
    specs: '3000 lumens | Autonomie: 8h'
  },
]

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">4 fonctionnalités en 1</h2>
          <p className="section-subtitle">Tout ce dont vous avez besoin pour les urgences automobiles</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className={`feature-card ${feature.color}`}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-specs">{feature.specs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
