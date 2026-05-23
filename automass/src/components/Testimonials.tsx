'use client'

const testimonials = [
  {
    name: 'Moussa D.',
    location: 'Dakar',
    text: 'Excellent produit ! Ma batterie a rendu l\'âme sur l\'autoroute et grâce à l\'Automass, j\'ai pu démarrer et rentrer à la maison. Très satisfait !',
    rating: 5,
  },
  {
    name: 'Aminata S.',
    location: 'Thiès',
    text: 'La pompe à air est vraiment pratique. Mes pneus se dégonflaient et j\'ai pu les regonfler en 5 minutes. Super !',
    rating: 5,
  },
  {
    name: 'Samba K.',
    location: 'Saint-Louis',
    text: 'Très utile pour recharger mon téléphone en voiture. La lampe LED m\'a aussi sauvé lors d\'une réparation nocturne.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Ce que disent nos clients</h2>
        <p className="section-subtitle">Découvrez pourquoi des milliers de conducteurs font confiance à Automass</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-location">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
