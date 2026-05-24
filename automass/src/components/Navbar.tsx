'use client'

import { useState } from 'react'
import OrderModal from '@/components/OrderModal'

const WHATSAPP_LINK = `https://wa.me/221763202237?text=${encodeURIComponent('Bonjour, je souhaite commander le Démarreur Portable 4-en-1 Automass.')}`

export default function Navbar() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <nav className="navbar-b">
        <div className="navbar-b-logo">
          AUTO<span>MASS</span>
        </div>
        <div className="navbar-b-actions">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
            💬 WhatsApp
          </a>
          <button className="btn btn-orange btn-sm" onClick={() => setModal(true)}>
            🛒 Commander
          </button>
        </div>
      </nav>
      <OrderModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  )
}
