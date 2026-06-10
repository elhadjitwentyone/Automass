'use client'

import { useState, useEffect } from 'react'

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

const logOrder = (order: { name: string; phone: string; address: string; quantity: string; total: string; notes: string }) => {
  if (!GS_WEBHOOK) return
  const now = new Date()
  const p = (n: number) => String(n).padStart(2, '0')
  fetch(GS_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'DATE': `${p(now.getDate())}/${p(now.getMonth() + 1)}/${now.getFullYear()}`,
      'ID COMMANDE': `${now.getFullYear()}${p(now.getMonth() + 1)}${p(now.getDate())}-${now.getTime().toString().slice(-4)}`,
      'CANAL': 'Site Web',
      'NOM CLIENT': order.name,
      'TÉLÉPHONE': order.phone,
      'ADRESSE': order.address,
      'VILLE': 'Dakar',
      'QUARTIER': '—',
      'PRODUIT': 'Automass 4-en-1',
      'QTÉ': order.quantity,
      'PRIX UNITAIRE (FCFA)': '59900',
      'TOTAL (FCFA)': order.total.replace(' FCFA', '').replace(/\s/g, ''),
      'FRAIS LIVRAISON (FCFA)': '0',
      'STATUT': 'Nouvelle',
      'DATE LIVRAISON': '',
      'SOURCE PUB': 'Facebook Ads',
      'NOTES': order.notes || '—',
    }),
  }).catch(() => {})
}

const PRICE = 59900
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/fedobusiness@proton.me'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', quantity: '1', notes: '',
  })

  useEffect(() => {
    if (isOpen) {
      fbq('track', 'InitiateCheckout', { value: PRICE, currency: 'XOF', content_name: 'Automass 4-en-1' })
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep('form')
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
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          quantity: formData.quantity,
          total: `${total} FCFA`,
          notes: formData.notes,
        })
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setError('Connexion impossible. Veuillez réessayer dans quelques instants.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>✕</button>

        {step === 'form' && (
          <div className="modal-content">
            <div className="modal-icon">🛒</div>
            <h2 className="modal-title">Vos informations de livraison</h2>
            <p className="modal-subtitle">Remplissez le formulaire — notre équipe vous contacte pour confirmer</p>
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
            <p className="modal-note">✓ Livraison rapide · ✓ Garantie 12 mois · ✓ Stock disponible</p>
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
            <button className="btn-submit" onClick={handleClose}>Fermer</button>
          </div>
        )}
      </div>
    </div>
  )
}
