'use client'

const WHATSAPP_NUMBER = 'XXXXXXXXXXX'
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite acheter le Automass 4-in-1 Multi-Function Car Jump Starter au prix de 65 000 FCFA.')
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
              🛒 Commander l'Automass - 65 000 FCFA
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
