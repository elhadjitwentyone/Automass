import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Automass 4-en-1 — Démarreur Portable · 59 900 FCFA · Dakar',
  description: 'Démarreur Portable 4-en-1 : démarrage 12V 1000A, gonfleur 150PSI, power bank 16000mAh, lampe LED 3000lm. Livraison rapide à Dakar. Prix : 59 900 FCFA.',
  keywords: 'Automass, Jump Starter, démarreur voiture Dakar, pompe à air, power bank, Sénégal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var els = document.querySelectorAll('.reveal');
              if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('visible')});return}
              var obs = new IntersectionObserver(function(entries){
                entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})
              },{threshold:0.1});
              els.forEach(function(e){obs.observe(e)});
            })();
          `
        }} />
      </body>
    </html>
  )
}
