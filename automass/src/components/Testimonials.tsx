'use client'

const testimonials = [
  { name: 'Moussa D.', location: 'Dakar', text: 'Batterie à plat sur l\'autoroute, l\'Automass m\'a sauvé en 30 secondes. Indispensable !', rating: 5 },
  { name: 'Aminata S.', location: 'Thiès', text: 'La pompe à air est top. Mes pneus se dégonflaient souvent, maintenant je règle ça en 5 min.', rating: 5 },
  { name: 'Samba K.', location: 'Saint-Louis', text: 'Très utile pour recharger mon téléphone. La lampe LED m\'a aussi sauvé lors d\'une panne nocturne.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="testimonials-b">
      <div className="container">
        <h2 className="section-title-b">Ce que disent nos clients</h2>
        <p className="section-sub-b">Des conducteurs qui ont testé l'Automass au Sénégal</p>
        <div className="testimonials-b-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-b-card">
              <div className="stars-b-row">{'★'.repeat(t.rating)}</div>
              <p className="testimonial-b-text">"{t.text}"</p>
              <div className="testimonial-b-author">
                <span className="author-b-name">{t.name}</span>
                <span className="author-b-loc">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
