# Mohammed Ismail - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing professional experience, skills, and live projects.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth scrolling
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Deployment Ready**: Configured for easy deployment on Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📂 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation bar with smooth scroll
│   ├── Hero.tsx            # Hero section with introduction
│   ├── About.tsx           # About section with education & certifications
│   ├── Experience.tsx      # Professional experience timeline
│   ├── Skills.tsx          # Technical skills showcase
│   ├── Projects.tsx        # Featured projects with live links
│   ├── Contact.tsx         # Contact information and CTA
│   └── Footer.tsx          # Footer with social links
├── data/
│   └── portfolio.ts        # Portfolio data (easily editable)
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

All portfolio data is centralized in `data/portfolio.ts`. You can easily update:

- Personal information
- Skills and technologies
- Work experience
- Projects
- Education and certifications
- Contact details

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and click "New Project"

3. Import your GitHub repository

4. Vercel will automatically detect Next.js - Click "Deploy"

Your portfolio will be live in minutes at a vercel.app URL!

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections

1. **Hero**: Eye-catching introduction with CTA buttons
2. **About**: Professional summary, education, certifications, and achievements
3. **Experience**: Timeline of professional experience with detailed descriptions
4. **Skills**: Categorized technical skills (Backend, Frontend, Databases, Security, Tools, AI/ML)
5. **Projects**: 3 live featured projects with detailed tech stacks
6. **Contact**: Multiple contact methods and availability status
7. **Footer**: Quick navigation and social media links

## 🎨 Design Features

- Smooth scroll navigation
- Animated elements on scroll (Intersection Observer)
- Gradient backgrounds and text
- Interactive hover effects
- Mobile-friendly hamburger menu
- Custom scrollbar styling
- Blob animations in hero section

## 👤 Author

**Mohammed Ismail**
- Backend-Focused Software Engineer
- Email: shaikhismail1104@gmail.com
- LinkedIn: [MOHAMMED-ISMAIL](https://www.linkedin.com/in/mohammed-ismail)
- GitHub: [ismail-1104](https://github.com/ismail-1104)

## 📄 Live Projects Featured

1. **DETR - Pest Detection & Prediction System** - AI-powered agricultural pest detection
2. **Resume Analyzer** - AI-powered recruitment tool with NLP
3. **Bloggy** - Full-stack MERN blog platform

---

Built with ❤️ using Next.js & Tailwind CSS
