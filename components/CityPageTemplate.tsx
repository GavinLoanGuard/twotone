import Link from 'next/link'
import { ArrowRight, CheckCircle, Snowflake, Home, MapPin, HelpCircle } from 'lucide-react'

interface CityPageProps {
  city: string
  slug: string
  description: string
  neighbourhoods: string[]
  weatherNote: string
  homeStyles: string
  faqs: { question: string; answer: string }[]
}

export default function CityPageTemplate({
  city,
  slug,
  description,
  neighbourhoods,
  weatherNote,
  homeStyles,
  faqs,
}: CityPageProps) {
  return (
    <div className="noise-overlay pt-20">
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Permanent Outdoor Lighting in{' '}
              <span className="text-amber-glow">{city}</span>
            </h1>
            <p className="text-xl text-cream/70">
              Professional installation for {city} homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-cream mb-6">
                Year-Round Lighting for {city} Homes
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>{description}</p>
                <p>
                  No more climbing ladders in November when the weather turns. No more storing 
                  boxes of tangled lights in the garage. Just year-round curb appeal you control 
                  from your phone.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="font-display text-xl font-semibold text-cream mb-6">
                Why Permanent Lighting Makes Sense in {city}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-accent/10 flex items-center justify-center flex-shrink-0">
                    <Snowflake className="w-5 h-5 text-teal-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream mb-1">Built for Alberta Weather</h4>
                    <p className="text-sm text-cream/60">{weatherNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-glow/10 flex items-center justify-center flex-shrink-0">
                    <Home className="w-5 h-5 text-amber-glow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream mb-1">Perfect for {city} Home Styles</h4>
                    <p className="text-sm text-cream/60">{homeStyles}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-glow/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-glow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream mb-1">A Local Company</h4>
                    <p className="text-sm text-cream/60">
                      We're based in Calgary, which means we know {city} and the surrounding area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-cream mb-8">
            Complete Installation for {city} Homes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-cream/70 leading-relaxed mb-6">
                Every installation includes professional-grade materials and expert workmanship, 
                backed by our commitment to quality and customer satisfaction.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom measurement of your roofline',
                  'Professional-grade LED track and controllers',
                  'Complete electrical connection',
                  'App setup and walkthrough',
                  'Thorough cleanup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream/70">
                    <CheckCircle className="w-5 h-5 text-amber-glow flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-cream/50">
                Most {city} homes are installed in one day. We'll provide an exact timeline during your quote.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-display text-xl font-semibold text-cream mb-4">
                We Serve All of {city}
              </h3>
              <p className="text-sm text-cream/60 mb-4">
                Our {city} service area includes:
              </p>
              <div className="flex flex-wrap gap-2">
                {neighbourhoods.map((neighbourhood) => (
                  <span
                    key={neighbourhood}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-cream/70"
                  >
                    {neighbourhood}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-cream/50 italic">
                Don't see your neighbourhood? We likely serve you too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-cream mb-8">
            Questions From {city} Homeowners
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-teal-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-cream mb-2">{faq.question}</h3>
                    <p className="text-sm text-cream/60">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="section-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/60 text-center">
            We also serve:{' '}
            {['Calgary', 'Airdrie', 'Cochrane', 'Okotoks', 'Chestermere', 'Rocky View County']
              .filter((c) => c !== city)
              .map((c, i, arr) => (
                <span key={c}>
                  <Link
                    href={`/service-areas/${c.toLowerCase().replace(' ', '-')}`}
                    className="text-teal-accent hover:text-teal-light transition-colors"
                  >
                    {c}
                  </Link>
                  {i < arr.length - 1 && ', '}
                </span>
              ))}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-amber opacity-10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
            Get a Free Quote for Your {city} Home
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            Ready to see what permanent lighting would look like on your property? 
            Request a free, no-obligation quote.
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
