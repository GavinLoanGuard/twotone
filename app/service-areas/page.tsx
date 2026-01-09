import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Users, Shield, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | Permanent Outdoor Lighting Calgary Area',
  description: 'Permanent outdoor lighting installation in Calgary, Airdrie, Cochrane, Okotoks, Chestermere & Rocky View County.',
}

const serviceAreas = [
  {
    name: 'Calgary',
    slug: 'calgary',
    description: 'From Tuscany to Mahogany, Brentwood to Bridlewood—we serve all Calgary neighbourhoods. Our local knowledge means we understand Calgary\'s diverse home styles.',
  },
  {
    name: 'Airdrie',
    slug: 'airdrie',
    description: 'Growing fast with new construction and established communities alike. We\'re proud to serve Airdrie homeowners looking to add permanent curb appeal.',
  },
  {
    name: 'Cochrane',
    slug: 'cochrane',
    description: 'West of Calgary at the foothills. Cochrane homes face unique weather—chinooks, wind, and mountain-influenced temperature swings. Our installations handle it.',
  },
  {
    name: 'Okotoks',
    slug: 'okotoks',
    description: 'South of Calgary with a mix of newer developments and mature neighbourhoods. We serve Okotoks and the surrounding area.',
  },
  {
    name: 'Chestermere',
    slug: 'chestermere',
    description: 'East of Calgary, known for lakeside living. Whether your home is on the water or in a nearby community, we\'re here to help.',
  },
  {
    name: 'Rocky View County',
    slug: 'rocky-view-county',
    description: 'Acreages, rural properties, and unique homes outside city limits. Longer rooflines and bigger properties are no problem—we\'re equipped for it.',
  },
]

const localBenefits = [
  {
    icon: MapPin,
    title: 'Local Knowledge',
    description: 'We know Calgary weather, home styles, and neighbourhoods inside and out.',
  },
  {
    icon: Users,
    title: 'Direct Communication',
    description: 'When you call, you reach us—not a national call centre or franchise.',
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'Need service after installation? We\'re right here, not dispatching from another province.',
  },
  {
    icon: Phone,
    title: 'Accountable',
    description: 'Our reputation in Calgary matters to us. We stand behind our work for years to come.',
  },
]

export default function ServiceAreasPage() {
  return (
    <div className="noise-overlay pt-20">
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Serving Calgary and{' '}
              <span className="text-amber-glow">Surrounding Communities</span>
            </h1>
            <p className="text-xl text-cream/70">
              Two Tone Lighting provides professional permanent outdoor lighting installation 
              throughout the Calgary metropolitan area. Whether you're in an established inner-city 
              neighbourhood, a growing suburb, or an acreage in Rocky View County, we'll bring the 
              same quality, care, and craftsmanship to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-12">
            Communities We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="card p-6 group hover:border-amber-glow/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-glow/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-glow" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-cream group-hover:text-amber-glow transition-colors">
                    {area.name}
                  </h3>
                </div>
                <p className="text-cream/60 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <span className="inline-flex items-center text-sm text-teal-accent group-hover:text-teal-light transition-colors">
                  Learn more about {area.name} service
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="section-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-cream mb-3">
              Don't See Your Community?
            </h3>
            <p className="text-cream/60 mb-6">
              We may still be able to help. Contact us with your address and we'll let you know if we can serve your area.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">
              Why Choose a Local Installer
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              National brands and out-of-town crews might offer flashy websites, but they can't offer what we can: local accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-14 h-14 mx-auto rounded-xl bg-teal-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-teal-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-cream/60">
                  {benefit.description}
                </p>
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
            Ready to Light Up Your Home?
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            Request a free quote and we'll provide pricing specific to your property.
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
