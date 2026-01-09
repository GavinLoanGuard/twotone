import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Permanent Lighting Gallery Calgary | Two Tone Lighting',
  description: 'See real permanent outdoor lighting installations on Calgary homes. Day/night photos, holiday colours, warm white accents.',
}

const categories = [
  { id: 'all', name: 'All' },
  { id: 'warm-white', name: 'Warm White / Accent' },
  { id: 'holiday', name: 'Holiday Colours' },
  { id: 'day-night', name: 'Day vs Night' },
  { id: 'commercial', name: 'Commercial' },
]

const galleryItems = [
  {
    id: 1,
    category: 'warm-white',
    gradient: 'from-amber-glow/40 to-amber-deep/30',
    title: 'Warm White Accent',
    location: 'Tuscany, Calgary',
    description: 'Elegant warm white accent lighting on a two-storey home with multiple peaks.',
  },
  {
    id: 2,
    category: 'holiday',
    gradient: 'from-red-500/40 to-green-600/40',
    title: 'Christmas Display',
    location: 'Airdrie',
    description: 'Classic red and green holiday lighting for the Christmas season.',
  },
  {
    id: 3,
    category: 'holiday',
    gradient: 'from-orange-500/40 to-purple-600/40',
    title: 'Halloween Theme',
    location: 'Cochrane',
    description: 'Spooky orange and purple lighting creating the perfect Halloween ambiance.',
  },
  {
    id: 4,
    category: 'warm-white',
    gradient: 'from-warm-white/30 to-amber-glow/20',
    title: 'Subtle Elegance',
    location: 'Bridlewood, Calgary',
    description: 'Understated warm white glow enhancing architectural details.',
  },
  {
    id: 5,
    category: 'day-night',
    gradient: 'from-sky-300/30 to-amber-glow/30',
    title: 'Day/Night Comparison',
    location: 'Okotoks',
    description: 'See how the track virtually disappears during the day.',
  },
  {
    id: 6,
    category: 'holiday',
    gradient: 'from-red-600/40 to-white/30',
    title: 'Canada Day',
    location: 'Chestermere',
    description: 'Patriotic red and white display for Canada Day celebrations.',
  },
  {
    id: 7,
    category: 'commercial',
    gradient: 'from-teal-accent/30 to-blue-500/30',
    title: 'Storefront Display',
    location: 'Downtown Calgary',
    description: 'Professional lighting for a retail storefront creating inviting curb appeal.',
  },
  {
    id: 8,
    category: 'warm-white',
    gradient: 'from-amber-bright/30 to-amber-glow/40',
    title: 'Bungalow Accent',
    location: 'Brentwood, Calgary',
    description: 'Clean roofline lighting on a classic Calgary bungalow.',
  },
  {
    id: 9,
    category: 'day-night',
    gradient: 'from-gray-400/30 to-warm-white/40',
    title: 'Before & After',
    location: 'Rocky View County',
    description: 'Acreage home transformation from day to evening.',
  },
  {
    id: 10,
    category: 'holiday',
    gradient: 'from-blue-500/40 to-orange-500/40',
    title: 'Oilers Night',
    location: 'Mahogany, Calgary',
    description: 'Blue and orange for game nights supporting the home team.',
  },
  {
    id: 11,
    category: 'warm-white',
    gradient: 'from-amber-glow/30 to-teal-accent/20',
    title: 'Modern Home',
    location: 'Seton, Calgary',
    description: 'Contemporary architecture enhanced with clean LED lighting.',
  },
  {
    id: 12,
    category: 'commercial',
    gradient: 'from-amber-glow/40 to-warm-white/30',
    title: 'Restaurant Patio',
    location: 'Kensington, Calgary',
    description: 'Welcoming atmosphere for outdoor dining space.',
  },
]

export default function GalleryPage() {
  return (
    <div className="noise-overlay pt-20">
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              See Our <span className="text-amber-glow">Work</span>
            </h1>
            <p className="text-xl text-cream/70">
              Every photo below is from a real installation in the Calgary area. 
              Notice how the track virtually disappears during the day—and transforms the home at night.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-charcoal py-8 sticky top-20 z-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  ${category.id === 'all' 
                    ? 'bg-amber-glow text-midnight' 
                    : 'bg-white/5 text-cream/70 hover:bg-white/10 hover:text-cream'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-xs text-amber-glow uppercase tracking-wider mb-2">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-cream mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/60 mb-2">{item.location}</p>
                  <p className="text-sm text-cream/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-glow/30 rounded-2xl transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-amber opacity-10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
            Love What You See?
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            Ready to transform your home? Get a free quote and find out what's possible for your property.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
