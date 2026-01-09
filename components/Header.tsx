'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'How It Works', href: '/how-it-works' },
  { 
    name: 'Service Areas', 
    href: '/service-areas',
    children: [
      { name: 'Calgary', href: '/service-areas/calgary' },
      { name: 'Airdrie', href: '/service-areas/airdrie' },
      { name: 'Cochrane', href: '/service-areas/cochrane' },
      { name: 'Okotoks', href: '/service-areas/okotoks' },
      { name: 'Chestermere', href: '/service-areas/chestermere' },
      { name: 'Rocky View County', href: '/service-areas/rocky-view-county' },
    ]
  },
  { name: 'FAQs', href: '/faqs' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-glow to-teal-accent flex items-center justify-center">
                <span className="font-display font-bold text-midnight text-xl">TT</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-glow to-teal-accent opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-semibold text-cream">Two Tone</span>
              <span className="block text-xs text-cream/60 -mt-1">Lighting & Inspections</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="relative group">
                  <button 
                    className="flex items-center gap-1 px-4 py-2 text-sm text-cream/70 hover:text-cream transition-colors"
                    onMouseEnter={() => setServiceAreasOpen(true)}
                    onMouseLeave={() => setServiceAreasOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div 
                    className={`absolute top-full left-0 pt-2 ${serviceAreasOpen ? 'block' : 'hidden'} group-hover:block`}
                    onMouseEnter={() => setServiceAreasOpen(true)}
                    onMouseLeave={() => setServiceAreasOpen(false)}
                  >
                    <div className="bg-charcoal border border-white/10 rounded-lg py-2 min-w-[180px] shadow-xl">
                      <Link 
                        href={item.href}
                        className="block px-4 py-2 text-sm text-cream/70 hover:text-amber-glow hover:bg-white/5 transition-colors"
                      >
                        All Service Areas
                      </Link>
                      <div className="border-t border-white/5 my-1" />
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-cream/70 hover:text-amber-glow hover:bg-white/5 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+14035551234" className="flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(403) 555-1234</span>
            </a>
            <Link href="/contact" className="btn-primary text-sm !px-6 !py-3">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-cream/70 hover:text-cream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal border-t border-white/5">
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-cream/70 hover:text-cream transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 border-l border-white/10 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-cream/50 hover:text-amber-glow transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-cream/70 hover:text-cream transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-4 border-t border-white/5">
              <Link 
                href="/contact" 
                className="btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
