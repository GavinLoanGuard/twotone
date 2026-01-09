import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Two Tone Lighting',
  description: 'Privacy policy for Two Tone Lighting and Inspections.',
}

export default function PrivacyPage() {
  return (
    <div className="noise-overlay pt-20">
      <section className="section-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
            Privacy Policy
          </h1>
          <p className="text-cream/60 mb-12">
            Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-cream/70">
              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Two Tone Lighting and Inspections ("we," "our," or "us") respects your privacy and is 
                  committed to protecting your personal information. This Privacy Policy explains how we 
                  collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Information We Collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Property information relevant to our services</li>
                  <li>Photos of your property that you choose to share</li>
                  <li>Communication preferences</li>
                  <li>Information about your interactions with our website</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and provide quotes</li>
                  <li>Deliver our lighting installation services</li>
                  <li>Communicate with you about your project</li>
                  <li>Send relevant updates about our services (with your consent)</li>
                  <li>Improve our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Information Sharing
                </h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information with trusted service providers who assist us in operating our 
                  business, provided they agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the internet is 100% secure, and we cannot 
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Your Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Cookies
                </h2>
                <p className="leading-relaxed">
                  Our website may use cookies to enhance your browsing experience. You can choose to 
                  disable cookies through your browser settings, though this may affect some website 
                  functionality.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on 
                  this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-cream mb-4">
                  Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-charcoal rounded-lg">
                  <p className="text-cream">Two Tone Lighting and Inspections</p>
                  <p>Email: info@twotone.ca</p>
                  <p>Phone: (403) 555-1234</p>
                  <p>Calgary, Alberta</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
