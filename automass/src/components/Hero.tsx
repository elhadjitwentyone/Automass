'use client'

const WHATSAPP_NUMBER = 'XXXXXXXXXXX' // Replace with your WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite acheter le Automass 4-in-1 Multi-Function Car Jump Starter au prix de 65 000 FCFA.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Automass – 4‑in‑1 Multi‑Function Car Jump Starter</h1>
        <p className="hero-subtitle">Tout en un pour démarrer votre voiture, gonfler vos pneus, recharger vos appareils et éclairer la nuit.</p>
        
        <div className="price-box">
          <p className="price-label">Prix :</p>
          <p className="price-amount">65 000 FCFA</p>
        </div>

        <div className="button-group">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Acheter maintenant
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Contactez‑nous sur WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="placeholder-image">
          <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Jump Starter illustration */}
            <rect x="40" y="60" width="120" height="80" rx="8" fill="#1e3a5f" />
            <circle cx="60" cy="85" r="8" fill="#ff6b35" />
            <circle cx="140" cy="85" r="8" fill="#ff6b35" />
            <rect x="70" y="90" width="60" height="30" rx="4" fill="#2a5a8a" />
            <text x="100" y="110" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Arial">Automass</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
