# Deployment Guide for Portfolio Website

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy" (Vercel auto-detects Next.js settings)

3. **Your site is live!** 🎉
   - You'll get a URL like: `your-portfolio.vercel.app`
   - Custom domain can be added in project settings

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

No environment variables are required for the basic setup. If you add any APIs or services later, add them in:
- Vercel Dashboard → Project Settings → Environment Variables
- Or create a `.env.local` file locally (not committed to git)

## Custom Domain Setup

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update your DNS settings as instructed by Vercel
5. Wait for SSL certificate to be issued (automatic)

## Build Commands

The following scripts are available:

```bash
# Development
npm run dev          # Start development server at localhost:3000

# Production
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint

# Type checking
npx tsc --noEmit    # Check TypeScript types
```

## Optimization Tips

### Before Deployment

1. **Optimize Images**: Add optimized images to `/public/projects/`
2. **Test Build**: Run `npm run build` locally to catch errors
3. **Check Performance**: Use Lighthouse in Chrome DevTools
4. **Test Responsiveness**: Check on mobile, tablet, and desktop

### Post Deployment

1. **Add Analytics**: Consider adding Vercel Analytics or Google Analytics
2. **Monitor Performance**: Use Vercel's built-in analytics
3. **Set up Monitoring**: Use Vercel's monitoring features
4. **Regular Updates**: Keep dependencies updated

## Alternative Deployment Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Build settings:
- Build command: `npm run build`
- Publish directory: `.next`
- Functions directory: (leave empty)

### AWS Amplify

1. Connect GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Base directory: (leave empty)
   - Output directory: `.next`

### Docker (Self-hosted)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Troubleshooting

### Build Fails

1. Check Node.js version (requires 18+)
2. Delete `node_modules` and `.next`, then:
   ```bash
   npm install
   npm run build
   ```

### Images Not Loading

1. Ensure images are in `/public/` directory
2. Use relative paths starting with `/`
3. Check image file extensions

### Styles Not Applied

1. Clear browser cache
2. Check `tailwind.config.ts` content paths
3. Verify `globals.css` is imported in layout

### Animations Not Working

1. Ensure `framer-motion` is installed: `npm install framer-motion`
2. Check browser DevTools console for errors

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify all external project links work
- [ ] Check responsive design on mobile
- [ ] Test contact email links
- [ ] Verify social media links
- [ ] Check page load speed (aim for <2s)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify SEO meta tags using browser inspector
- [ ] Share on LinkedIn and GitHub profile

## Continuous Deployment

Vercel automatically:
- Deploys on every push to main branch
- Creates preview deployments for pull requests
- Provides deployment URLs for each commit

To customize:
1. Create `vercel.json` for custom configuration
2. Set up branch deployment rules in Vercel dashboard
3. Configure build & development settings

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Deployment Issues](https://github.com/vercel/next.js/discussions)

---

Good luck with your deployment! 🚀
