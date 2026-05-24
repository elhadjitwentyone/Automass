'use client'

const items = [
  { icon: '⚡', title: 'Démarrage 12V · 1000A', sub: 'Pour tous véhicules 12V' },
  { icon: '💨', title: 'Compresseur 150 PSI', sub: 'Pneu gonflé en 4 min' },
  { icon: '🔋', title: 'Power Bank 16 000mAh', sub: '3 ports USB · recharge rapide' },
  { icon: '💡', title: 'Lampe LED · 3000 lm', sub: '5 modes · autonomie 8h' },
]

export default function Features() {
  return (
    <section className="features-b">
      <div className="features-b-grid">
        {items.map((item, i) => (
          <div key={i} className="features-b-item">
            <div className="features-b-icon">{item.icon}</div>
            <div className="features-b-title">{item.title}</div>
            <div className="features-b-sub">{item.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
