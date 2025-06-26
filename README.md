# Exercice Front End – Module CRM (NextJS) pour le test technique chez AriMayi

## 🎯 Présentation du Projet

Ce projet est un module CRM (Customer Relationship Management) moderne développé en Next.js dans le cadre d'un test technique pour AriMayi. L'application permet de gérer efficacement une base de données clients avec une interface utilisateur élégante et responsive.

## ✨ Fonctionnalités Principales

### 🔐 Authentification
- **Page de connexion** avec validation des formulaires
- **Authentification mock** (pas de backend requis)
- **Gestion de session** avec persistance locale
- **Interface responsive** avec design moderne

### 📊 Dashboard
- **Vue d'ensemble** des statistiques clients
- **Métriques en temps réel** : nombre total de clients, nouveaux clients du mois, activités
- **Graphiques visuels** de répartition par tags
- **Liste des clients récents** avec informations clés

### 👥 Gestion des Clients
- **Liste complète** des clients avec tableau interactif
- **Recherche avancée** par nom, email ou téléphone
- **Filtrage par tags** avec interface intuitive
- **Tri dynamique** par nom, email ou date de création
- **Pagination** pour une navigation optimale
- **Fiches détaillées** avec historique complet des activités

### ➕ Ajout de Clients
- **Formulaire complet** avec validation en temps réel
- **Champs obligatoires** : nom, prénom, email, téléphone
- **Validation avancée** : format email, numéro de téléphone français
- **Système de tags** personnalisable
- **Champs optionnels** : entreprise, poste, notes
- **Feedback utilisateur** avec messages de succès élégants

### 📝 Historique des Activités
- **Enregistrement d'interactions** : appels, emails, réunions, notes
- **Chronologie visuelle** des activités par client
- **Ajout d'activités** via interface modale
- **Catégorisation** avec icônes et couleurs distinctives

### 🎨 Interface & Expérience Utilisateur
- **Design moderne** inspiré des standards Apple
- **Mode sombre/clair** avec transition fluide
- **Animations subtiles** et micro-interactions
- **Navigation intuitive** avec sidebar responsive
- **Composants réutilisables** basés sur shadcn/ui

## 🛠️ Stack Technique

### Frontend
- **Next.js 15.3.4** - Framework React avec App Router
- **React 19.0.0** - Bibliothèque UI avec hooks modernes
- **TypeScript 5.6.3** - Typage statique pour la robustesse

### Styling & UI
- **Tailwind CSS 3.4.14** - Framework CSS utility-first
- **shadcn/ui** - Composants UI modernes et accessibles
- **Lucide React** - Icônes cohérentes et élégantes
- **next-themes** - Gestion du thème sombre/clair
- **Police Poppins** - Typographie moderne et lisible

### Gestion d'État & Formulaires
- **Zustand 5.0.0** - Store global léger avec persistance
- **React Hook Form 7.53.0** - Gestion des formulaires performante
- **Zod 3.23.8** - Validation de schémas TypeScript-first

### Utilitaires & Optimisation
- **date-fns 3.6.0** - Manipulation des dates avec localisation française
- **Sonner** - Notifications toast élégantes
- **class-variance-authority** - Gestion des variantes de composants

### Tests
- **Jest 29.7.0** - Framework de tests JavaScript
- **Testing Library** - Tests d'intégration React
- **jsdom** - Environnement DOM pour les tests

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [url-du-repo]
cd crm-nextjs-arimayi

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
npm run test     # Lancement des tests
npm run test:watch # Tests en mode watch
```

L'application sera accessible sur `http://localhost:3000`

### Compte de Démonstration
- **Email** : admin@arimayi.com
- **Mot de passe** : password123

## 🌐 Déploiement

Le projet a été déployé sur Netlify et est disponible à l'URL : **http://netlify.crm.app**

### Configuration de Déploiement
- **Build Command** : `npm run build`
- **Publish Directory** : `out`
- **Node Version** : 18+

## 📱 Responsive Design

L'application est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

### Fonctionnalités Mobile
- Menu de navigation adaptatif
- Tables scrollables horizontalement
- Formulaires optimisés pour le tactile
- Interactions gestuelles fluides

## 🎯 Fonctionnalités Avancées

### Gestion d'État avec Zustand
- **Store persistant** avec localStorage
- **Actions typées** pour la manipulation des données
- **État réactif** avec re-render optimisé
- **Middleware de persistance** pour la sauvegarde automatique

### Validation de Formulaires
- **Validation en temps réel** avec React Hook Form
- **Schémas Zod** pour la validation côté client
- **Messages d'erreur contextuels** en français
- **Désactivation intelligente** du bouton submit

### Optimisations SEO
- **Métadonnées complètes** avec Open Graph
- **Structure sémantique** HTML5
- **Optimisation des performances** avec Next.js
- **Génération statique** pour un chargement rapide

### Accessibilité
- **Navigation au clavier** complète
- **Contrastes respectés** WCAG 2.1
- **Labels appropriés** pour les lecteurs d'écran
- **Focus management** dans les modales

## 🧪 Tests

Le projet inclut une suite de tests complète :

### Tests Unitaires
- **Composants React** avec Testing Library
- **Store Zustand** avec tests d'état
- **Fonctions utilitaires** avec Jest

### Tests d'Intégration
- **Formulaires** avec validation
- **Navigation** entre les pages
- **Interactions utilisateur** complètes

## 👨‍💻 Développement

### Standards de Code
- **ESLint** avec configuration Next.js
- **Prettier** pour le formatage automatique
- **TypeScript strict** pour la sécurité des types
- **Conventions de nommage** cohérentes

### Performance
- **Lazy loading** des composants
- **Optimisation des images** Next.js
- **Bundle splitting** automatique
- **Caching** intelligent des données

## 📞 Support

Pour toute question ou suggestion concernant ce projet :
- **Email** : [geektateur263@gmail.com]
- **GitHub** : [https://github.com/gaillardy]
---

**Développé avec ❤️ pour AriMayi**

*Ce projet démontre les compétences en développement frontend moderne avec Next.js, React, et TypeScript, en mettant l'accent sur l'expérience utilisateur, la performance et la maintenabilité du code.*