# Dheeraj Chaubey — Portfolio (v2)

A rebuilt version of your portfolio on Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion — keeping your existing content, dark glassmorphism aesthetic, and indigo/pink/cyan/amber palette, with production-grade structure underneath.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. This sandbox couldn't run a full production build because it blocks `fonts.googleapis.com`, but `tsc --noEmit` passes clean with zero errors — it'll build normally the moment you have real internet access (locally or on Vercel).

```bash
npm run build && npm run start   # production build
```

## What's included

- **Hero** — typewriter role rotation, gradient name, magnetic CTA buttons, animated stats, live "code card"
- **Nav** — glass navbar, mobile slide-in drawer, scroll-based entrance
- **Experience** — timeline card with highlighted metrics
- **Projects** — search + tag filtering, hover-tilt cards, GitHub links
- **Skills** — six categorized, hoverable skill-pill groups
- **Education** — degree cards, certifications list, hackathon card
- **Contact** — validated form (react-hook-form + zod) posting to `app/api/contact/route.ts`, plus social chips
- Custom cursor, canvas particle field + aurora gradient blobs, noise texture, scroll-reveal animations, Lenis smooth scroll — all disabled automatically for touch devices and `prefers-reduced-motion`
- Fully responsive from 320px to 1920px+, safe-area support for notched iPhones

## Wiring up email (Resend)

`app/api/contact/route.ts` is ready to send mail — it just needs a key:

1. `npm install resend`
2. Add `RESEND_API_KEY=your_key` to `.env.local`
3. Uncomment the `Resend` block in that file

Until then, submissions are logged to the server console so nothing is lost.

## Deliberately out of scope this pass

These are each a substantial build in their own right, so I left them out rather than bolt on shallow versions:

- **AI chatbot** trained on your resume, with voice input and project recommendations
- **MDX blog** (articles, learning logs, AI tutorials)
- **Live GitHub contribution graph / latest repos** (needs a GitHub API integration + caching)
- **React Three Fiber 3D hero sphere** — I used a canvas particle field + aurora blobs instead, which gets a similar "alive" feeling at a fraction of the bundle size and mobile GPU cost
- **Individual case-study pages per project**, testimonials, coding-profile widgets

Happy to build any of these next — just say which one.

## Structure

```
app/
  layout.tsx        Fonts, metadata, providers
  page.tsx           Section assembly
  globals.css        Design tokens (Tailwind v4 @theme)
  api/contact/route.ts
components/           One component per section + shared primitives (Reveal, SectionHeading)
lib/data.ts            All your resume content, centralized — edit here to update copy
```
