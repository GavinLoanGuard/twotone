import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'

export const metadata: Metadata = {
  title: 'Permanent Outdoor Lighting Chestermere | Two Tone Lighting',
  description: 'Permanent LED lighting installation for Chestermere homes. Professional installation, no ladders, no hassle.',
}

export default function ChestermerePage() {
  return (
    <CityPageTemplate
      city="Chestermere"
      slug="chestermere"
      description="Chestermere is known for its beautiful lakeside living and family-friendly atmosphere. Whether your home overlooks the lake or is nestled in one of the surrounding communities, permanent outdoor lighting adds year-round curb appeal that reflects the pride you have in your property."
      neighbourhoods={[
        'Lakeside Greens',
        'Westmere',
        'Kinniburgh',
        'The Cove',
        'Rainbow Falls',
        'Shores',
        'Dawson\'s Landing',
        'Chelsea',
        'Waterford',
        'West Creek',
      ]}
      weatherNote="Chestermere's location east of Calgary means exposure to prairie winds and varying weather conditions. Our permanent lighting systems are built tough to handle whatever Alberta weather brings."
      homeStyles="From lakefront properties to newer suburban developments, Chestermere features a range of home styles. Permanent lighting complements the community's mix of contemporary and traditional architecture."
      faqs={[
        {
          question: 'Do you install during winter in Chestermere?',
          answer: "Yes, we install year-round throughout the Calgary area including Chestermere. We'll work with you to schedule around weather conditions.",
        },
        {
          question: 'I have a lakefront home. Are there special considerations?',
          answer: "Lakefront homes often have unique architectural features and may face more wind exposure. We'll assess your specific situation during the site visit and design an installation that works perfectly.",
        },
        {
          question: 'How do the lights look reflecting off the water?',
          answer: 'Many Chestermere lakefront homeowners love the effect of their lighting reflecting on the water in the evening. It creates a stunning ambiance without being overpowering.',
        },
        {
          question: 'Is there any additional cost for Chestermere service?',
          answer: "Chestermere is within our standard service area. Your quote is based on your home's specifications, not your location.",
        },
      ]}
    />
  )
}
