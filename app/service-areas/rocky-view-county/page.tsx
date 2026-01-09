import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'

export const metadata: Metadata = {
  title: 'Permanent Lighting Rocky View County | Two Tone Lighting',
  description: 'Permanent LED lighting for acreages and rural properties in Rocky View County. Professional installation.',
}

export default function RockyViewPage() {
  return (
    <CityPageTemplate
      city="Rocky View County"
      slug="rocky-view-county"
      description="Rocky View County encompasses the rural areas surrounding Calgary, from acreages and hobby farms to estate properties. Larger homes and longer rooflines are common here—and we're fully equipped to handle them. Permanent outdoor lighting brings the same convenience and curb appeal to rural properties that urban homeowners enjoy."
      neighbourhoods={[
        'Bearspaw',
        'Springbank',
        'Bragg Creek',
        'Langdon',
        'Conrich',
        'Balzac',
        'Delacour',
        'Kathyrn',
        'Indus',
        'Janet',
      ]}
      weatherNote="Rural properties in Rocky View County experience full exposure to Alberta weather—wind, snow, extreme cold, and chinooks. Our permanent lighting systems are rated for these conditions and designed for the long haul."
      homeStyles="Rocky View County features everything from sprawling ranch-style homes to custom-built estates. Longer rooflines and unique architecture are common, and our team has the experience to handle complex installations."
      faqs={[
        {
          question: 'Do you service acreages and rural properties?',
          answer: "Absolutely. We regularly install on acreages and rural properties throughout Rocky View County. Longer rooflines and larger homes are no problem.",
        },
        {
          question: 'My home has a very long roofline. Is there a maximum length?',
          answer: "We can handle virtually any roofline length. Larger properties may require multiple controllers, which we'll factor into your quote.",
        },
        {
          question: 'Is there additional travel cost for rural properties?',
          answer: "Most of Rocky View County is within our standard service area. If your property is particularly remote, we'll discuss any adjustments upfront during the quote process.",
        },
        {
          question: 'I have outbuildings (shop, barn, etc.). Can you light those too?',
          answer: 'Yes! Many rural property owners add lighting to shops, barns, and other outbuildings. We can include these in your quote.',
        },
      ]}
    />
  )
}
