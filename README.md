# EdgeZen Labs - Official Website

**Engineering Digital Excellence**

This is the official website for EdgeZen Labs, a full-stack software development company specializing in mobile apps, cloud engineering, and enterprise solutions.

## 🌐 Live Website

- **Production**: https://edgezenlabs.com
- **GitHub Pages**: https://[your-username].github.io/edgezenlabs.com/

## 🚀 Deployment

### GitHub Pages with CI/CD

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Initial Setup

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Build and deployment":
     - Source: Select `GitHub Actions`
   - Save the settings

2. **Configure Custom Domain (Optional)**
   - In the same Pages settings, add your custom domain: `edgezenlabs.com`
   - Create a `CNAME` file in the `public` folder with your domain name
   - Configure your domain's DNS settings:
     - Add an `A` record pointing to GitHub's IP addresses:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Or add a `CNAME` record pointing to `[your-username].github.io`

3. **Base Path Configuration**
   - For custom domain: `base: "/"` (already configured)
   - For GitHub Pages default URL: `base: "/repository-name/"`
   - Current setup uses custom domain (edgezenlabs.com) with base path `/`

#### Automatic Deployment

The CI/CD pipeline is already configured via `.github/workflows/deploy.yml`:

- **Triggers**: Automatically deploys on every push to the `main` branch
- **Manual Deploy**: Can also be triggered manually from the Actions tab
- **Build Process**:
  1. Checks out code
  2. Sets up Node.js 20
  3. Installs dependencies
  4. Builds the project
  5. Deploys to GitHub Pages

#### Manual Deployment

To deploy manually:

```bash
# Build the project
npm run build

# The dist folder contains your production build
# Push to main branch to trigger automatic deployment
git add .
git commit -m "Update website"
git push origin main
```

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **Animations**: Tailwind CSS animations
- **Icons**: Lucide React

### Technologies Showcased
- Flutter, React, React Native
- Unity (C#), TypeScript, Node.js
- FastAPI, Python
- PostgreSQL, MySQL, MongoDB, Firestore
- AWS, Google Cloud, Firebase
- Figma UI/UX

## 📦 Products

### 🔐 CredoSafe
Complete Loan ERP system for managing loan workflows, applications, verifications, and disbursals.

### 🏗 Briktra
Construction & Contractor ERP for managing projects, labour, materials, and expenses with offline-first mobile capabilities.

### 💰 Expeniqo
Smart expense tracker with AI-powered SMS parsing and automatic transaction categorization.

### 🎮 Card Clash Legends Arena
Competitive PvP collectible card battle game built in Unity.

## 🎨 Design System

### Brand Colors
- **Primary**: White (#FFFFFF) / Black (#000000)
- **Accent Gradient**: Purple → Pink → Blue
- **CredoSafe/Expeniqo**: Gold (#C6A76A)
- **Briktra**: Orange (#E65C2A) + Dark Gray (#444444)

### Features
- ✅ Mobile-first responsive design
- ✅ Dark/Light mode support
- ✅ Smooth scroll animations
- ✅ Glass morphism effects
- ✅ Gradient accents
- ✅ Modern premium aesthetic

## 📁 Project Structure

```
edgezenlabs.com/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD configuration
├── public/
│   └── robots.txt
├── src/
│   ├── assets/                 # Product logos and images
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── NavLink.tsx
│   ├── pages/
│   │   ├── Index.tsx           # Home page
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Products.tsx
│   │   ├── Technologies.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Design tokens
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 💻 Local Development

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/edgezenlabs.com.git

# Navigate to project directory
cd edgezenlabs.com

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vite Configuration
- Base path configured for GitHub Pages deployment
- React SWC for fast refresh
- Path aliases (`@/` → `src/`)

### Tailwind Configuration
- Custom design tokens for EdgeZen brand
- Extended color palette
- Custom animations and keyframes
- Responsive breakpoints

## 📞 Contact

**EdgeZen Labs**
- Email: contact@edgezenlabs.com
- Website: https://edgezenlabs.com

## 📄 License

© 2024 EdgeZen Labs. All rights reserved.

---

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update repository name in `vite.config.ts` base path (if not using custom domain)
- [ ] Enable GitHub Pages in repository settings
- [ ] Configure custom domain DNS (if applicable)
- [ ] Push to main branch to trigger deployment
- [ ] Verify deployment in Actions tab
- [ ] Test live site

## 🆘 Troubleshooting

### Deployment Issues
- Check GitHub Actions logs in the "Actions" tab
- Ensure GitHub Pages is enabled in repository settings
- Verify base path in `vite.config.ts` matches your setup

### Custom Domain Issues
- Allow 24-48 hours for DNS propagation
- Verify DNS records are correctly configured
- Check CNAME file exists in public folder

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Ensure Node.js version is 18 or higher
- Check for TypeScript errors: `npm run build`
