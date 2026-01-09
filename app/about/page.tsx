import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Eye, Award, Heart, Headphones, Shield, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Two Tone Lighting | Calgary Permanent Lighting Installers',
  description: "Meet Two Tone Lighting—Calgary's trusted permanent outdoor lighting installers. Locally owned, fully insured, and committed to quality.",
}

const approaches = [
  {
    icon: Eye,
    title: 'Transparency First',
    description: "We give you real information—not sales pitches. Our pricing is clear, our process is straightforward, and we answer your questions honestly, even when the answer isn't what you were hoping to hear.",
  },
  {
    icon: Award,
    title: 'Quality Over Shortcuts',
    description: "We follow manufacturer specifications, use proper mounting techniques, and take the time to do things right. A sloppy installation might be faster, but it won't last. Ours will.",
  },
  {
    icon: Heart,
    title: 'Respect for Your Home',
    description: 'We treat your property like our own. That means protective footwear on your roof, careful handling of your landscaping, and a thorough cleanup before we leave.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: "Installation isn't the end of our relationship. If you have questions about your system—whether it's a week or a year later—we're here to help.",
  },
]

const credentials = [
  {
    icon: Award,
    title: 'Professional Training',
    description: 'Our installation team is trained on professional-grade permanent lighting systems. We follow manufacturer guidelines to ensure your system performs as designed and your warranty stays valid.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'We carry comprehensive general liability insurance and WCB coverage. Your home and our team are protected.',
  },
  {
    icon: MapPin,
    title: 'Local Accountability',
    description: "We live and work in Calgary. Our reputation matters to us. That's why we do things right the first time—and fix it fast if something ever goes wrong.",
  },
]

export default function AboutPage() {
  return (
    <div className="noise-overlay pt-20">
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Calgary's Trusted{' '}
              <span className="text-amber-glow">Lighting Installers</span>
            </h1>
            <p className="text-xl text-cream/70">
              Locally owned. Professionally trained. Committed to doing it right.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
                A Local Company, Built on Trust
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>
                  Two Tone Lighting and Inspections is a Calgary-based company specializing in 
                  permanent outdoor lighting installation. We serve homeowners and small businesses 
                  throughout the Calgary metropolitan area, including Airdrie, Cochrane, Okotoks, 
                  Chestermere, and Rocky View County.
                </p>
                <p>
                  We're not a franchise. We're not a national brand with a local phone number. 
                  We're a local team, based right here in Calgary, doing work we're proud of for 
                  our neighbours.
                </p>
                <p className="text-cream font-medium">
                  When you call us, you talk to us. When we quote a job, we show up. When we say 
                  we'll stand behind our work, we mean it.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-glow/20 to-teal-accent/10 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-amber-glow to-teal-accent flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-midnight text-4xl">TT</span>
                  </div>
                  <p className="font-display text-2xl font-semibold text-cream mb-2">Two Tone</p>
                  <p className="text-cream/60">Lighting & Inspections</p>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="text-xs text-cream/40 px-3 py-1 border border-white/10 rounded-full">Est. Calgary</span>
                    <span className="text-xs text-cream/40 px-3 py-1 border border-white/10 rounded-full">Locally Owned</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-glow/10 to-teal-accent/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">
              How We Do Things Differently
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((approach) => (
              <div key={approach.title} className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-glow/10 flex items-center justify-center flex-shrink-0">
                    <approach.icon className="w-6 h-6 text-amber-glow" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cream mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-cream/60 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-12">
            Trained, Insured, Accountable
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((credential) => (
              <div key={credential.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-accent/10 flex items-center justify-center mb-4">
                  <credential.icon className="w-8 h-8 text-teal-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {credential.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
              Why Permanent Lighting?
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed text-lg">
              <p>
                We got into this business because we saw a gap. Homeowners wanted year-round 
                outdoor lighting that actually looked good—not tangled strings of bulbs that 
                spend most of the year in a box. They wanted something professional, something 
                reliable, something they could control without climbing a ladder in November.
              </p>
              <p>
                Permanent lighting checks every box. It's elegant, durable, and versatile. 
                It solves a real problem for real people.
              </p>
              <p className="text-amber-glow font-medium">
                And when we install it on a home, we get to see the look on someone's face 
                when they tap a button and their house lights up for the first time. That's 
                why we do this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-amber opacity-10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            Request a free quote and let's talk about what's possible for your home.
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
