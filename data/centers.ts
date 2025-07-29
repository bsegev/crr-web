import { Building2, Stethoscope, Mountain, Waves } from "lucide-react"

export const centers = [
  {
    id: "cornerstone-recovery",
    name: "Cornerstone of Southern California",
    location: "Southern California, USA",
    type: "Clinical Recovery",
    specialties: ["Evidence-Based Treatment", "Medical Model", "Structured Care"],
    environment: "Clinical Excellence",
    image: "/centers/cornerstone-socal.png",
    description:
      "Our flagship clinical center combines medical excellence with evidence-based addiction treatment in Southern California.",
    features: ["Medical oversight", "Evidence-based protocols", "Clinical rigor", "Structured programming", "Premium medical care", "40+ years experience", "Joint Commission accredited", "Medical detox program", "Dual diagnosis treatment"],
    icon: Building2,
    website: "https://cornerstonesocal.com"
  },
  {
    id: "costa-rica-recovery",
    name: "Costa Rica Recovery",
    location: "San José, Costa Rica",
    type: "Holistic Accessible",
    specialties: ["Holistic Treatment", "Accessible Pricing", "Cultural Immersion"],
    environment: "Tropical Healing",
    image: "/centers/crr-space.jpg",
    description:
      "Authentic holistic addiction treatment in Costa Rica's healing environment at an accessible price point.",
    features: ["Holistic modalities", "Cultural immersion", "Accessible pricing", "Natural setting", "Evidence-based holistic treatment", "Clinical excellence", "Urban oasis in San José", "Medical detox services", "Airport proximity", "City conveniences"],
    icon: Stethoscope,
    website: "https://costaricarecovery.com"
  },
  {
    id: "el-tirol",
    name: "El Tirol",
    location: "Costa Rica",
    type: "Holistic Luxury",
    specialties: ["Luxury Holistic Care", "Premium Services", "Personalized Treatment"],
    environment: "Luxury Retreat",
    image: "/centers/eltirol-space.jpg",
    description:
      "Premium holistic addiction treatment combining luxury amenities with transformative healing modalities.",
    features: ["Luxury accommodations", "Premium holistic care", "Personalized treatment", "Exclusive setting", "Mountain recovery village", "Clean fresh air", "Private cabins", "Nature immersion", "Complete privacy", "Secluded sanctuary"],
    icon: Mountain,
    website: "#"
  },
  {
    id: "nosara-treatment",
    name: "Nosara Retreat Center",
    location: "Nosara, Costa Rica",
    type: "Wellness Retreat",
    specialties: ["Mental Wellness", "Prevention", "Retreat Programs"],
    environment: "Beachfront Wellness",
    image: "/centers/nosara-shala.jpg",
    description:
      "A wellness retreat center focused on mental health, prevention, and holistic wellness programs.",
    features: ["Wellness programs", "Prevention focus", "Beachfront location", "Retreat atmosphere", "Wellness retreat by the beach", "Blue Zone location", "Holistic therapies", "Wellness programming", "Beachfront sanctuary", "Blue Zone longevity"],
    icon: Waves,
    website: "https://nosararetreatcenter.com"
  },
]

// Types for the centers data
export type Center = typeof centers[0] 