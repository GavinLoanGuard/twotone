import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'

export const metadata: Metadata = {
  title: 'Permanent Outdoor Lighting Cochrane | Two Tone Lighting',
  description: 'Permanent LED lighting installation for Cochrane homes. Built for chinooks and foothills weather. Free quotes.',
}

export default function CochranePage() {
  return (
    <CityPageTemplate
      city="Cochrane"
      slug="cochrane"
      description="Cochrane sits at the gateway to the Rocky Mountains, where chinooks, mountain winds, and dramatic weather changes are part of daily life. Permanent outdoor lighting built for these conditions means you can enjoy year-round curb appeal without worrying about weather damage."
      neighbourhoods={[
        'Sunset Ridge',
        'Heartland',
        'Heritage Hills',
        'Riversong',
        'Jumping Pound Ridge',
        'Fireside',
        'Cochrane West',
        'Glenbow',
        'West Valley',
        'South Ridge',
      ]}
      weatherNote="Cochrane experiences some of Alberta's most dramatic chinooks, along with mountain-influenced wind and temperature swings. Our lighting systems are specifically rated for these conditions and won't fail when the weather changes rapidly."
      homeStyles="Cochrane homes range from cozy bungalows to spacious estate properties, many with mountain views and architectural details that deserve highlighting. Permanent lighting accentuates these features year-round."
      faqs={[
        {
          question: 'How do the lights handle Cochrane wind?',
          answer: 'Our mounting system is designed for high-wind conditions. The track sits flush against your roofline with secure anchoring at regular intervals. Cochrane winds are tough, but so is our installation.',
        },
        {
          question: 'Do chinooks affect the lighting system?',
          answer: "Not at all. The aluminum track handles rapid temperature changes without warping or loosening. We've installed systems throughout Cochrane that perform flawlessly through chinook cycles.",
        },
        {
          question: 'I have a home with mountain views. Can lighting enhance that?',
          answer: "Absolutely. Subtle accent lighting draws attention to your home's silhouette against the evening sky without competing with your views. Many Cochrane homeowners love the effect.",
        },
        {
          question: 'Is there any additional cost for Cochrane installations?',
          answer: "Cochrane is within our standard service area. Your quote is based on your home's specifications, not your location.",
        },
      ]}
    />
  )
}
