import Link from 'next/link'
import { 
  Calendar, 
  ShieldOff, 
  Snowflake, 
  Lightbulb, 
  Sun, 
  Moon,
  PartyPopper,
  Home,
  Shield,
  Sparkles,
  Smartphone,
  Palette,
  Clock,
  Layers,
  Users,
  MapPin,
  Award,
  Wrench,
  CheckCircle,
  ArrowRight,
  Star,
  Quote
} from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Every Season, Every Event',
    description: 'Christmas, Halloween, Canada Day, game nights, or just a warm glow on a winter evening.'
  },
  {
    icon: ShieldOff,
    title: 'No Ladders, No Hassle',
    description: 'Professional installation means you never climb your roof again.'
  },
  {
    icon: Snowflake,
    title: 'Built for Calgary Winters',
    description: 'Rated for extreme cold, heavy snow, and chinook temperature swings.'
  },
  {
    icon: Lightbulb,
    title: 'LED Efficiency',
    description: 'Uses a fraction of the power of traditional string lights.'
  }
]

const useCases = [
  {
    icon: PartyPopper,
    title: 'Holiday Displays',
    description: 'Christmas, Halloween, Thanksgiving, Easter—switch colours for any celebration without touching a ladder. Set schedules so your lights turn on automatically at dusk.'
  },
  {
    icon: Home,
    title: 'Everyday Accent Lighting',
    description: "A subtle warm white glow transforms your home's curb appeal every evening. It's architectural lighting that happens to also do holidays."
  },
  {
    icon: Shield,
    title: 'Security & Visibility',
    description: "Motion-triggered lighting at entry points. Leave a welcoming glow on when you're away. Illuminate dark corners of your property."
  },
  {
    icon: Sparkles,
    title: 'Events & Celebrations',
    description: 'Birthdays, graduations, hockey playoffs, gender reveals—set any colour or animation in minutes. Your home becomes part of the occasion.'
  }
]

const appFeatures = [
  { icon: Palette, text: 'Choose from millions of colours or select from preset palettes' },
  { icon: Clock, text: 'Set daily schedules so lights turn on at sunset and off at bedtime' },
  { icon: Layers, text: 'Create scenes for different occasions and switch instantly' },
  { icon: Smartphone, text: 'Adjust brightness from a subtle glow to full intensity' },
]

const steps = [
  {
    number: '01',
    title: 'Free Quote',
    description: "Tell us about your home. We'll review your photos or schedule a quick site visit. You'll receive a detailed quote within 48 hours."
  },
  {
    number: '02',
    title: 'Custom Measurement',
    description: 'We measure your exact roofline footage, note corners and peaks, and plan the cleanest possible installation path.'
  },
  {
    number: '03',
    title: 'Professional Installation',
    description: 'Our trained installers mount the track, wire the system, and connect your controller. Most installs take one day.'
  },
  {
    number: '04',
    title: 'Walkthrough & Setup',
    description: "We walk you through the app, set your first scene together, and answer every question. You'll be ready to show it off that evening."
  }
]

const trustPillars = [
  {
    icon: MapPin,
    title: 'Local & Accountable',
    description: "We're a Calgary-based company. When you call, you reach us—not a national call centre."
  },
  {
    icon: Award,
    title: 'Trained & Certified',
    description: 'Our installers are factory-trained on professional-grade permanent lighting systems.'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'We carry comprehensive liability insurance and WCB coverage.'
  },
  {
    icon: Wrench,
    title: 'Clean, Careful Work',
    description: "Protective footwear on your roof, tidy wire management, and thorough cleanup."
  }
]

const testimonials = [
  {
    quote: "We dreaded putting up Christmas lights every year. Now I just open the app and pick a colour. The kids love changing it for every holiday. Best home upgrade we've made.",
    author: 'Sarah M.',
    location: 'Tuscany, Calgary'
  },
  {
    quote: "I was skeptical about the 'invisible by day' claim, but you really can't see the track from the street. At night, our house looks incredible. Multiple neighbours have asked who did the install.",
    author: 'James R.',
    location: 'Cochrane'
  },
  {
    quote: "The team showed up on time, worked efficiently, and cleaned up perfectly. They walked me through the app before they left. Very professional.",
    author: 'Michelle T.',
    location: 'Airdrie'
  }
]

const pricingFactors = [
  { factor: 'Linear footage', impact: 'More roofline = more material and labour' },
  { factor: 'Roofline complexity', impact: 'Simple rectangles cost less than homes with peaks and dormers' },
  { factor: 'Height and access', impact: 'Two-storey sections require additional safety equipment' },
  { factor: 'Electrical access', impact: 'Proximity to your panel affects wiring complexity' },
]

export default function HomePage() {
  return (
    <div className="noise-overlay">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-charcoal" />
        <div className="absolute inset-0 bg-glow-amber opacity-30" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-glow-teal opacity-20 aurora-bg" />
        
        {/* Decorative Roofline */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <svg viewBox="0 0 1440 200" fill="none" className="w-full h-full">
            <path 
              d="M0 200 L0 100 L200 50 L400 100 L600 30 L800 90 L1000 40 L1200 80 L1440 20 L1440 200 Z" 
              fill="url(#roofGradient)" 
            />
            <defs>
              <linearGradient id="roofGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4A853" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 animate-slide-up">
              Permanent Outdoor Lighting for{' '}
              <span className="text-amber-glow glow-text">Calgary Homes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cream/80 font-display italic mb-4 animate-slide-up delay-100">
              Install once. Never climb a ladder again.
            </p>
            <p className="text-lg text-cream/60 mb-10 max-w-2xl animate-slide-up delay-200">
              Year-round accent, holiday, and security lighting you control from your phone—professionally installed on Calgary homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-amber-glow rounded-full animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* Section 1: Why Permanent Lighting */}
      <section className="section-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
              Stop Hanging Lights Every Year
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>
                Every November, the same routine: digging out tangled strings, testing dead bulbs, 
                climbing cold ladders, and hoping the weather holds. Then doing it all again in 
                January to take them down.
              </p>
              <p>
                <strong className="text-cream">Permanent outdoor lighting changes that completely.</strong>
              </p>
              <p>
                A low-profile LED track installs along your roofline, soffits, and architectural 
                features—and stays there. No seasonal setup. No storage bins. No ladders in the snow.
              </p>
              <p>
                The lights are individually addressable, meaning you can display any colour or pattern 
                you want: warm white for everyday elegance, red and green for Christmas, orange for 
                Halloween, blue for the Flames, or anything in between. Change it in seconds from your phone.
              </p>
              <p className="text-amber-glow font-medium">
                One installation. Every occasion. Year after year.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card card-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-glow/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-glow" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-cream/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Invisible by Day */}
      <section className="section-dark py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
                Designed to{' '}
                <span className="text-teal-accent">Disappear</span>
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>
                  One concern homeowners have about permanent lighting: will my house look like 
                  it's wearing Christmas decorations in July?
                </p>
                <p>
                  <strong className="text-cream">The answer is no.</strong> The lighting track is 
                  engineered to blend with your roofline. The slim aluminum channel typically 
                  matches your soffit or fascia colour, sitting flush against the edge where 
                  it's nearly invisible from the street during the day.
                </p>
                <p>
                  At night, the LEDs come alive—but the track itself stays hidden. What your 
                  neighbours see is light, not hardware.
                </p>
              </div>
            </div>

            {/* Day/Night Comparison Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Day Side */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-sky-200 to-sky-100">
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div className="w-full">
                      {/* House silhouette - day */}
                      <div className="relative">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gray-400/30 rounded-full" />
                        <div className="h-20 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg" />
                        <div className="h-12 bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center gap-2">
                          <div className="w-6 h-8 bg-sky-200/50 rounded-sm" />
                          <div className="w-8 h-10 bg-amber-700/30 rounded-t-sm" />
                          <div className="w-6 h-8 bg-sky-200/50 rounded-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Sun className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-sm font-medium text-gray-700">Day</span>
                  </div>
                </div>

                {/* Night Side */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-midnight">
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <div className="w-full">
                      {/* House silhouette - night with glow */}
                      <div className="relative">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-warm-white rounded-full roofline-glow" />
                        <div className="h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg" />
                        <div className="h-12 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center gap-2">
                          <div className="w-6 h-8 bg-amber-200/30 rounded-sm shadow-lg shadow-amber-200/20" />
                          <div className="w-8 h-10 bg-amber-900/50 rounded-t-sm" />
                          <div className="w-6 h-8 bg-amber-200/30 rounded-sm shadow-lg shadow-amber-200/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Moon className="w-6 h-6 text-cream/60" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-sm font-medium text-cream">Night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Use Cases */}
      <section className="section-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-4">
              More Than Just Holiday Lights
            </h2>
            <p className="text-lg text-cream/60 max-w-2xl mx-auto">
              Most people discover permanent lighting because they're tired of hanging Christmas lights. 
              But once it's installed, you'll find yourself using it all year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="card card-glow p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-glow/20 to-teal-accent/20 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-7 h-7 text-amber-glow" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-cream mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-cream/60 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: App Control */}
      <section className="section-dark py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/3 h-full -translate-y-1/2 bg-glow-teal opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="relative order-2 lg:order-1">
              <div className="relative max-w-xs mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
                  <div className="bg-midnight rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* App Interface */}
                    <div className="p-6 h-full flex flex-col">
                      <div className="text-center mb-6 pt-8">
                        <p className="text-xs text-cream/40 mb-1">Two Tone Lighting</p>
                        <h4 className="text-lg font-semibold text-cream">Front Roofline</h4>
                      </div>
                      
                      {/* Color Wheel */}
                      <div className="relative w-40 h-40 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full bg-gradient-conic from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500 opacity-80" 
                             style={{ background: 'conic-gradient(from 0deg, #ef4444, #eab308, #22c55e, #06b6d4, #3b82f6, #a855f7, #ef4444)' }} />
                        <div className="absolute inset-4 rounded-full bg-midnight flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-warm-white shadow-lg shadow-warm-white/50" />
                        </div>
                      </div>

                      {/* Brightness Slider */}
                      <div className="mb-6">
                        <div className="flex justify-between text-xs text-cream/40 mb-2">
                          <span>Brightness</span>
                          <span>85%</span>
                        </div>
                        <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                          <div className="h-full w-[85%] bg-gradient-to-r from-amber-glow to-amber-bright rounded-full" />
                        </div>
                      </div>

                      {/* Quick Scenes */}
                      <div className="grid grid-cols-4 gap-2 mt-auto pb-4">
                        {['Warm', 'Party', 'Xmas', 'Off'].map((scene) => (
                          <div key={scene} className="aspect-square rounded-xl bg-charcoal flex items-center justify-center">
                            <span className="text-xs text-cream/60">{scene}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-glow/20 to-teal-accent/20 rounded-[4rem] blur-2xl -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
                Every Colour. Any Schedule.{' '}
                <span className="text-amber-glow">One App.</span>
              </h2>
              <p className="text-cream/70 leading-relaxed mb-8">
                Your lighting system connects to a small controller installed near your electrical panel. 
                From there, a mobile app gives you complete control:
              </p>
              <ul className="space-y-4 mb-8">
                {appFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-glow/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-amber-glow" />
                    </div>
                    <span className="text-cream/70">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-cream/50 italic">
                No subscription fees. No complicated hub. Just download the app, connect to your home Wi-Fi, and you're set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="section-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-4">
              From Quote to Glow in Four Steps
            </h2>
            <p className="text-lg text-cream/60">
              Simple process, professional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-amber-glow/50 to-transparent -translate-x-6 z-0" />
                )}
                <div className="card relative z-10 h-full">
                  <div className="font-display text-5xl font-bold text-amber-glow/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cream/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-secondary">
              Learn More About Our Process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Gallery Preview */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-4">
              See What's Possible
            </h2>
            <p className="text-lg text-cream/60">
              Real installations on Calgary-area homes.
            </p>
          </div>

          {/* Gallery Grid - Placeholder with styled boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { color: 'from-amber-glow/30 to-amber-deep/30', label: 'Warm White' },
              { color: 'from-red-500/30 to-green-500/30', label: 'Christmas' },
              { color: 'from-orange-500/30 to-purple-500/30', label: 'Halloween' },
              { color: 'from-teal-accent/30 to-blue-500/30', label: 'Cool White' },
              { color: 'from-red-600/30 to-amber-500/30', label: 'Flames Night' },
              { color: 'from-cream/20 to-cream/10', label: 'Day View' },
            ].map((item, index) => (
              <div 
                key={index}
                className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${item.color} border border-white/10 flex items-end p-4 hover:border-amber-glow/30 transition-colors cursor-pointer`}
              >
                <span className="text-sm text-cream/60">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Pricing Preview */}
      <section className="section-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
                What Does Permanent Lighting Cost?
              </h2>
              <p className="text-cream/70 leading-relaxed mb-6">
                We believe in straightforward pricing. While every home is different, 
                here's what most Calgary homeowners can expect:
              </p>
              <div className="gradient-border rounded-2xl p-8 mb-8">
                <p className="text-sm text-cream/50 uppercase tracking-wider mb-2">Typical Investment</p>
                <p className="font-display text-4xl font-bold text-amber-glow">
                  $3,500 – $8,000+
                </p>
                <p className="text-cream/60 mt-2">for a complete residential installation</p>
              </div>
              <Link href="/pricing" className="btn-primary">
                See Detailed Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-cream mb-6">
                What Affects Your Price
              </h3>
              <div className="space-y-4">
                {pricingFactors.map((item) => (
                  <div key={item.factor} className="flex items-start gap-4 p-4 bg-midnight/50 rounded-xl border border-white/5">
                    <CheckCircle className="w-5 h-5 text-teal-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-cream">{item.factor}</p>
                      <p className="text-sm text-cream/50">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Trust Pillars */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-4">
              Calgary's Trusted Lighting Installers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar) => (
              <div key={pillar.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-glow/20 to-teal-accent/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-8 h-8 text-amber-glow" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-cream/60">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section className="section-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-4">
              What Calgary Homeowners Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-glow/20" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-glow fill-amber-glow" />
                  ))}
                </div>
                <p className="text-cream/70 italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-cream">{testimonial.author}</p>
                  <p className="text-sm text-cream/50">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-accent hover:text-teal-light transition-colors inline-flex items-center gap-2"
            >
              See more reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="section-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-amber opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-glow/50 to-transparent" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
            Ready to Light Up Your Home?
          </h2>
          <p className="text-lg text-cream/70 mb-10">
            Get a free, no-obligation quote for your Calgary-area home. 
            Tell us a bit about your property and we'll be in touch within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+14035551234" className="btn-secondary text-lg">
              Book a 10-Minute Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
