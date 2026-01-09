import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, HelpCircle, Calculator, TrendingUp, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Permanent Lighting Cost Calgary | Two Tone Lighting',
  description: 'What does permanent outdoor lighting cost in Calgary? See ballpark pricing, cost factors, and request your free quote.',
}

const pricingTiers = [
  {
    size: 'Bungalow / Small Home',
    footage: '80–120 ft',
    range: '$3,500 – $5,000',
  },
  {
    size: 'Standard Two-Storey',
    footage: '120–180 ft',
    range: '$5,000 – $7,000',
  },
  {
    size: 'Larger Home / Complex Roofline',
    footage: '180–250+ ft',
    range: '$7,000 – $10,000+',
  },
  {
    size: 'Commercial Storefront',
    footage: 'Varies',
    range: 'Custom quote',
  },
]

const pricingFactors = [
  {
    title: 'Linear Footage',
    description: 'The most significant factor. We measure the total length of roofline, soffits, and any additional areas you want lit. More footage means more track, more LEDs, and more labour.',
    icon: Calculator,
  },
  {
    title: 'Roofline Complexity',
    description: 'A simple rectangular bungalow installs faster than a home with multiple peaks, dormers, bay windows, or mixed roof heights. Complex architecture requires more cuts, corners, and precision.',
    icon: HelpCircle,
  },
  {
    title: 'Height and Access',
    description: 'Ground-floor soffits are straightforward. Two-storey sections, steep pitches, or limited ladder access require additional safety measures and time.',
    icon: TrendingUp,
  },
  {
    title: 'Corners and Peaks',
    description: 'Each inside corner, outside corner, and peak requires additional connection hardware. Homes with intricate rooflines will have more of these points.',
    icon: Shield,
  },
  {
    title: 'Controller Quantity',
    description: 'Most homes need one controller, which manages up to a certain length of track. Larger homes or homes with separate zones may need additional controllers.',
    icon: Clock,
  },
  {
    title: 'Electrical Access',
    description: "The controller connects to your home's electrical system. Proximity to your panel and accessible wiring paths affect setup complexity.",
    icon: CheckCircle,
  },
]

const traditionalCosts = [
  'New string lights every 1–2 years: $100–$300',
  'Replacement bulbs, clips, extension cords: $30–$75',
  'Your time: several hours setting up, several more taking down',
  'Risk: ladder falls cause thousands of injuries each year',
  'Frustration: tangled, broken, or mismatched lights',
]

const permanentBenefits = [
  'One-time installation cost',
  'Minimal annual expense (efficient LED electricity)',
  'No setup, no takedown, no storage',
  'No ladders, no roof climbing',
  'Year-round use for holidays, security, and curb appeal',
  'Typical lifespan: 15+ years with proper installation',
]

export default function PricingPage() {
  return (
    <div className="noise-overlay pt-20">
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              What Does Permanent Outdoor Lighting{' '}
              <span className="text-amber-glow">Cost in Calgary?</span>
            </h1>
            <p className="text-xl text-cream/70">
              Transparent pricing for a decision you can feel good about.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">
            Typical Investment Ranges
          </h2>
          <p className="text-cream/70 mb-12 max-w-2xl">
            Every home is different, but here's what most Calgary homeowners invest in a complete permanent lighting installation:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={tier.size}
                className={`card p-6 ${index === 1 ? 'border-amber-glow/30 bg-amber-glow/5' : ''}`}
              >
                {index === 1 && (
                  <span className="text-xs text-amber-glow uppercase tracking-wider mb-2 block">Most Common</span>
                )}
                <h3 className="font-display text-lg font-semibold text-cream mb-2">
                  {tier.size}
                </h3>
                <p className="text-sm text-cream/50 mb-4">{tier.footage}</p>
                <p className="font-display text-2xl font-bold text-amber-glow">
                  {tier.range}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-cream/50 italic">
            These ranges include materials, professional installation, controller, and app setup. 
            Your actual quote will be based on the specific measurements and conditions of your property.
          </p>
        </div>
      </section>

      {/* Price Factors */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-12">
            Factors That Influence Your Quote
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor) => (
              <div key={factor.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-teal-accent/10 flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {factor.title}
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per-Foot Pricing Explanation */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
              How Per-Foot Estimates Work
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>
                You may see permanent lighting priced "per linear foot" online. While this gives a rough 
                starting point, it doesn't tell the whole story.
              </p>
              <p>
                A per-foot rate might range from <strong className="text-cream">$25 to $40+</strong> depending 
                on the region, the specific product, and the installer. But that rate typically assumes ideal 
                conditions: easy access, simple rooflines, and minimal electrical work.
              </p>
              <p>
                <strong className="text-amber-glow">Our approach is different.</strong> We provide an all-in 
                quote based on your actual home—not a generic formula.
              </p>
            </div>

            <div className="mt-8 gradient-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-cream mb-4">
                Your Quote Includes:
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'All track and LED materials',
                  'Mounting hardware for your roofline',
                  'Controller and power supply',
                  'Complete professional installation',
                  'Wiring and electrical connection',
                  'App setup and walkthrough',
                  'Thorough cleanup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream/70">
                    <CheckCircle className="w-5 h-5 text-amber-glow flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-amber-glow font-medium">
                No hidden fees. No surprise charges on install day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-12 text-center">
            Is Permanent Lighting Worth It?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Lights */}
            <div className="card p-8 border-red-500/20 bg-red-500/5">
              <h3 className="font-display text-2xl font-semibold text-cream mb-2">
                Traditional Lights
              </h3>
              <p className="text-sm text-cream/50 mb-6">Annual cost & hassle</p>
              <ul className="space-y-3">
                {traditionalCosts.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-cream/50">
                  Over 10 years: <strong className="text-cream">$1,500–$3,000+</strong> in materials alone
                </p>
              </div>
            </div>

            {/* Permanent Lighting */}
            <div className="card p-8 border-amber-glow/30 bg-amber-glow/5">
              <h3 className="font-display text-2xl font-semibold text-cream mb-2">
                Permanent Lighting
              </h3>
              <p className="text-sm text-amber-glow mb-6">One-time investment</p>
              <ul className="space-y-3">
                {permanentBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream/70">
                    <CheckCircle className="w-5 h-5 text-amber-glow mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-amber-glow font-medium">
                  Pays for itself within 3–5 years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-amber opacity-10" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
            Get Exact Pricing for Your Home
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            Ready to see what permanent lighting would cost for your specific property? 
            Request a free quote and we'll provide detailed, no-obligation pricing.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <p className="mt-6 text-sm text-cream/50">
            We typically respond within one business day. Photos of your roofline help us provide a faster, more accurate quote.
          </p>
        </div>
      </section>
    </div>
  )
}
