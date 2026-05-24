import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const PRICE = 59900

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, address, quantity, notes } = body

    if (!name || !phone || !address) {
      return NextResponse.json({ success: false, message: 'Champs manquants' }, { status: 400 })
    }

    const totalAmount = (parseInt(quantity) * PRICE).toLocaleString('fr-FR')
    const orderDate = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Dakar' })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const mailOptions = {
      from: `Automass Shop <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      replyTo: phone, // pour répondre facilement
      subject: `🛒 Nouvelle commande Automass — ${name} (${quantity} unité${parseInt(quantity) > 1 ? 's' : ''})`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f7fa;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2a5a8a 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; font-weight: 800;">🛒 Nouvelle Commande</h1>
            <p style="margin: 8px 0 0; opacity: 0.85; font-size: 15px;">Automass — Démarreur Portable 4-en-1</p>
            <p style="margin: 5px 0 0; opacity: 0.7; font-size: 13px;">${orderDate}</p>
          </div>

          <!-- Client Info -->
          <div style="background: white; padding: 25px; margin: 0; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <h2 style="color: #1e3a5f; font-size: 16px; margin: 0 0 15px; text-transform: uppercase; letter-spacing: 1px;">📋 Informations Client</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; width: 140px; font-weight: 600;">Nom complet</td>
                <td style="padding: 10px 0; color: #333; font-weight: 700;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: 600;">Téléphone</td>
                <td style="padding: 10px 0;">
                  <a href="tel:${phone}" style="color: #ff6b35; font-weight: 700; text-decoration: none;">${phone}</a>
                  &nbsp;|&nbsp;
                  <a href="https://wa.me/${phone.replace(/\D/g, '')}" style="color: #25D366; font-weight: 600; text-decoration: none;">💬 WhatsApp</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: 600;">Livraison à</td>
                <td style="padding: 10px 0; color: #333;">${address}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-weight: 600;">Quantité</td>
                <td style="padding: 10px 0; color: #333;">${quantity} unité${parseInt(quantity) > 1 ? 's' : ''}</td>
              </tr>
              ${notes ? `<tr><td style="padding: 10px 0; color: #888; font-weight: 600; vertical-align: top;">Notes</td><td style="padding: 10px 0; color: #555; font-style: italic;">${notes}</td></tr>` : ''}
            </table>
          </div>

          <!-- Total -->
          <div style="background: #ff6b35; color: white; padding: 20px 25px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 22px; font-weight: 800;">Montant total : ${totalAmount} FCFA</p>
            <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">${quantity} × 59 900 FCFA — Paiement à la livraison</p>
          </div>

          <!-- Footer -->
          <p style="text-align: center; color: #999; font-size: 12px; margin: 15px 0;">
            Commande reçue via automass.vercel.app · Répondez directement à cet email pour contacter le client
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: 'Commande reçue !' })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ success: false, message: 'Erreur serveur' }, { status: 500 })
  }
}
