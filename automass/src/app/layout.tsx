import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Automass 4-in-1 Multi-Function Car Jump Starter – 65 000 FCFA',
  description: 'Découvrez l\'Automass 4-in-1 Multi-Function Car Jump Starter, tout-en-un pour démarrer votre voiture, gonfler vos pneus, recharger vos appareils et éclairer la nuit. Prix : 65 000 FCFA. Achetez ou contactez-nous sur WhatsApp.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'Automass, Jump Starter, démarreur voiture, pompe à air, power bank, lampe LED',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
