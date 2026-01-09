import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'

export const metadata: Metadata = {
  title: 'Permanent Outdoor Lighting Okotoks | Two Tone Lighting',
  description: 'Permanent LED lighting installation for Okotoks homes. Year-round outdoor lighting you control from your phone.',
}

export default function OkotoksPage() {
  return (
    <CityPageTemplate
      city="Okotoks"
      slug="okotoks"
      description="South of Calgary, Okotoks offers a perfect blend of small-town charm and modern amenities. With a mix of newer developments and established neighbourhoods, permanent outdoor lighting helps Okotoks homeowners stand out while eliminating the hassle of seasonal light installation."
      neighbourhoods={[
        'Cimarron',
        'Crystal Ridge',
        'D\'Arcy',
        'Drake Landing',
        'Sheep River',
        'Westmount',
        'Sandstone',
        'Okotoks Air Ranch',
        'Heritage Green',
        'Valley View',
      ]}
      weatherNote="Okotoks experiences typical southern Alberta weather—cold winters, occasional chinooks, and plenty of sun. Our permanent lighting systems handle the full range of conditions you'll see throughout the year."
      homeStyles="From the eco-friendly homes of Drake Landing to traditional family homes in established areas, Okotoks has diverse architecture. Permanent lighting works beautifully on all home styles."
      faqs={[
        {
          question: 'Do you install during winter in Okotoks?',
          answer: "Yes, we install year-round. Winter installations are common and our team is equipped for safe work in cold temperatures.",
        },
        {
          question: 'I have an acreage near Okotoks. Do you service rural properties?',
          answer: 'Yes! We serve Okotoks and surrounding rural areas. Longer rooflines and unique properties are no problem. Contact us with your address for a custom quote.',
        },
        {
          question: 'How does Okotoks pricing compare to Calgary?',
          answer: "Okotoks is within our standard service area. Your quote is based on your home's size and complexity, not your location.",
        },
        {
          question: 'Can I see examples of Okotoks installations?',
          answer: "We have completed installations throughout Okotoks. Check our gallery or ask us about local references during your quote consultation.",
        },
      ]}
    />
  )
}
