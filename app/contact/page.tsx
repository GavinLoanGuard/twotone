'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Upload } from 'lucide-react'

const homeTypes = [
  'Detached house',
  'Semi-detached',
  'Townhouse',
  'Commercial storefront',
  'Acreage/rural',
  'Other',
]

const rooflineLengths = [
  'Under 100 ft',
  '100-150 ft',
  '150-200 ft',
  '200+ ft',
  'Not sure',
]

const timelines = [
  'Ready to book (ASAP)',
  '1-3 months',
  'Just exploring',
]

const contactMethods = ['Email', 'Phone call', 'Text message']

const nextSteps = [
  { title: 'We review your request', description: "We'll look at the information you provided and any photos you uploaded." },
  { title: 'We follow up', description: "Within one business day, we'll email or call with ballpark pricing or clarifying questions." },
  { title: 'We schedule a site visit', description: "If you'd like to move forward, we'll book a time to measure your home." },
  { title: 'No pressure', description: "We're here to help, not to sell. Take your time making a decision." },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', homeType: '',
    rooflineLength: '', timeline: '', contactMethod: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="noise-overlay pt-20 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-glow/20 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-amber-glow" />
          </div>
          <h1 className="font-display text-4xl font-bold text-cream mb-4">Thank You!</h1>
          <p className="text-xl text-cream/70 mb-8">
            We've received your quote request and will be in touch within one business day. 
            Keep an eye on your inbox (and your spam folder, just in case).
          </p>
          <Link href="/" className="btn-secondary">Return Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="noise-overlay pt-20">
      <section className="section-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Let's Light Up <span className="text-amber-glow">Your Home</span>
            </h1>
            <p className="text-xl text-cream/70">
              Request a free quote or get in touch. We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="font-display text-2xl font-bold text-cream mb-6">Request Your Free Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(403) 555-1234" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                    <p className="text-xs text-cream/40 mt-1">We'll send your quote here</p>
                  </div>

                  <div>
                    <label htmlFor="address">Property Address or Postal Code *</label>
                    <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} placeholder="123 Main St, Calgary or T2P 1A1" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="homeType">Home Type *</label>
                      <select id="homeType" name="homeType" required value={formData.homeType} onChange={handleChange}>
                        <option value="">Select...</option>
                        {homeTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="rooflineLength">Approximate Roofline Length</label>
                      <select id="rooflineLength" name="rooflineLength" value={formData.rooflineLength} onChange={handleChange}>
                        <option value="">Select...</option>
                        {rooflineLengths.map((length) => <option key={length} value={length}>{length}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label>Timeline *</label>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      {timelines.map((timeline) => (
                        <label key={timeline} className={`flex items-center justify-center px-4 py-3 rounded-lg border cursor-pointer transition-all text-sm text-center ${formData.timeline === timeline ? 'border-amber-glow bg-amber-glow/10 text-cream' : 'border-white/10 text-cream/60 hover:border-white/20'}`}>
                          <input type="radio" name="timeline" value={timeline} checked={formData.timeline === timeline} onChange={handleChange} className="sr-only" />
                          {timeline}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label>Preferred Contact Method *</label>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      {contactMethods.map((method) => (
                        <label key={method} className={`flex items-center justify-center px-4 py-3 rounded-lg border cursor-pointer transition-all text-sm ${formData.contactMethod === method ? 'border-amber-glow bg-amber-glow/10 text-cream' : 'border-white/10 text-cream/60 hover:border-white/20'}`}>
                          <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={handleChange} className="sr-only" />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleChange} placeholder="Anything else we should know? Special requests, backyard lighting, etc." />
                  </div>

                  <div>
                    <label>Photo Upload (Optional)</label>
                    <div className="mt-2 border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-white/20 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-cream/40 mx-auto mb-2" />
                      <p className="text-sm text-cream/60">Have photos of your roofline? Upload here for a faster, more accurate quote.</p>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg">
                    Request My Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-6">Other Ways to Reach Us</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:+14035551234" className="flex items-center gap-3 text-cream/70 hover:text-amber-glow transition-colors">
                      <Phone className="w-5 h-5 text-amber-glow" />
                      (403) 555-1234
                    </a>
                    <p className="text-xs text-cream/40 ml-8 mt-1">Mon–Fri, 9 AM – 6 PM</p>
                  </li>
                  <li>
                    <a href="mailto:info@twotone.ca" className="flex items-center gap-3 text-cream/70 hover:text-amber-glow transition-colors">
                      <Mail className="w-5 h-5 text-amber-glow" />
                      info@twotone.ca
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-cream/70">
                    <MapPin className="w-5 h-5 text-amber-glow mt-0.5" />
                    <span>Calgary, Alberta<br /><span className="text-cream/40 text-sm">By appointment only</span></span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-4">Prefer to Talk First?</h3>
                <p className="text-sm text-cream/60 mb-4">
                  Book a quick 10-minute call. We'll answer your questions and help you figure out if permanent lighting is right for your home.
                </p>
                <a href="tel:+14035551234" className="btn-outline w-full text-center">
                  Book a 10-Minute Call
                </a>
              </div>

              <div className="card p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-glow/20 flex items-center justify-center text-xs text-amber-glow flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-cream text-sm">{step.title}</p>
                        <p className="text-xs text-cream/50">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
