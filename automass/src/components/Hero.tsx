'use client'

import Image from 'next/image'

const WHATSAPP_NUMBER = '221763202237'
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite commander le Démarreur Portable 4-en-1 au prix de 59 900 FCFA.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">🚗 Équipement automobile indispensable</div>
        <h1 className="hero-title">Démarreur Portable<br/>Intelligent 4‑en‑1</h1>
        <h2 className="hero-subtitle">Ne restez plus jamais bloqué sur la route</h2>
        <p className="hero-description">Batterie à plat ? Pneu dégonflé ? Téléphone déchargé ? Cet appareil compact règle tout en 30 secondes. Démarrage 12V, compresseur 150 PSI, chargeur USB et lampe SOS LED — tout en un.</p>

        <div className="price-box">
          <div className="price-content">
            <p className="price-label">Prix spécial lancement</p>
            <p className="price-amount">59 900 FCFA</p>
            <p className="price-note">✓ Livraison rapide | ✓ Garantie 1 an | ✓ Stock limité</p>
          </div>
        </div>

        <div className="button-group">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            🛒 Commander maintenant
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            💬 Poser une question
          </a>
        </div>

        <div className="trust-badges">
          <div className="badge">✓ Stock disponible</div>
          <div className="badge">✓ Paiement sécurisé</div>
          <div className="badge">✓ Support en français</div>
        </div>
      </div>

      <div className="hero-image">
        <div className="product-showcase product-showcase-img">
          <Image
            src="https://sc04.alicdn.com/kf/H763c039dd0f94c9bbf65b7cd8f6e895fj.jpg"
            alt="Démarreur Portable Intelligent 4-en-1"
            width={380}
            height={380}
            style={{ objectFit: 'contain', borderRadius: '12px' }}
            priority
          />
        </div>
        <div className="product-info-box">
          <p className="info-text">⚡ Démarre en 30 secondes</p>
          <p className="info-text">💨 Pression jusqu'à 150 PSI</p>
          <p className="info-text">🔋 Batterie 16 000 mAh intégrée</p>
        </div>
      </div>
    </section>
  )
}
