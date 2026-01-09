import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Permanent Lighting FAQs | Two Tone Lighting Calgary',
  description: 'Answers to common questions about permanent LED lighting cost, installation, durability, and control in Calgary.',
}

const faqCategories = [
  {
    title: 'About Permanent Lighting',
    faqs: [
      {
        question: 'What is permanent outdoor lighting?',
        answer: 'Permanent outdoor lighting is a low-profile LED system that installs along your roofline, soffits, and architectural features—and stays there year-round. Unlike traditional string lights, you never take it down. The LEDs are individually addressable, meaning you can display any colour or pattern using a smartphone app.',
      },
      {
        question: 'How is it different from regular Christmas lights?',
        answer: "Traditional string lights are temporary: you hang them in late fall, take them down in January, and store them the rest of the year. Permanent lighting is a one-time installation that stays on your home. The track blends with your roofline during the day, and you control the colour, brightness, and schedule from your phone.",
      },
      {
        question: 'Will my house look like it has Christmas lights up all year?',
        answer: "No. The track is designed to be nearly invisible during the day. It's a slim aluminum channel that typically matches your soffit or fascia colour. When the lights are off, most people won't notice anything is there.",
      },
      {
        question: 'What colours can I display?',
        answer: 'Millions. The LED system allows you to choose virtually any colour—from warm white to deep red to vibrant blue. You can set solid colours, patterns, fading effects, and more.',
      },
    ],
  },
  {
    title: 'Installation & Process',
    faqs: [
      {
        question: 'How long does installation take?',
        answer: "Most residential installations are completed in one day. Larger homes or complex rooflines may require a second day. We'll provide an estimated timeline with your quote.",
      },
      {
        question: 'Do I need to be home during installation?',
        answer: "It's not required, but we recommend being available at the start and end of the day so we can confirm the plan and walk you through the system when we're done.",
      },
      {
        question: 'Do you install during winter?',
        answer: "Yes. We install year-round. Our team is equipped for safe work in colder temperatures, and we'll coordinate with you on scheduling around weather conditions.",
      },
      {
        question: 'Will you need access to my electrical panel?',
        answer: "Yes. The controller connects to your home's electrical system. We'll discuss placement during the site visit and ensure a clean, code-compliant installation.",
      },
      {
        question: 'Do you install on the back of the house or just the front?',
        answer: "We can install anywhere you'd like lighting—front roofline, back patio, garage, pergola, and more. Additional areas will be included in your quote.",
      },
    ],
  },
  {
    title: 'Cost & Value',
    faqs: [
      {
        question: 'How much does permanent lighting cost?',
        answer: 'Most Calgary-area installations range from $3,500 to $8,000+, depending on your home\'s size and roofline complexity. Visit our Pricing page for detailed ranges and factors that affect cost.',
      },
      {
        question: 'Is there financing available?',
        answer: 'We currently do not offer in-house financing. Payment is due at the time of installation. If you need flexibility, let us know and we can discuss options.',
      },
      {
        question: 'How does the cost compare to regular Christmas lights?',
        answer: "Over time, permanent lighting often costs less than the annual expense of buying, replacing, and installing traditional lights—plus it gives you year-round functionality, safety (no ladder climbing), and dramatically better aesthetics.",
      },
    ],
  },
  {
    title: 'Durability & Maintenance',
    faqs: [
      {
        question: 'How long does the lighting last?',
        answer: 'Permanent lighting systems are designed to last 15–20+ years with proper installation and normal use. LED components may last even longer.',
      },
      {
        question: 'Can it handle Calgary winters?',
        answer: "Yes. The systems we install are rated for extreme cold, heavy snow, and temperature swings (including chinooks). They're engineered for climates like ours.",
      },
      {
        question: 'What about hail?',
        answer: 'The track is made of durable aluminum and the LED covers are designed to withstand impacts. While no system is indestructible, these components hold up well in typical Alberta conditions.',
      },
      {
        question: 'What maintenance is required?',
        answer: 'Very little. Occasional cleaning with a hose can remove dust or debris. If an individual LED fails, it can typically be replaced without redoing the entire run.',
      },
    ],
  },
  {
    title: 'App & Control',
    faqs: [
      {
        question: 'How do I control the lights?',
        answer: "You control the system through a smartphone app. The controller connects to your home's Wi-Fi, and the app lets you set colours, brightness, schedules, and scenes.",
      },
      {
        question: 'Is there a subscription fee?',
        answer: 'No. The app is free to use and there are no ongoing fees.',
      },
      {
        question: 'Can I set schedules?',
        answer: 'Yes. You can set the lights to turn on at sunset and off at a specific time, or set different schedules for different days.',
      },
      {
        question: 'Does it work with smart home systems?',
        answer: "Integration varies by controller model. Some controllers offer compatibility with platforms like Google Home or Amazon Alexa. We'll discuss your options during the quote process.",
      },
    ],
  },
  {
    title: 'About Two Tone Lighting',
    faqs: [
      {
        question: 'Are you the manufacturer?',
        answer: 'No. We are an authorized installer of a leading permanent outdoor lighting system. We don\'t manufacture the product—we specialize in expert installation and customer service.',
      },
      {
        question: 'Are you insured?',
        answer: 'Yes. We carry comprehensive general liability insurance and WCB coverage.',
      },
      {
        question: 'Where are you located?',
        answer: 'We\'re based in Calgary and serve the greater Calgary area, including Airdrie, Cochrane, Okotoks, Chestermere, and Rocky View County.',
      },
      {
        question: 'Do you offer a warranty?',
        answer: "Yes. Warranty details depend on the specific product installed. We'll explain your warranty coverage during the quote process and provide documentation at installation.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <div className="noise-overlay pt-20">
      {/* Hero Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Frequently Asked <span className="text-amber-glow">Questions</span>
            </h1>
            <p className="text-xl text-cream/70">
              Everything you need to know about permanent outdoor lighting installation, cost, maintenance, and control.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-display text-2xl font-bold text-cream mb-6 pb-3 border-b border-white/10">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group card p-0 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="font-semibold text-cream pr-8 group-hover:text-amber-glow transition-colors">
                          {faq.question}
                        </h3>
                        <ChevronDown className="w-5 h-5 text-cream/50 flex-shrink-0 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-6 -mt-2">
                        <p className="text-cream/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
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
            Still Have Questions?
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            We're happy to help. Reach out directly or request a free quote and we'll be in touch.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
