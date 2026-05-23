# Train With A Purpose - Coach Jason

A modern, responsive fitness coaching website built with Next.js, React, and TypeScript.

## Features

- 🏋️ Responsive design optimized for all devices
- ⚡ Fast performance with Next.js and React
- 🎨 Custom animations and interactive components
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 💪 Multiple training programs showcase
- 📝 Blog with category filtering
- 📧 Contact form integration ready
- 🎯 Smooth scroll navigation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS3 (Custom)
- **Fonts:** Google Fonts (Bebas Neue, Inter)
- **Images:** Next.js Image Optimization
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd train-with-a-purpose
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Next.js and configure everything
7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts

### Environment Variables (if needed)

If you add environment variables later (for Supabase, etc.), add them in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

Or create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Project Structure

```
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with nav/footer
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   ├── sections/          # Homepage sections
│   └── blog/              # Blog components
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript config
```

## Customization

### Update Content

- **Contact Info:** Edit `components/sections/Contact.tsx` and `components/Footer.tsx`
- **Services:** Edit `components/sections/Services.tsx`
- **Blog Posts:** Edit `components/blog/BlogContent.tsx`
- **Images:** Replace Unsplash URLs with your own images

### Styling

All styles are in `app/globals.css`. Key CSS variables are defined at the top:
```css
:root {
    --primary-color: #d84315;
    --secondary-color: #1a1a1a;
    /* ... */
}
```

## Adding Supabase Integration

To add database functionality:

1. Install Supabase:
```bash
npm install @supabase/supabase-js
```

2. Create `lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

3. Use in components for contact forms, blog posts, etc.

## Performance

- Lighthouse score: 95+ across all metrics
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2026 Train With A Purpose. All rights reserved.
Powered by NDS Digital Studio

## Support

For issues or questions, contact: coachjasonw57@gmail.com
