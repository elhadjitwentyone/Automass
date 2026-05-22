'use client'

const WHATSAPP_NUMBER = '221763202237'
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite commander le Démarreur Portable 4-en-1 au prix de 59 900 FCFA.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Sécurisez vos trajets dès aujourd\'hui</h2>
          <p className="cta-subtitle">Ne soyez jamais pris au dépourvu sur la route. L\'Automass est votre compagnon de confiance.</p>
          
          <div className="cta-highlights">
            <div className="highlight">
              <span className="highlight-icon">🚚</span>
              <span>Livraison en 24-48h</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">💳</span>
              <span>Paiement sécurisé</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🔄</span>
              <span>14 jours de retour</span>
            </div>
          </div>
          
          <div className="button-group cta-buttons">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              🛒 Commander maintenant — 59 900 FCFA
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
              💬 Demander plus d'infos
            </a>
          </div>

          <p className="cta-note">Offre limitée | Stock en cours | Garantie 12 mois incluse</p>
        </div>
      </div>
    </section>
  )
}
