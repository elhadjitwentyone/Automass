# ecommerce-site

Mon site e-commerce avec Next.js, API, auth et Stripe

## 🚀 Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Prisma** - ORM pour la base de données
- **NextAuth** - Authentification
- **Stripe** - Paiements
- **Vercel** - Déploiement

## 📋 Prérequis

- Node.js 18+
- npm ou yarn
- PostgreSQL (ou une autre base de données supportée par Prisma)
- Comptes Stripe et NextAuth configurés

## 🛠️ Installation

1. Cloner le repository
```bash
git clone https://github.com/elhadjitwentyone/ecommerce-site.git
cd ecommerce-site
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
```bash
cp .env.example .env.local
```
Remplissez les variables avec vos clés Stripe, credentials NextAuth, etc.

4. Initialiser la base de données
```bash
npx prisma migrate dev --name init
```

5. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible à `http://localhost:3000`

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Connectez votre repository GitHub
4. Sélectionnez `elhadjitwentyone/ecommerce-site`
5. Configurez les variables d'environnement :
   - `DATABASE_URL`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
6. Cliquez sur "Deploy"

### Méthode 2 : Via le CLI Vercel

```bash
npm install -g vercel
vercel
```

Suivez les instructions du CLI.

## 📁 Structure du projet

```
ecommerce-site/
├── src/
│   ├── app/              # App Router Next.js
│   ├── components/       # Composants React
│   ├── pages/           # Pages API
│   └── styles/          # Styles CSS
├── prisma/
│   └── schema.prisma    # Schéma de base de données
├── public/              # Fichiers statiques
├── package.json
├── tsconfig.json
├── next.config.js
└── vercel.json          # Configuration Vercel
```

## 🔐 Sécurité

- Les variables sensibles sont stockées dans `.env.local`
- Les clés publiques Stripe sont préfixées par `NEXT_PUBLIC_`
- Les clés secrètes ne sont jamais exposées au client

## 📝 Licence

MIT
