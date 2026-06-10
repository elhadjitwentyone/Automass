import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://automass.vercel.app'
const ogImage = 'https://sc04.alicdn.com/kf/H763c039dd0f94c9bbf65b7cd8f6e895fj.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Automass 4-en-1 — Démarreur Portable · 59 900 FCFA · Dakar',
  description: 'Démarreur Portable 4-en-1 : démarrage 12V 1000A, gonfleur 150PSI, power bank 16000mAh, lampe LED 3000lm. Livraison rapide à Dakar. Prix : 59 900 FCFA.',
  keywords: 'Automass, Jump Starter, démarreur voiture Dakar, pompe à air, power bank, Sénégal',
  openGraph: {
    title: 'Automass 4-en-1 — Ne restez jamais bloqué · 59 900 FCFA',
    description: 'Démarrage 12V 1000A · Gonfleur 150PSI · Power Bank 16000mAh · LED 3000lm. Livraison rapide à Dakar. Paiement à la réception.',
    url: siteUrl,
    siteName: 'Automass',
    images: [{ url: ogImage, width: 800, height: 800, alt: 'Automass 4-en-1 Démarreur Portable' }],
    locale: 'fr_SN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automass 4-en-1 — 59 900 FCFA · Dakar',
    description: 'Démarrage 12V · Gonfleur · Power Bank · LED. Livraison rapide à Dakar. Paiement à la réception.',
    images: [ogImage],
  },
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

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

        {/* Scroll reveal */}
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

        {/* Meta Pixel — actif uniquement si NEXT_PUBLIC_META_PIXEL_ID est défini */}
        {PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${PIXEL_ID}');
                fbq('track', 'PageView');
                fbq('track', 'ViewContent', {
                  content_name: 'Automass 4-en-1',
                  content_category: 'Équipement Auto',
                  value: 59900,
                  currency: 'XOF',
                });
              `}
            </Script>
            <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" alt="" />` }} />
          </>
        )}
      </body>
    </html>
  )
}
