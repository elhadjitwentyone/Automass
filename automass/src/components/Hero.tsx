'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import OrderModal from '@/components/OrderModal'

const WHATSAPP_LINK = `https://wa.me/221763202237?text=${encodeURIComponent('Bonjour, je souhaite commander le Démarreur Portable 4-en-1 au prix de 59 900 FCFA.')}`

function calcStock() {
  const anchor = new Date('2026-06-10').getTime()
  const now = Date.now()
  const daysSince = Math.max(0, (now - anchor) / (1000 * 60 * 60 * 24))
  const seed = new Date().getDate() % 3
  const stock = Math.max(Math.round(43 - daysSince * 1.8 - seed), 5)
  const soldToday = Math.min(2 + seed + Math.floor(new Date().getHours() / 6), 9)
  return { stock, soldToday }
}

const features = [
  { icon: '⚡', label: 'Démarrage 12V', val: '1000A' },
  { icon: '💨', label: '150 PSI', val: 'Gonfleur' },
  { icon: '🔋', label: '16 000mAh', val: 'Power Bank' },
  { icon: '💡', label: 'LED 3000lm', val: '5 modes' },
]

export default function Hero() {
  const [modal, setModal] = useState(false)
  const [stockData, setStockData] = useState({ stock: 43, soldToday: 3 })

  useEffect(() => {
    setStockData(calcStock())
  }, [])

  return (
    <>
      <section className="hero-b">
        {/* Left — orange block */}
        <div className="hero-b-left">
          <div className="hero-b-deco-circle top" />
          <div className="hero-b-deco-circle bottom" />
          <div className="hero-b-stamp">⚡ Stock Limité !</div>

          <div className="hero-b-eyebrow">🚗 Équipement N°1 à Dakar</div>

          <h1 className="hero-b-title">
            NE RESTEZ<br />
            JAMAIS<br />
            BLOQUÉ.
          </h1>

          <p className="hero-b-desc">
            Le seul appareil qu'il vous faut pour toutes les urgences auto :
            démarrage · gonflage · charge USB · éclairage LED.
          </p>

          <div className="hero-b-pricebox">
            <p className="hero-b-price-label">Prix spécial lancement</p>
            <p className="hero-b-price-old"><s>70 000 FCFA</s></p>
            <p className="hero-b-price">59 900 <span>FCFA</span></p>
            <p className="hero-b-price-note">✓ Livraison gratuite · ✓ Garantie 12 mois</p>
          </div>

          <div className="stock-bar">
            <div className="stock-bar-track">
              <div className="stock-bar-fill" style={{ width: `${Math.round((stockData.stock / 50) * 100)}%` }} />
            </div>
            <div className="stock-bar-labels">
              <span className="stock-remaining">
                <span className="stock-pulse" />
                <strong>{stockData.stock}</strong> unités restantes
              </span>
              <span className="stock-sold">{stockData.soldToday} vendus aujourd&apos;hui</span>
            </div>
          </div>

          <div className="button-group">
            <button className="btn btn-dark btn-pulse" onClick={() => setModal(true)}>
              🛒 Commander maintenant
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Right — product */}
        <div className="hero-b-right">
          <div className="product-float-b">
            <Image
              src="https://sc04.alicdn.com/kf/H763c039dd0f94c9bbf65b7cd8f6e895fj.jpg"
              alt="Automass 4-en-1"
              width={320}
              height={320}
              style={{ objectFit: 'cover', borderRadius: '16px', boxShadow: '0 24px 60px rgba(255,69,0,.2)' }}
              priority
            />
          </div>

          <div className="features-grid-b">
            {features.map(f => (
              <div key={f.label} className="feat-b">
                <span className="feat-b-icon">{f.icon}</span>
                <div>
                  <div className="feat-b-label">{f.label}</div>
                  <div className="feat-b-val">{f.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="social-proof-b">
            <div className="stars-b">⭐⭐⭐⭐⭐</div>
            <div>
              <div className="sp-title">4.9 / 5 étoiles</div>
              <div className="sp-sub">+150 clients satisfaits à Dakar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="sticky-cta-b">
        <button className="btn btn-dark btn-pulse" onClick={() => setModal(true)}>
          🛒 Commander — 59 900 FCFA
        </button>
      </div>

      <OrderModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  )
}
