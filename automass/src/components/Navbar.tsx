'use client'

import { useState } from 'react'
import OrderModal from '@/components/OrderModal'

export default function Navbar() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <nav className="navbar-b">
        <div className="navbar-b-logo">
          AUTO<span>MASS</span>
        </div>
        <div className="navbar-b-actions">
          <button className="btn btn-orange btn-sm" onClick={() => setModal(true)}>
            🛒 Commander
          </button>
        </div>
      </nav>
      <OrderModal isOpen={modal} onClose={() => setModal(false)} />
    </>
  )
}
