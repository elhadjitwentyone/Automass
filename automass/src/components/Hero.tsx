'use client'

const WHATSAPP_NUMBER = 'XXXXXXXXXXX' // Replace with your WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite acheter le Automass 4-in-1 Multi-Function Car Jump Starter au prix de 65 000 FCFA.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">🚗 Équipement automobile indispensable</div>
        <h1 className="hero-title">Automass 4‑in‑1</h1>
        <h2 className="hero-subtitle">Le démarreur d'urgence tout-en-un pour votre voiture</h2>
        <p className="hero-description">Plus de panique en cas de batterie faible ! Démarrez votre voiture, gonflez vos pneus, rechargez vos appareils et éclairez votre chemin, le tout en un seul appareil compact et puissant.</p>
        
        <div className="price-box">
          <div className="price-content">
            <p className="price-label">Prix spécial</p>
            <p className="price-amount">65 000 FCFA</p>
            <p className="price-note">✓ Livraison rapide | ✓ Garantie 1 an</p>
          </div>
        </div>

        <div className="button-group">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            🛒 Acheter maintenant
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            💬 Poser une question
          </a>
        </div>

        <div className="trust-badges">
          <div className="badge">✓ Stock disponible</div>
          <div className="badge">✓ Paiement sécurisé</div>
          <div className="badge">✓ Support français</div>
        </div>
      </div>

      <div className="hero-image">
        <div className="product-showcase">
          <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            {/* Jump Starter device illustration */}
            <defs>
              <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#2a5a8a', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#1e3a5f', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Main body */}
            <rect x="60" y="80" width="180" height="140" rx="12" fill="url(#deviceGradient)" stroke="#ff6b35" strokeWidth="2"/>
            
            {/* Display screen */}
            <rect x="80" y="100" width="140" height="50" rx="6" fill="#0a0e27" stroke="#ff6b35" strokeWidth="1.5"/>
            <text x="150" y="130" textAnchor="middle" fill="#4ade80" fontSize="14" fontFamily="monospace" fontWeight="bold">AUTOMASS</text>
            
            {/* Clamps (red and black) */}
            <circle cx="95" cy="165" r="12" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
            <circle cx="205" cy="165" r="12" fill="#1f2937" stroke="#111827" strokeWidth="1"/>
            
            {/* Buttons and ports section */}
            <g>
              {/* Air pump button */}
              <circle cx="110" cy="200" r="8" fill="#3b82f6" stroke="#1e40af" strokeWidth="1"/>
              <text x="110" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AIR</text>
              
              {/* Power button */}
              <circle cx="150" cy="200" r="8" fill="#ff6b35" stroke="#dc2515" strokeWidth="1"/>
              <text x="150" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">PWR</text>
              
              {/* LED button */}
              <circle cx="190" cy="200" r="8" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
              <text x="190" y="205" textAnchor="middle" fill="#1f2937" fontSize="10" fontWeight="bold">LED</text>
            </g>
            
            {/* USB ports */}
            <rect x="125" y="220" width="50" height="12" rx="2" fill="#6b7280" stroke="#374151" strokeWidth="1"/>
            <text x="150" y="229" textAnchor="middle" fill="#f3f4f6" fontSize="9" fontFamily="Arial">USB</text>
            
            {/* Handle/grip design */}
            <path d="M 75 75 Q 75 60 90 60" stroke="#ff6b35" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M 225 75 Q 225 60 210 60" stroke="#ff6b35" strokeWidth="3" fill="none" strokeLinecap="round"/>
            
            {/* Decorative elements */}
            <circle cx="85" cy="110" r="3" fill="#4ade80" opacity="0.8"/>
            <circle cx="215" cy="110" r="3" fill="#4ade80" opacity="0.8"/>
            <circle cx="150" cy="115" r="3" fill="#4ade80" opacity="0.8"/>
          </svg>
        </div>
        <div className="product-info-box">
          <p className="info-text">✓ Compact et léger</p>
          <p className="info-text">✓ Batterie longue durée</p>
          <p className="info-text">✓ Certifié et sécurisé</p>
        </div>
      </div>
    </section>
  )
}
