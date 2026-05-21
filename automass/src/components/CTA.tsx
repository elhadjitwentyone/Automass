'use client'

const WHATSAPP_NUMBER = 'XXXXXXXXXXX' // Replace with your WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite acheter le Automass 4-in-1 Multi-Function Car Jump Starter au prix de 65 000 FCFA.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="cta-title">Prêt à commander l\'Automass ?</h2>
        <p className="cta-text">Ajoutez ce 4‑in‑1 à votre voiture et soyez prêt à affronter toutes les urgences.</p>
        
        <div className="button-group">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Acheter maintenant
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Contactez‑nous sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
