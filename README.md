# Tarot & Healing — Next.js (App Router) TypeScript Project

This repository scaffold follows domain-driven design with Next.js App Router, TypeScript, Tailwind CSS, and a persistent theme toggle. It uses a single-page home with section anchors and separate SEO-friendly service pages under `/services/[slug]`.

---

## Project structure

```
nextjs-tarot-site/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ loading.tsx
│  ├─ globals.css
│  ├─ head.tsx
│  ├─ services/
│  │  ├─ [slug]/
│  │  │  └─ page.tsx
│  │  └─ data.ts
├─ components/
│  ├─ Navbar.tsx
│  ├─ ThemeToggle.tsx
│  ├─ ServiceCard.tsx
│  ├─ ContactSection.tsx
│  ├─ Footer.tsx
│  └─ Hero.tsx
├─ lib/
│  └─ siteConfig.tsf
├─ public/
│  └─ images/
│     ├─ tarot-placeholder.jpg
│     ├─ rituals-placeholder.jpg
│     ├─ spells-placeholder.jpg
│     ├─ remedies-placeholder.jpg
│     └─ switchwords-placeholder.jpg
├─ styles/
│  └─ tailwind.css
├─ tailwind.config.js
├─ postcss.config.js
├─ next.config.js
├─ package.json
└─ README.md
```

---

## Key files (copy into your project)

---

### package.json

```json
{
  "name": "nextjs-tarot-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "13.5.6",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "clsx": "^1.2.1"
  },
  "devDependencies": {
    "typescript": "^5.1.6",
    "tailwindcss": "^4.4.3",
    "postcss": "^8.4.24",
    "autoprefixer": "^10.4.14"
  }
}
```

---

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tarotGold: '#b88746',
        tarotPurple: '#3b0b3b'
      }
    }
  },
  plugins: []
}
```

---

### postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

---

### next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig
```

---

### app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #ffffff;
  --text: #111827;
}

html.dark {
  --bg: #0b0710;
  --text: #e6e1e5;
}

body {
  background: var(--bg);
  color: var(--text);
}

/* simple spinner for loading */
.spinner {
  border: 4px solid rgba(0,0,0,0.1);
  border-left-color: rgba(0,0,0,0.4);
  border-radius: 9999px;
  width: 48px;
  height: 48px;
  animation: spin 0.9s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg) } }

/* subtle image zoom */
.img-zoom:hover { transform: scale(1.03); transition: transform 300ms ease; }
```

---

### lib/siteConfig.ts

```ts
export const SITE = {
  title: 'Soul Reading with Silpa',
  description: 'Tarot readings, rituals, spells, remedies, and switch words to heal and guide your soul.'
}

export const SERVICES = [
  {
    slug: 'tarot-reading',
    title: 'Tarot Reading',
    image: '/images/tarot-placeholder.jpg',
    short: 'Deep, intuitive tarot readings for love, career and life guidance.',
    description: 'Full placeholder description for Tarot Reading. Replace with your real copy.'
  },
  {
    slug: 'rituals',
    title: 'Rituals',
    image: '/images/rituals-placeholder.jpg',
    short: 'Guided rituals to clear energy and invite positive change.',
    description: 'Full placeholder description for Rituals. Replace with your real copy.'
  },
  {
    slug: 'spells',
    title: 'Spells',
    image: '/images/spells-placeholder.jpg',
    short: 'Carefully crafted spells with ethical considerations.',
    description: 'Full placeholder description for Spells. Replace with your real copy.'
  },
  {
    slug: 'remedies',
    title: 'Remedies',
    image: '/images/remedies-placeholder.jpg',
    short: 'Practical remedies — herbal, ritual, and energetic — to rebalance your life.',
    description: 'Full placeholder description for Remedies. Replace with your real copy.'
  },
  {
    slug: 'switch-words',
    title: 'Switch Words',
    image: '/images/switchwords-placeholder.jpg',
    short: 'Powerful switch words for instant mindset shifts and manifestation.',
    description: 'Full placeholder description for Switch Words. Replace with your real copy.'
  }
]
```

---

### app/layout.tsx

```tsx
'use client'
import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Soul Reading with Silpa',
  description: 'Tarot readings and healing services'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

### app/loading.tsx

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto spinner" />
        <p className="mt-4">Preparing your soul space...</p>
      </div>
    </div>
  )
}
```

---

### components/Navbar.tsx

```tsx
'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-opacity-60 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-lg">Soul Reading with Silpa</Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <ThemeToggle />
        </div>
        {/* mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2">{open ? 'Close' : 'Menu'}</button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-white/80 p-4">
          <a href="#services" className="block py-2">Services</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  )
}
```

---

### components/ThemeToggle.tsx

```tsx
'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light'|'dark'>('light')

  useEffect(() => {
    const saved = (typeof window !== 'undefined') ? localStorage.getItem('theme') : null
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  function toggle() {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="px-3 py-1 rounded-md border">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
```

---

### components/ServiceCard.tsx

```tsx
import Link from 'next/link'

type Props = {
  title: string
  image: string
  short: string
  slug: string
}

export default function ServiceCard({ title, image, short, slug }: Props) {
  return (
    <Link href={`/services/${slug}`} className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative h-44 w-full">
        <img src={image} alt={title} className="object-cover w-full h-full img-zoom" />
      </div>
      <div className="p-4 bg-white/80 dark:bg-black/60">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mt-2">{short}</p>
      </div>
    </Link>
  )
}
```

---

### app/page.tsx

```tsx
import { SERVICES } from '../lib/siteConfig'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />

      <section id="services" className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <ServiceCard key={s.slug} title={s.title} image={s.image} short={s.short} slug={s.slug} />
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p>Placeholder about text: Soul Reading with Silpa — compassionate, ethical, and intuitive guidance.</p>
      </section>

      <ContactSection />
    </div>
  )
}
```

---

### components/Hero.tsx

```tsx
export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #fff7ed, #f8f0ff)' }}>
      <div className="text-center p-8">
        <h1 className="text-4xl font-extrabold">Soul Reading with Silpa</h1>
        <p className="mt-4 max-w-xl mx-auto">Tarot readings, rituals, spells, remedies and switch words — healing and guidance for your life.</p>
        <div className="mt-6">
          <a href="#services" className="px-4 py-2 rounded-md border">Explore Services</a>
        </div>
      </div>
    </section>
  )
}
```

---

### components/ContactSection.tsx

```tsx
import React from 'react'

export default function ContactSection() {
  const whatsapp = 'YOUR-WHATSAPP-NUMBER'
  return (
    <section id="contact" className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>You can message on WhatsApp or send an email.</p>
      <div className="mt-4 flex gap-4">
        <a href={`https://wa.me/${whatsapp.replace('+','')}`} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Message on WhatsApp</a>
        <a href="mailto:youremail@example.com" className="px-4 py-2 border rounded">Email</a>
      </div>

      <form className="mt-6 grid grid-cols-1 gap-4">
        <input name="name" placeholder="Your name" className="p-2 border rounded" />
        <input name="email" placeholder="Your email" className="p-2 border rounded" />
        <textarea name="message" placeholder="Message" className="p-2 border rounded" rows={4} />
        <button type="submit" className="px-4 py-2 rounded bg-tarotGold text-white">Send</button>
      </form>
    </section>
  )
}
```

---

### components/Footer.tsx

```tsx
export default function Footer() {
  return (
    <footer className="p-6 text-center text-sm">
      © {new Date().getFullYear()} Soul Reading with Silpa. All rights reserved.
    </footer>
  )
}
```

---

### app/services/data.ts

```ts
import { SERVICES } from '../../lib/siteConfig'
export default SERVICES
```

---

### app/services/[slug]/page.tsx

```tsx
import { notFound } from 'next/navigation'
import SERVICES from '../data'
import Link from 'next/link'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find(s => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <div className="min-h-screen">
      <div className="relative h-60 w-full">
        <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
      </div>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="mt-4">{service.description}</p>

        <div className="mt-6">
          {/* whatsapp number will be inserted into site config */}
          <a href={`https://wa.me/YOUR-WHATSAPP-NUMBER`} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-600 text-white rounded">Message on WhatsApp</a>
        </div>

        <div className="mt-8">
          <Link href="/">← Back home</Link>
        </div>
      </main>
    </div>
  )
}
```

---

## How to use

1. `npx create-next-app@latest --typescript --experimental-app` (or create app and replace files)
2. Install dependencies in `package.json` (adjust Next version as needed).
3. Add the `public/images` placeholder files.
4. Replace `YOUR-WHATSAPP-NUMBER` in `components/ContactSection.tsx` and `app/services/[slug]/page.tsx` with your number in international format (e.g. `+919876543210`).
5. `npm run dev` and preview at `http://localhost:3000`.

---

## Notes & Next steps

- I used a domain-driven layout with `lib/siteConfig.ts` as the single source of truth for services.
- Theme is persisted via `localStorage` and `document.documentElement.classList` toggling.
- Service pages are statically generated with `generateStaticParams`.

If you'd like, I can now:
- Fill in your WhatsApp number and real text for each service.
- Create downloadable zip of the project.
- Generate real placeholder images and add them to `/public/images`.

Tell me the next single step you'd like me to do.
