# Automass 4-in-1 Multi-Function Car Jump Starter - Landing Page

Une landing page simple et responsive pour le produit Automass 4-in-1 Multi-Function Car Jump Starter.

## 🚀 Caractéristiques

- ✅ Design simple et responsive
- ✅ Intégration WhatsApp (boutons d'achat directs)
- ✅ SEO-friendly
- ✅ Déployable sur Vercel
- ✅ Construit avec Next.js 14 et TypeScript

## 📋 Sections

1. **Hero Section** - Titre, sous-titre, prix et boutons d'action
2. **Features Section** - 4 cartes des fonctionnalités principales
3. **CTA Section** - Appel à l'action final

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à `http://localhost:3000`

## ⚙️ Configuration

### Ajouter votre numéro WhatsApp

Dans les fichiers `src/components/Hero.tsx` et `src/components/CTA.tsx`, remplacez :

```typescript
const WHATSAPP_NUMBER = 'XXXXXXXXXXX'
```

Par votre numéro WhatsApp (format international, ex: `22512345678`)

## 🚀 Déploiement sur Vercel

1. Poussez le code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Créez un nouveau projet et connectez votre repository
4. Vercel détectera automatiquement Next.js et déploiera
5. Votre site sera en ligne en quelques secondes !

## 📱 Structure du projet

```
automass/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   └── styles/
│       └── globals.css
├── package.json
├── tsconfig.json
├── next.config.mjs
└── vercel.json
```

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `src/styles/globals.css` :

```css
:root {
  --color-primary: #1e3a5f;    /* Bleu foncé */
  --color-secondary: #ff6b35;  /* Orange */
  --color-light: #f8f9fa;      /* Gris très clair */
  --color-dark: #333333;       /* Texte sombre */
}
```

### Contenu
Modifiez le contenu dans :
- `src/components/Hero.tsx` - Titre, sous-titre, prix
- `src/components/Features.tsx` - Cartes de fonctionnalités
- `src/components/CTA.tsx` - Appel à l'action

## 📝 Licence

MIT
