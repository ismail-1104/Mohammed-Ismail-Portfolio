# Deploy to Vercel - Step by Step Guide

## ✅ Prerequisites Completed
- ✓ Build tested successfully
- ✓ All files committed to git

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Website (Recommended - Easiest)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `portfolio` (or any name you prefer)
   - Keep it **Public** (for free hosting)
   - **DO NOT** initialize with README (we already have one)
   - Click "Create repository"

2. **Push Your Code to GitHub**
   Run these commands in your terminal:
   ```bash
   cd C:\Projects\Portfolio\portfolio-website
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username.

3. **Deploy on Vercel**
   - Go to https://vercel.com/signup
   - Sign up with your GitHub account (click "Continue with GitHub")
   - After signing in, click "Add New Project"
   - Import your `portfolio` repository from GitHub
   - Vercel will auto-detect Next.js settings:
     - Framework Preset: **Next.js**
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click **Deploy**

4. **Done!**
   - Vercel will build and deploy your site (takes 2-3 minutes)
   - You'll get a live URL like: `https://portfolio-username.vercel.app`
   - Every time you push to GitHub, Vercel will auto-deploy!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd C:\Projects\Portfolio\portfolio-website
   vercel
   ```
   - Follow the prompts
   - When asked "Link to existing project?": **No**
   - Accept default settings
   - Your site will be deployed!

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 🎯 After Deployment

### Custom Domain (Optional)
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (if you have one)

### Environment Variables (If Needed Later)
1. Go to project Settings → "Environment Variables"
2. Add any secrets or API keys

## 📱 Your Portfolio Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark purple/pink/blue gradient theme
- ✅ Smooth animations with Framer Motion
- ✅ Working mobile navigation
- ✅ Professional sections: About, Experience, Skills, Projects, Contact
- ✅ Optimized for recruiters in UAE tech market

## 🔗 Useful Links
- Vercel Dashboard: https://vercel.com/dashboard
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs

## 💡 Tips
- Vercel's free tier includes:
  - Unlimited deployments
  - Automatic HTTPS
  - Global CDN
  - Preview deployments for every push
- No credit card required for free tier
- Perfect for portfolios!
