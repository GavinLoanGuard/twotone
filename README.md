# Two Tone Lighting Website

A modern, responsive website for Two Tone Lighting and Inspections - Calgary's permanent outdoor lighting installation company.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- Responsive design optimized for all devices
- Dark theme with warm amber/gold accents
- SEO-optimized pages with metadata
- Smooth animations and transitions
- Accessible form components
- City-specific service area pages

## Pages

- **Home** (`/`) - Main landing page with all key sections
- **Pricing** (`/pricing`) - Transparent pricing information
- **Gallery** (`/gallery`) - Portfolio of installations
- **How It Works** (`/how-it-works`) - 4-step installation process
- **Service Areas** (`/service-areas`) - Hub for all service locations
  - Calgary (`/service-areas/calgary`)
  - Airdrie (`/service-areas/airdrie`)
  - Cochrane (`/service-areas/cochrane`)
  - Okotoks (`/service-areas/okotoks`)
  - Chestermere (`/service-areas/chestermere`)
  - Rocky View County (`/service-areas/rocky-view-county`)
- **FAQs** (`/faqs`) - Frequently asked questions
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Quote request form
- **Privacy** (`/privacy`) - Privacy policy

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd two-tone-lighting

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color scheme:

- `midnight` - Primary dark background
- `charcoal` - Secondary dark background
- `amber-glow` - Primary accent (warm gold)
- `teal-accent` - Secondary accent (cool blue)
- `cream` - Light text color

### Typography

Fonts are loaded from Google Fonts:
- **Display**: Cormorant Garamond (serif)
- **Body**: DM Sans (sans-serif)

### Content

- Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
- Modify service area content in the individual city page files
- Add real images to replace gradient placeholders in the gallery

## Project Structure

```
two-tone-lighting/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/
│   ├── contact/
│   ├── faqs/
│   ├── gallery/
│   ├── how-it-works/
│   ├── pricing/
│   ├── privacy/
│   └── service-areas/
│       ├── page.tsx (Hub)
│       ├── calgary/
│       ├── airdrie/
│       ├── cochrane/
│       ├── okotoks/
│       ├── chestermere/
│       └── rocky-view-county/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── CityPageTemplate.tsx
├── public/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## License

© Two Tone Lighting and Inspections. All rights reserved.
