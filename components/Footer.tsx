import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const serviceAreas = [
  { name: 'Calgary', href: '/service-areas/calgary' },
  { name: 'Airdrie', href: '/service-areas/airdrie' },
  { name: 'Cochrane', href: '/service-areas/cochrane' },
  { name: 'Okotoks', href: '/service-areas/okotoks' },
  { name: 'Chestermere', href: '/service-areas/chestermere' },
  { name: 'Rocky View County', href: '/service-areas/rocky-view-county' },
]

const quickLinks = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-glow to-teal-accent flex items-center justify-center">
                <span className="font-display font-bold text-midnight text-xl">TT</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold text-cream">Two Tone</span>
                <span className="block text-xs text-cream/60 -mt-1">Lighting & Inspections</span>
              </div>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Professional permanent outdoor lighting installation for Calgary and surrounding areas. 
              Install once, control from your phone.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-cream/40 px-3 py-1 border border-white/10 rounded-full">Fully Insured</span>
              <span className="text-xs text-cream/40 px-3 py-1 border border-white/10 rounded-full">WCB Covered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-amber-glow transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link 
                    href={area.href}
                    className="text-sm text-cream/60 hover:text-amber-glow transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+14035551234" 
                  className="flex items-center gap-3 text-sm text-cream/60 hover:text-amber-glow transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-glow" />
                  (403) 555-1234
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@twotone.ca" 
                  className="flex items-center gap-3 text-sm text-cream/60 hover:text-amber-glow transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-glow" />
                  info@twotone.ca
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/60">
                <MapPin className="w-4 h-4 text-amber-glow mt-0.5" />
                <span>Calgary, Alberta<br />By appointment only</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-sm !px-6 !py-3">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-cream/40">
              © {new Date().getFullYear()} Two Tone Lighting and Inspections. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="text-xs text-cream/30 mt-4 text-center md:text-left">
            Authorized installer of professional-grade permanent outdoor lighting systems. 
            Independently owned and operated in Calgary, Alberta.
          </p>
        </div>
      </div>
    </footer>
  )
}
