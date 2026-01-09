import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'

export const metadata: Metadata = {
  title: 'Permanent Outdoor Lighting Calgary | Two Tone Lighting',
  description: 'Professional permanent LED lighting installation for Calgary homes. Year-round curb appeal you control from your phone.',
}

export default function CalgaryPage() {
  return (
    <CityPageTemplate
      city="Calgary"
      slug="calgary"
      description="Calgary homeowners know the challenges of outdoor lighting. From unpredictable chinooks to heavy winter snow, our climate demands solutions that can handle it all. Whether you live in an established inner-city neighbourhood or a newer suburb, permanent outdoor lighting offers year-round curb appeal without the annual hassle."
      neighbourhoods={[
        'Tuscany',
        'Brentwood',
        'Bridlewood',
        'Mahogany',
        'Seton',
        'Cranston',
        'Auburn Bay',
        'McKenzie Towne',
        'Aspen Woods',
        'Signal Hill',
        'Panorama Hills',
        'Evanston',
      ]}
      weatherNote="Calgary experiences chinooks, cold snaps, heavy snow, and rapid temperature swings. Our permanent lighting systems are rated for extreme temperatures and engineered to withstand what Alberta throws at them."
      homeStyles="From mid-century bungalows to modern infills, estate homes to townhouses, permanent lighting complements Calgary's diverse residential architecture. The track blends with your roofline during the day and transforms your home at night."
      faqs={[
        {
          question: 'Do you install during winter in Calgary?',
          answer: "Yes, we install year-round. Our team is equipped for safe installation even in colder months. We'll work with you to schedule a date that works with the weather.",
        },
        {
          question: 'How do the lights hold up to chinooks?',
          answer: 'Our systems are designed for rapid temperature swings. The aluminum track expands and contracts without warping, and the LEDs are rated for the full range of Calgary temperatures.',
        },
        {
          question: 'I have a two-storey with a complex roofline. Is my home a good fit?',
          answer: "Absolutely. Complex rooflines are our specialty. We'll measure every peak, corner, and transition to ensure a clean installation that highlights your home's architecture.",
        },
        {
          question: 'Do you need access to my backyard?',
          answer: "Depending on your roofline, yes. We'll discuss access during the site visit and work with you to minimize any disruption.",
        },
      ]}
    />
  )
}
