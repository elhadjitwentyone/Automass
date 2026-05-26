'use client'

import { useState } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const fbq = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args)
  }
}

const GS_WEBHOOK = process.env.NEXT_PUBLIC_GS_WEBHOOK

const logOrder = (data: Record<string, string>) => {
  if (!GS_WEBHOOK) return
  fetch(GS_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch(() => {})
}

const WHATSAPP_NUMBER = '221774080629'
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite commander le Démarreur Portable 4-en-1 au prix de 59 900 FCFA.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
const PRICE = 59900
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/fedobusiness@proton.me'

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
    setTimeout(() => {
      setStep('choice')
      setFormData({ name: '', phone: '', address: '', quantity: '1', notes: '' })
      setError('')
    }, 300)
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
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `🛒 Nouvelle commande Automass — ${formData.name} (×${formData.quantity})`,
          'Nom complet': formData.name,
          'Téléphone': formData.phone,
          'Adresse livraison': formData.address,
          'Quantité': `${formData.quantity} unité${parseInt(formData.quantity) > 1 ? 's' : ''}`,
          'Total': `${total} FCFA`,
          'Notes': formData.notes || '—',
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true || res.ok) {
        setStep('success')
        fbq('track', 'Purchase', {
          value: parseInt(formData.quantity) * PRICE,
          currency: 'XOF',
          content_name: 'Automass 4-en-1',
          num_items: parseInt(formData.quantity),
        })
        logOrder({
          source: 'Formulaire',
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          quantity: formData.quantity,
          total: `${total} FCFA`,
          notes: formData.notes || '—',
        })
      } else {
        setError('Erreur envoi. Commandez via WhatsApp.')
      }
    } catch {
      setError('Connexion impossible. Commandez via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>✕</button>

        {step === 'choice' && (
          <div className="modal-content">
            <div className="modal-icon">🛒</div>
            <h2 className="modal-title">Commander votre Automass</h2>
            <p className="modal-subtitle">Choisissez votre méthode de commande</p>
            <div className="order-options">
              <button className="order-option order-option-form" onClick={() => {
                setStep('form')
                fbq('track', 'InitiateCheckout', { value: PRICE, currency: 'XOF', content_name: 'Automass 4-en-1' })
              }}>
                <span className="option-icon">🌐</span>
                <div className="option-text">
                  <strong>Commander en ligne</strong>
                  <span>Formulaire simple — on vous contacte pour la livraison</span>
                </div>
                <span className="option-arrow">→</span>
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="order-option order-option-whatsapp" onClick={() => {
                  fbq('track', 'Lead', { value: PRICE, currency: 'XOF', content_name: 'Automass WhatsApp' })
                  logOrder({
                    source: 'WhatsApp',
                    name: '—',
                    phone: '—',
                    address: '—',
                    quantity: '—',
                    total: '59 900 FCFA',
                    notes: 'Redirection WhatsApp',
                  })
                  handleClose()
                }}>
                <span className="option-icon">💬</span>
                <div className="option-text">
                  <strong>Commander via WhatsApp</strong>
                  <span>Discutez directement — réponse immédiate</span>
                </div>
                <span className="option-arrow">→</span>
              </a>
            </div>
            <p className="modal-note">✓ Livraison rapide · ✓ Garantie 12 mois · ✓ Stock disponible</p>
          </div>
        )}

        {step === 'form' && (
          <div className="modal-content">
            <button className="back-btn" onClick={() => setStep('choice')}>← Retour</button>
            <h2 className="modal-title">Vos informations de livraison</h2>
            <div className="order-form">
              <div className="form-group">
                <label>Nom complet <span className="required">*</span></label>
                <input type="text" placeholder="Ex : Moussa Diallo"
                  value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Numéro de téléphone <span className="required">*</span></label>
                <input type="tel" placeholder="Ex : +221 77 000 00 00"
                  value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Adresse de livraison <span className="required">*</span></label>
                <input type="text" placeholder="Quartier, Ville — ex : Plateau, Dakar"
                  value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
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
                <textarea placeholder="Précisions sur la livraison…"
                  value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} rows={3} />
              </div>
              {error && <p className="form-error">⚠️ {error}</p>}
              <div className="order-total">
                <span>Total estimé</span>
                <strong>{total} FCFA</strong>
              </div>
              <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
                {loading ? '⏳ Envoi en cours…' : '✓ Confirmer ma commande'}
              </button>
              <p className="form-disclaimer">Aucun paiement maintenant. Notre équipe vous contactera.</p>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="modal-content modal-success">
            <div className="success-icon">✓</div>
            <h2 className="modal-title">Commande enregistrée !</h2>
            <p className="success-text">
              Merci <strong>{formData.name}</strong> ! Notre équipe vous contactera au{' '}
              <strong>{formData.phone}</strong> très bientôt pour confirmer la livraison.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>
              💬 Suivre via WhatsApp
            </a>
            <button className="btn-submit" onClick={handleClose}>Fermer</button>
          </div>
        )}
      </div>
    </div>
  )
}
