import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'E-Commerce Site',
  description: 'Mon site e-commerce avec Next.js, API, auth et Stripe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav>
            <h1>E-Commerce</h1>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/products">Produits</a></li>
              <li><a href="/cart">Panier</a></li>
              <li><a href="/auth">Connexion</a></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>&copy; 2026 E-Commerce Site. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  )
}
