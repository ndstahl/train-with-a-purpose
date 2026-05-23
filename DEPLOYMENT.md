# Deployment Guide - Train With A Purpose

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - React/Next.js conversion"

# Create a GitHub repository at github.com/new
# Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/train-with-a-purpose.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository "train-with-a-purpose"
5. Vercel will automatically detect Next.js
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

### Step 3: Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

## Environment Variables

Currently, no environment variables are required. When you add Supabase:

1. In Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Vercel CLI Deployment (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Performance Checklist

✅ Images optimized with Next.js Image component
✅ CSS minified and optimized
✅ Automatic code splitting
✅ Static generation for fast page loads
✅ Mobile-responsive design
✅ SEO meta tags configured

## Post-Deployment

1. Test all pages work correctly
2. Test contact form
3. Test mobile responsiveness
4. Verify all links work
5. Check page load speed on Lighthouse

## Updating Content

After making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically rebuild and deploy!

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test `npm run build` locally first

### Images not loading
- Verify image URLs are accessible
- Check `next.config.js` has correct image domains

### Contact form not working
- Add form submission endpoint (API route or Supabase)
- See README.md for Supabase integration

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: coachjasonw57@gmail.com
