import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Ruler, Wrench, Smartphone, CheckCircle, Clock, MessageSquare, Shield, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Permanent Lighting Installation Process | Two Tone Lighting',
  description: 'Learn how permanent outdoor lighting installation works. 4 simple steps from quote to glow for your Calgary home.',
}

const steps = [
  {
    number: '01',
    title: 'Request a Free Quote',
    subtitle: 'Tell Us About Your Home',
    icon: FileText,
    description: "Start by filling out our quick quote form. We'll ask about your property type, approximate roofline length (don't worry—we can help estimate this), and what you're hoping to achieve.",
    details: [
      "Upload photos of your home's exterior for faster, more accurate quotes",
      "We'll review your information and respond within one business day",
      'Receive ballpark pricing or follow-up questions',
    ],
    turnaround: '24–48 hours',
  },
  {
    number: '02',
    title: 'Site Visit & Custom Measurement',
    subtitle: 'We Measure, You Approve',
    icon: Ruler,
    description: 'Once you\'re ready to move forward, we schedule a site visit. One of our team members will come to your home for precise measurements.',
    details: [
      'Measure your exact roofline footage',
      'Note the number of corners, peaks, and transitions',
      'Assess height and access requirements',
      'Identify the best location for your controller',
      'Discuss any special requests (backyard lighting, garage, etc.)',
    ],
    turnaround: '30–45 minutes on-site',
  },
  {
    number: '03',
    title: 'Professional Installation',
    subtitle: 'Installation Day',
    icon: Wrench,
    description: 'On your scheduled installation day, our trained crew arrives with everything needed: track, LEDs, controller, wiring, and all mounting hardware.',
    details: [
      'Confirm the installation plan with you',
      'Mount slim aluminum track along your roofline',
      'Insert LEDs into the track',
      'Run wiring to your controller location',
      'Connect controller to power',
      'Test every section of lighting',
      'Thorough cleanup of all areas',
    ],
    turnaround: 'Most homes: 1 day',
  },
  {
    number: '04',
    title: 'Walkthrough & App Setup',
    subtitle: "You're In Control",
    icon: Smartphone,
    description: "Before we leave, we make sure you're completely comfortable with your new system.",
    details: [
      'Help you download and connect the app',
      'Walk through the controls: colours, brightness, schedules, scenes',
      'Set up your first lighting scene together',
      'Answer every question you have',
    ],
    turnaround: 'Ready to show off that evening',
  },
]

const expectations = [
  {
    icon: MessageSquare,
    title: 'Clear communication',
    description: 'We tell you what we\'re doing and when. No guessing.',
  },
  {
    icon: Shield,
    title: 'Respectful workmanship',
    description: 'Protective footwear on your roof. Tidy wire management. No mess left behind.',
  },
  {
    icon: CheckCircle,
    title: 'No hard sales',
    description: 'We give you the information; you make the decision.',
  },
  {
    icon: Clock,
    title: 'Honest timelines',
    description: "If something changes, you'll know immediately.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="noise-overlay pt-20">
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              How It <span className="text-amber-glow">Works</span>
            </h1>
            <p className="text-xl text-cream/70">
              Four steps from first contact to a home that glows.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-32 bottom-0 w-px bg-gradient-to-b from-amber-glow/50 to-transparent hidden lg:block" />
                )}
                
                <div className="grid lg:grid-cols-[auto,1fr] gap-8 items-start">
                  {/* Step Number */}
                  <div className="flex items-center gap-6 lg:flex-col lg:items-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-glow to-amber-deep flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-midnight" />
                      </div>
                      <div className="absolute -inset-2 rounded-3xl bg-amber-glow/20 blur-xl -z-10" />
                    </div>
                    <span className="font-display text-4xl font-bold text-amber-glow/30 lg:mt-4">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="card p-8">
                    <p className="text-sm text-teal-accent uppercase tracking-wider mb-2">
                      Step {step.number}
                    </p>
                    <h2 className="font-display text-3xl font-bold text-cream mb-2">
                      {step.title}
                    </h2>
                    <p className="text-lg text-cream/60 mb-6">{step.subtitle}</p>
                    
                    <p className="text-cream/70 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-glow mt-0.5 flex-shrink-0" />
                          <span className="text-cream/70">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-midnight/50 rounded-lg">
                      <Clock className="w-4 h-4 text-teal-accent" />
                      <span className="text-sm text-cream/60">
                        <strong className="text-cream">Turnaround:</strong> {step.turnaround}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-4">
              What You Can Expect From Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 mx-auto rounded-xl bg-teal-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-teal-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cream/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="section-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-glow/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-amber-glow" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-cream mb-4">
                  Ongoing Support
                </h2>
                <p className="text-cream/70 leading-relaxed">
                  If you ever have questions after installation, you're not on your own. 
                  We're available by phone or email to help troubleshoot or walk you through 
                  features you haven't tried yet. Your satisfaction doesn't end when our truck pulls away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-amber opacity-10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
            Ready to Start?
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            Request your free quote today and take the first step toward permanent outdoor lighting.
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
