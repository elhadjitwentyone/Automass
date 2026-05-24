'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '221763202237'
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite commander le Démarreur Portable 4-en-1 au prix de 59 900 FCFA.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
const PRICE = 59900

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [step, setStep] = useState<'choice' | 'form' | 'success'>('choice')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', quantity: '1', notes: '',
  })

  if (!isOpen) return null

  const handleClose = () => {
    onClose()
    setTimeout(() => { setStep('choice'); setFormData({ name: '', phone: '', address: '', quantity: '1', notes: '' }); setError('') }, 300)
  }

  const total = (parseInt(formData.quantity) * PRICE).toLocaleString('fr-FR')

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.address) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStep('success')
      } else {
        setError('Une erreur s\'est produite. Essayez via WhatsApp.')
      }
    } catch {
      setError('Connexion impossible. Essayez via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Fermer">✕</button>

        {/* STEP 1 — CHOICE */}
        {step === 'choice' && (
          <div className="modal-content">
            <div className="modal-icon">🛒</div>
            <h2 className="modal-title">Commander votre Automass</h2>
            <p className="modal-subtitle">Choisissez votre méthode de commande</p>

            <div className="order-options">
              <button className="order-option order-option-form" onClick={() => setStep('form')}>
                <span className="option-icon">🌐</span>
                <div className="option-text">
                  <strong>Commander en ligne</strong>
                  <span>Formulaire simple — on vous contacte pour la livraison</span>
                </div>
                <span className="option-arrow">→</span>
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="order-option order-option-whatsapp"
                onClick={handleClose}
              >
                <span className="option-icon">💬</span>
                <div className="option-text">
                  <strong>Commander via WhatsApp</strong>
                  <span>Discutez directement avec notre équipe — réponse immédiate</span>
                </div>
                <span className="option-arrow">→</span>
              </a>
            </div>

            <p className="modal-note">✓ Livraison rapide · ✓ Garantie 12 mois · ✓ Stock disponible</p>
          </div>
        )}

        {/* STEP 2 — FORM */}
        {step === 'form' && (
          <div className="modal-content">
            <button className="back-btn" onClick={() => setStep('choice')}>← Retour</button>
            <h2 className="modal-title">Vos informations de livraison</h2>

            <div className="order-form">
              <div className="form-group">
                <label>Nom complet <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="Ex : Moussa Diallo"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Numéro de téléphone <span className="required">*</span></label>
                <input
                  type="tel"
                  placeholder="Ex : +221 77 000 00 00"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Adresse de livraison <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="Quartier, Ville — ex : Plateau, Dakar"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Quantité</label>
                <select value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })}>
                  <option value="1">1 unité — 59 900 FCFA</option>
                  <option value="2">2 unités — 119 800 FCFA</option>
                  <option value="3">3 unités — 179 700 FCFA</option>
                </select>
              </div>
              <div className="form-group">
                <label>Notes (optionnel)</label>
                <textarea
                  placeholder="Précisions sur la livraison, heure préférée…"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                />
              </div>

              {error && <p className="form-error">⚠️ {error}</p>}

              <div className="order-total">
                <span>Total estimé</span>
                <strong>{total} FCFA</strong>
              </div>

              <button
                className="btn btn-primary btn-submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? '⏳ Envoi en cours…' : '✓ Confirmer ma commande'}
              </button>
              <p className="form-disclaimer">Aucun paiement maintenant. Notre équipe vous contactera pour confirmer.</p>
            </div>
          </div>
        )}

        {/* STEP 3 — SUCCESS */}
        {step === 'success' && (
          <div className="modal-content modal-success">
            <div className="success-icon">✓</div>
            <h2 className="modal-title">Commande enregistrée !</h2>
            <p className="success-text">
              Merci <strong>{formData.name}</strong> ! Votre commande a bien été reçue.
              Notre équipe vous contactera au <strong>{formData.phone}</strong> très bientôt pour confirmer la livraison.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              💬 Suivre via WhatsApp
            </a>
            <button className="btn btn-primary" onClick={handleClose} style={{ marginTop: '10px' }}>
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
