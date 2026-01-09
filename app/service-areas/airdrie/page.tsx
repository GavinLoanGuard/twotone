import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'

export const metadata: Metadata = {
  title: 'Permanent Outdoor Lighting Airdrie | Two Tone Lighting',
  description: 'Permanent LED lighting installation for Airdrie homes. Professional installation, year-round control. Free quotes.',
}

export default function AirdriePage() {
  return (
    <CityPageTemplate
      city="Airdrie"
      slug="airdrie"
      description="Airdrie is one of Alberta's fastest-growing cities, with a mix of new construction and established communities. Whether you're in a brand-new home or a mature neighbourhood, permanent outdoor lighting adds instant curb appeal without the yearly hassle of traditional lights."
      neighbourhoods={[
        'Coopers Crossing',
        'Reunion',
        'Bayside',
        'Chinook Gate',
        'Williamstown',
        'Luxstone',
        'Summerhill',
        'Hillcrest',
        'Stonegate',
        'Kings Heights',
      ]}
      weatherNote="Airdrie sits at a higher elevation than Calgary, which can mean colder temperatures and more wind exposure. Our permanent lighting systems are built to handle Alberta's harshest conditions."
      homeStyles="From starter homes to executive properties, Airdrie offers a range of architectural styles. Our permanent lighting enhances everything from simple bungalows to two-storey homes with complex rooflines."
      faqs={[
        {
          question: 'Do you install during winter in Airdrie?',
          answer: "Yes, we install year-round throughout the Calgary area including Airdrie. We'll coordinate with you on scheduling around weather conditions.",
        },
        {
          question: 'I have a new-build home. When can I install permanent lighting?',
          answer: "New homes can have permanent lighting installed as soon as the exterior is complete and landscaping won't be disturbed. Many Airdrie homeowners add lighting shortly after moving in.",
        },
        {
          question: 'How long does it take to drive from Calgary for service?',
          answer: "Airdrie is well within our primary service area. Travel time doesn't affect your quote—we serve Airdrie with the same pricing and responsiveness as Calgary.",
        },
        {
          question: 'Do you work with Airdrie builders or developers?',
          answer: "We focus primarily on existing homes, but we're happy to discuss installations on new construction. Contact us to learn more.",
        },
      ]}
    />
  )
}
