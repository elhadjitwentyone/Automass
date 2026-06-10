'use client'

import { useState } from 'react'
import OrderModal from '@/components/OrderModal'

export default function CTA() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <section className="cta-b">
        <div className="cta-b-inner">
          <div className="cta-b-badge">🔥 Offre limitée</div>
          <h2 className="cta-b-title">Protégez votre voiture.<br />Commandez maintenant.</h2>
          <p className="cta-b-sub">Stock disponible · Livraison 24-48h à Dakar · Paiement à la réception</p>

          <div className="cta-b-highlights">
            {['🚚 Livraison rapide', '💳 Paiement à la livraison', '🔄 14 jours de retour', '✅ Garantie 12 mois'].map(h => (
              <span key={h} className="cta-b-hl">{h}</span>
            ))}
          </div>

          <div className="button-group cta-b-btns">
            <button className="btn btn-dark btn-large btn-pulse" onClick={() => setModal(true)}>
              🛒 Commander maintenant — 59 900 FCFA
            </button>
          </div>
        </div>
      </section>
      <OrderModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  )
}
