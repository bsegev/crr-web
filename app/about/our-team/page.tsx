"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { 
  Users, Heart, Award, 
  Mail, Phone, X, ChevronLeft, ChevronRight
} from "lucide-react"
import { useState } from "react"

export default function OurTeamPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const handleOpenModal = (id: number) => {
    setSelectedMember(id)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setSelectedMember(null)
    document.body.style.overflow = 'unset'
  }

  const handlePrevious = () => {
    if (selectedMember !== null && selectedMember > 1) {
      setSelectedMember(selectedMember - 1)
    }
  }

  const handleNext = () => {
    if (selectedMember !== null && selectedMember < teamMembers.length) {
      setSelectedMember(selectedMember + 1)
    }
  }
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Scott Huseby",
      title: "President & Hope Dealer-In-Chief (CEO)",
      bio: "Led one of the most respected litigation support firms in the United States before discovering his deeper purpose through recovery firsthand.",
      expandedBio: "In Scott Huseby's previous career, he led one of the most respected litigation support firms in the United States. Yet beyond his professional success, Scott discovered a deeper purpose after experiencing the healing power of recovery firsthand.\n\nThat calling led him to Costa Rica, where he became the owner of Costa Rica Recovery in San José – a holistic, participant-centered haven for individuals seeking freedom from addiction. Scott now uses his leadership and lived experience to walk alongside others on their recovery journey, offering the same hope and healing that changed his life.",
      image: "/staff-photos/team/scott-h-costa-rica-recovery.webp",
      hasLinkedIn: true
    },
    {
      id: 2,
      name: "Adriana Vila Lima",
      title: "Chief Financial Officer",
      bio: "Ensures the financial stability and growth of Costa Rica Recovery while maintaining our commitment to accessible, quality care.",
      expandedBio: "Originally from Uruguay, Adriana brings a unique blend of experience in sociology, garden design, and hospitality. Fluent in both Spanish and English, she spent two formative years living in the Janajpacha community in Bolivia—a substance-free environment that, while not a formal rehabilitation center, fostered healing, mindfulness, and healthy living through community life.\n\nIn 2006, she relocated with her husband and daughter to Nosara, Costa Rica, where she began managing hotels and vacation rentals at Villa Tortuga in Playa Guiones. Since 2020, she has worked closely with Scott, overseeing his properties in Nosara, and in 2023, she joined the team at Costa Rica Recovery.\n\nHighly dedicated and passionate about her work, she brings consistency, heart, and 100% commitment to everything she does—values that have guided her long-standing professional relationships and continue to enrich the CRR community.",
      image: "/staff-photos/team/Adriana-Vila-Lima-sq2.webp",
      hasLinkedIn: false
    },
    {
      id: 3,
      name: "Dr. Bryan Alfaro, PhD",
      title: "Medical Services Director",
      bio: "Oversees all medical services and ensures the highest standards of clinical care for participants throughout their recovery journey.",
      expandedBio: "Dr. Bryan Alfaro Molinares has more than seven years of experience in psychiatry, with a strong focus on the treatment of addiction and mental health disorders. He has worked in a variety of clinical and academic settings, including national hospitals, private practice, and international rehabilitation centers. Currently licensed as a psychiatrist in Costa Rica, he studied Medicine and Psychiatry at the University of Costa Rica and holds a Master's degree in Drug Dependency from the Autonomous University of Barcelona.\n\nHe currently serves as Medical Director at Costa Rica Recovery and as a psychiatrist at Hospital CIMA, where he provides care for hospitalized patients and emergency psychiatric consultations. He also works in private practice. In addition to his clinical work, Dr. Alfaro is a faculty member at the University of Costa Rica's postgraduate psychiatry program, where he teaches courses in Addiction Psychiatry and Psychopharmacology.\n\nFormerly, he worked as a Staff Psychiatrist at the Costa Rica Treatment Center and Clínica Carlos Durán. Dr. Alfaro is fluent in Spanish and English and spent part of his childhood living in the United States.\n\nDedicated to continuous professional development, Dr. Alfaro brings a blend of clinical expertise, academic leadership, and compassionate care to his work. He is passionate about helping individuals recover from addiction and is committed to delivering evidence-based, personalized treatment that supports sustainable healing.",
      image: "/staff-photos/team/Dr-Alfaro-Sq2.png",
      hasLinkedIn: true
    },
    {
      id: 4,
      name: "Rachel Ena Baxter",
      title: "Managing Director",
      bio: "Coordinates daily operations and ensures smooth functioning of all facility services to support participant recovery.",
      expandedBio: "Rachel brings over 15 years of experience in clinical mental health, addiction, trauma counseling, and servant leadership. She has worked in a wide range of settings—from managing residential programs for vulnerable women and children, to providing substance-use counseling in pain clinics, and case management within Vancouver Island's Public Health Authority. She is currently certified at the Advanced Level of Somatic Experiencing, CPI Crisis Intervention, and is pursuing certification in Internal Family Systems. She completed formal academic studies at Concordia University and Vancouver Island University.\n\nRachel has previously served as program director for an non-profit organization supporting women and children fleeing violence, worked as a counselor in public health clinics, and also produced conferences focused on social change and social ventures. She speaks English and has lived in both Canada and Costa Rica.\n\nA lifelong learner, Rachel is committed to deepening personal development and expanding her leadership abilities to create meaningful impact. She brings a compassionate, trauma-informed approach to care, grounded in empathy, crisis intervention, and strong team leadership. Inspired by the resilience of her clients, she fosters a supportive and structured environment at Costa Rica Recovery—one rooted in kindness, integrity, and hope.",
      image: "/staff-photos/team/rachel.webp",
      hasLinkedIn: true
    },
    {
      id: 5,
      name: "Sharon Fallas Moya",
      title: "Clinical Team Director",
      bio: "Leads our clinical team in providing evidence-based therapeutic interventions and personalized care plans.",
      expandedBio: "As a licensed psychologist, Sharon has over 10 years of experience in mental health and addiction therapy, working in clinical psychology, psychopedagogy, and trauma-informed care—including providing individual and group therapy in Gestalt, Acceptance and Commitment Therapy (ACT), and mindfulness-based approaches. Currently licensed in psychology and certified as a SMART Recovery Facilitator, she studied at Ulacit and Ucacis universities in Costa Rica. Sharon speaks Spanish and English. Constantly striving to advance her therapeutic skills, Sharon brings deep compassion, humanistic counseling, and expertise in emotional resilience to her clients. She is passionate about facilitating lasting emotional growth and provides compassionate, holistic support tailored to each client's needs at Costa Rica Recovery.",
      image: "/staff-photos/team/sharon-costa-rica-recovery.webp",
      hasLinkedIn: false
    },
    {
      id: 6,
      name: "Stephanie Wendler",
      title: "Clinical Psychologist",
      bio: "Provides individual and group therapy sessions, helping participants develop coping strategies and emotional resilience.",
      expandedBio: "Stephanie is a licensed clinical psychologist with over 9 years of experience in diverse therapeutic settings, including trauma-focused therapy, somatic integration, psychedelic integration, and group facilitation. She is certified in Integrative Somatic Trauma Therapy, Compassionate Inquiry, CBT (Beck Institute), and REBT (Albert Ellis Institute), and studied at the University of Costa Rica. Stephanie speaks Spanish, English, and German and continually refines her therapeutic skills, with a strong emphasis on compassion and trauma healing. Passionate about recovery and wellness due to her deep understanding of human resilience, Stephanie uniquely offers integrative therapeutic approaches, fostering deep personal healing and growth among clients at Costa Rica Recovery.",
      image: "/staff-photos/team/Stephanie-Wendler-sq2.webp",
      hasLinkedIn: false
    },
    {
      id: 7,
      name: "Dra. Rosaria De Vega",
      title: "Medical Doctor",
      bio: "Ensures comprehensive medical care and monitoring throughout the recovery process, addressing both physical and mental health needs.",
      expandedBio: "Dra. Rosario De Vega has more than 16 years of experience as a Family Practice Physician, working at Costa Rica Recovery for More than 9 years and her own clinical practice for more than 12 years, caring for vulnerable populations, including migrants, refugees, and individuals facing social and economic hardship.\n\nHer clinical work is rooted in a trauma-informed, culturally responsive, and harm reduction approach. Dr. De Vega provides comprehensive primary care, including chronic disease management, preventive health, and mental health support. She strives to listen, advocate, and restore the dignity to the clients in her care.\n\nCurrently licensed as a Family Practice Physician, she did her medical specialty in Bethesda Family Practice in Ohio, USA. Dr. Rosario speaks English and Spanish, and basic German, and has lived in Belgium and the United States, in addition to Costa Rica.",
      image: "/staff-photos/team/Rosario-SQ.webp",
      hasLinkedIn: true
    },
    {
      id: 8,
      name: "Dr. Quirós Mauro",
      title: "Medical Doctor",
      bio: "Provides comprehensive medical oversight and supports clinical care across the program.",
      expandedBio: "Dr. Quirós Mauro is a general practitioner who graduated from UCIMED, with over 10 years of experience in addiction rehabilitation and 15 years as an occupational health physician. She furthered her education with graduate studies in Naturopathic Medicine in Seattle, Washington, allowing her to integrate a more holistic perspective into her practice.\n\nPassionate about her work at the center, she firmly believes in each person’s ability to overcome addiction and in the strength of the multidisciplinary team she works with. For her, every patient deserves a new opportunity and a respectful, committed approach throughout their recovery journey.\n\nShe is fluent in both English and Spanish, her native language, which allows her to connect with a diverse range of patients with empathy and clarity.",
      image: "/staff-photos/team/costa-rica-recovery-staff-recovery.webp",
      hasLinkedIn: false
    },
    {
      id: 9,
      name: "Richard LeBow",
      title: "Director of Admissions",
      bio: "Guides families and individuals through the admissions process, ensuring a smooth transition into our recovery program.",
      expandedBio: "Richard LeBow (Rich) has over 14 years of experience in addiction counseling. Certified as an Addiction Counselor in 2019 and a Recovery Specialist in 2022, he has been working at Costa Rica Recovery since 2011.\n\nRich is an Attitudinal Healing Instructor, SMART Recovery Facilitator, and Recovery Focusing Facilitator. He speaks English, Spanish, and German. Constantly dedicated to helping others find a new way to live, Rich brings expertise in recovery and relapse prevention. He is passionate about helping hundreds of patients and is an active member of the 12-Step community in San Jose.",
      image: "/staff-photos/team/richard-costa-rica-recovery.webp",
      hasLinkedIn: true
    },
    {
      id: 10,
      name: "Mariana Guevara Morales",
      title: "Program Operations Manager/Occupational Therapist",
      bio: "Develops and implements therapeutic activities that promote skill-building and meaningful engagement in daily life.",
      expandedBio: "Mariana has several years of experience in occupational therapy and program management, working with vulnerable populations in clinical and operational roles—including supervising residential teams, enhancing strategic operations, and delivering occupational therapy to individuals in recovery. Currently licensed as an Occupational Therapist, she studied at Santa Paula University in Costa Rica and completed additional training at Ludus in Peru.\n\nMariana speaks Spanish and English. Dedicated to ongoing professional growth, Mariana brings strong organizational skills, teamwork, and problem-solving abilities. She is passionate about recovery because she finds inspiration in witnessing clients regain hope and confidence, uniquely providing structured operational support and compassionate occupational therapy at Costa Rica Recovery.",
      image: "/staff-photos/team/mariana-costa-rica-recovery.webp",
      hasLinkedIn: false
    },
    {
      id: 11,
      name: "Ernesto Leon",
      title: "Director of Food Services & Client Wellness Coordinator",
      bio: "Oversees nutrition programs and wellness activities, ensuring participants receive nourishing meals and holistic care.",
      expandedBio: "With over 20 years of experience as a professional chef, Ernesto has spent much of his life exploring the deep connection between food, culture, and health. His culinary journey has evolved from fine dining, leadership, and entrepreneurship to a more holistic approach—centered on food as medicine, nourishment as healing, and the powerful impact of mindful, healthy eating on overall well-being.\n\nOver the past seven years, following his own recovery journey, he has become deeply committed to the field of addiction treatment. Blending his culinary background with counseling and support work in residential settings, he has led group sessions, taught life skills, and integrated earth-to-table practices into therapeutic programming.\n\nHis mission is to support sustainable healing by helping individuals reconnect with their bodies, stories, and potential—through nutrition, structure, creativity, and compassion.",
      image: "/staff-photos/team/Ernesto-De-Leon-sq.webp",
      hasLinkedIn: false
    },
    {
      id: 12,
      name: "Marco Morris",
      title: "Facilities & Activities Manager",
      bio: "Maintains our beautiful facility and coordinates recreational activities that support physical and emotional well-being.",
      expandedBio: "Morris has over 25 years of experience in human development, addiction prevention, and motivational speaking, working across diverse settings—including directing La Montaña Christian Camps, Latin America's largest youth addiction prevention camp, and facilitating addiction prevention workshops throughout Costa Rica. Certified as a Human Development Specialist, Life Coach (John Maxwell), SMART Recovery Facilitator, and Executive Speaker (Harvard Extension), he studied at ESEPA Institute and HAGGAI Institute. Morris speaks Spanish and English and has extensive experience inspiring and motivating teams and individuals. Passionate about recovery due to his personal journey through Teen Challenge, he uniquely offers empathetic understanding, motivational leadership, and practical life guidance to clients at Costa Rica Recovery.",
      image: "/staff-photos/team/marcus-morris-costa-rica-recovery.webp",
      hasLinkedIn: false
    },
    {
      id: 13,
      name: "Andrea Céspedes Gamboa, LCSW",
      title: "Social Worker",
      bio: "Provides comprehensive social work services, supporting participants in addressing life challenges and building sustainable recovery.",
      expandedBio: "Andrea has over 5 years of experience in social work and therapeutic group facilitation, working with diverse vulnerable populations—including facilitating socio-educational groups, individual and family sessions, and creating tailored treatment plans. Currently licensed as a social worker, she studied at the University of Costa Rica and is certified as a SMART Recovery Facilitator. Andrea speaks Spanish and English and is dedicated to ongoing personal and professional growth. Passionate about social work and recovery due to the transformative changes she witnesses, Andrea uniquely offers adaptability, empathy, and structured social support to individuals and families at Costa Rica Recovery.",
      image: "/staff-photos/team/Andrea-Gamboa.webp",
      hasLinkedIn: false
    },
    {
      id: 14,
      name: "Pilar Arce",
      title: "Recovery Counselor",
      bio: "Offers compassionate counseling and support, helping participants navigate their recovery journey with guidance and understanding.",
      expandedBio: "Pilar serves as a recovery counselor here at CRR, where she combines personal insight with professional care to support individuals navigating addiction. With long-term experience in her own recovery journey, Pilar brings deep empathy, lived wisdom, and a strong commitment to meeting clients where they are. She advocates especially for women in recovery, offering a safe, nonjudgmental space rooted in honesty and compassion. With academic studies in psychology and a continual interest in emotional wellness, she is always growing—both personally and professionally—to better serve the recovery community. Fluent in Spanish and English, Pilar is dedicated to helping others heal through connection, empowerment, and practical emotional support.",
      image: "/staff-photos/team/Pilar-Arce-.webp",
      hasLinkedIn: false
    },
    {
      id: 15,
      name: "Silvia Chaves Rodriguez",
      title: "Residential Nursing Supervisor",
      bio: "Supervises nursing care and ensures 24/7 medical support for all participants in our residential program.",
      expandedBio: "Silvia has over 15 years of experience in healthcare and nursing, working in various roles including physical therapy, nursing management, and direct patient care. Currently licensed as a nurse and physical therapist, she studied at Universidad Americana and Universidad Latina in Costa Rica. Silvia previously served as a nurse and physical therapist for Homewatch Caregivers Latin America and as a customer service and sales executive at ICE. She speaks Spanish and English and is continually dedicated to developing compassionate care and crisis intervention skills. Passionate about client recovery and wellness, Silvia uniquely offers empathetic support, crisis management, and extensive healthcare expertise to clients at Costa Rica Recovery.",
      image: "/staff-photos/team/Silvia-Rodriguez.webp",
      hasLinkedIn: false
    },
    {
      id: 16,
      name: "Luz Mary Machado",
      title: "Head Chef",
      bio: "Prepares nutritious and delicious meals tailored to support recovery, nourishing both body and soul.",
      expandedBio: "Luz has over 15 years of culinary experience, specializing in preparing nutritious meals that support healing and recovery. Her dedication to creating wholesome, balanced dishes reflects her commitment to nourishing both body and spirit. With expertise in food preparation and kitchen management, Luz ensures every meal is crafted with care and attention to dietary needs. She speaks Spanish and takes pride in contributing to the wellness journey of clients at Costa Rica Recovery through the healing power of food.",
      image: "/staff-photos/team/luz-costa-rica-recovery.webp",
      hasLinkedIn: false
    },
    {
      id: 17,
      name: "Cesar Murillo Jara",
      title: "Nurse Residential Coordinator",
      bio: "Coordinates nursing services and provides compassionate care to support participants' health and well-being.",
      expandedBio: "Cesar has over 4 years of experience in nursing and intensive care, working in clinical and critical care environments—including managing withdrawal syndrome, substance-use education, and comprehensive health assessments. Currently licensed as a nurse, he studied nursing at Universidad Santa Lucia and holds certifications in Basic Life Support (BLS) and Advanced Cardiac Life Support (ACLS). Cesar speaks Spanish and English, continually striving to enhance his skills in medical care and emotional support. Passionate about aiding recovery through compassionate care, Cesar uniquely provides attentive medical support, ensuring clients feel safe and supported during their rehabilitation at Costa Rica Recovery.",
      image: "/staff-photos/team/Cesar-Jara.webp",
      hasLinkedIn: false
    },
    {
      id: 18,
      name: "Indira Aguilar Fallas",
      title: "Nurse Residential Coordinator",
      bio: "Delivers skilled nursing care and ensures participants receive attentive medical support throughout their stay.",
      expandedBio: "Indira has several years of nursing experience and is a Licensed Nurse (Santa Lucía University) and Physical Therapist (Latin University of Costa Rica) with over 10 years of experience in healthcare. Her background includes occupational medicine, cosmetic surgery assistance, elderly care, and managing patients with psychological disorders. At Costa Rica Recovery, as Nurse Residential Coordinator, she manages nursing services, coordinates patient care, and works with families, ensuring the well-being of patients during their recovery process. Her passion is to support patients in their recovery and be part of their transformation towards a better future.",
      image: "/staff-photos/team/Indira-A-Fallas.webp",
      hasLinkedIn: false
    },
    {
      id: 19,
      name: "Cecilia Simón Solano",
      title: "Residential Coordinator",
      bio: "Manages residential operations and creates a welcoming, supportive environment for all participants.",
      expandedBio: "Cecilia has substantial experience and education in sociology, public administration, and psychological first aid, having worked extensively with vulnerable populations—focusing on monitoring client adherence to treatment plans, conflict resolution, and supporting therapeutic goals. Currently certified in Psychological First Aid (University of Barcelona) and holding degrees from the University of Costa Rica, Cecilia speaks Spanish and English. Dedicated to continuous learning and growth, she brings strong organizational, reasoning, and adaptability skills to her work. Passionate about recovery because of the profound learning and inspiration she gains from client journeys, Cecilia uniquely provides structured and empathetic support, helping clients successfully navigate their recovery process at Costa Rica Recovery.",
      image: "/staff-photos/team/Cecilia.webp",
      hasLinkedIn: false
    },
    {
      id: 20,
      name: "Laura Elizondo",
      title: "Psychologist",
      bio: "Provides psychological assessment and therapy, supporting participants in addressing mental health challenges.",
      expandedBio: "Laura Elizondo brings over a decade of experience in the psychology field, having worked in diverse settings including private practice, recovery environments, and workshops tailored for women and teens. Currently licensed as a psychologist, Laura is fluent in English, Spanish, and Italian, with a rich multicultural background from living in Canada and Italy. Constantly seeking to grow and advance in her craft, Laura brings empathy, cultural sensitivity, and evidence-based expertise to her work. She is passionate about supporting individuals in drug and alcohol recovery, driven by a deep belief in the transformative power of healing and self-discovery. Laura provides a unique blend of somatic awareness, creative expression, and spiritual depth, offering clients a compassionate space to reclaim their strength and rewrite their stories.",
      image: "/staff-photos/team/Laura-Elizondo2-2048x2048.webp",
      hasLinkedIn: false
    },
    {
      id: 21,
      name: "Graciela Monge",
      title: "Nurse Residential Coordinator",
      bio: "Offers dedicated nursing support and compassionate care to ensure participants' health and comfort.",
      expandedBio: "Graciela Monge is a licensed nurse with over eight years of experience, known for her empathetic, professional, and skilled approach to care. A graduate of Universidad Latina de Costa Rica and a member of the Costa Rican Board of Nursing since 2017, she spent six years at Hospital CIMA, one of the region's top hospitals, gaining broad experience across departments including Emergency, Psychiatry, and Post-Surgical Hospitalization.\n\nGraciela also provided care in the hospital's COVID-19 unit, strengthening her ability to work under pressure and within multidisciplinary teams. She currently offers home nursing services and is fluent in both Spanish and English. Dedicated to serving individuals in vulnerable moments, she finds deep purpose in supporting others through their recovery journey.",
      image: "/staff-photos/team/Graciela-Monge-Sq2.webp",
      hasLinkedIn: false
    },
    {
      id: 22,
      name: "Ariana Sesin",
      title: "Yoga Teacher",
      bio: "Guides participants in mindfulness and yoga practice, promoting physical wellness and inner peace.",
      expandedBio: "Ariana Sesin, MBA, RYT200, is a Costa Rican psychologist who has expanded her studies to embrace integrative therapeutic tools, empowering her clients to take ownership of their healing journey. Through alternative practices that harmonize body, mind, and spirit, she guides others toward holistic well-being.\n\nHer certifications include therapeutic sound healing, yoga, and nature-inspired shamanic practices — all woven together to support others with compassion on their path to healing and inner balance.",
      image: "/staff-photos/team/Ariana-Sesin-sq.webp",
      hasLinkedIn: false
    },
    {
      id: 23,
      name: "John La Touche",
      title: "Tai Chi Instructor",
      bio: "Teaches Tai Chi and mindful movement practices that support balance, strength, and mental clarity.",
      expandedBio: "John La Touche brings decades of valuable experience in the practice and teaching of traditional Chinese martial arts, including Kung Fu, Tai Chi Chuan, and Qigong. His journey in these disciplines began at a young age, dedicating his life to the mastery and transmission of these ancient arts. As the founder of Centro Marcial, Sifu La Touche has had the privilege of guiding numerous students in cultivating physical strength, mental discipline, and inner balance.\n\nHis deep understanding of Tai Chi and Qigong emphasizes conscious movement, breath control, and energy circulation; practices widely recognized for their benefits in stress reduction, emotional regulation, and overall well-being.\n\nJohn is passionate about sharing these ancestral techniques to support individuals on their path towards personal improvement and overall health and well-being. His approach fosters perseverance, concentration, and a strong connection between mind and body, offering invaluable tools for facing challenges and building a solid foundation for lasting personal growth.",
      image: "/staff-photos/team/John-La-Touche-SQ.webp",
      hasLinkedIn: false
    },
    {
      id: 24,
      name: "Laura Sibaja",
      title: "Sound Therapy Facilitator",
      bio: "Facilitates healing sound therapy sessions that promote relaxation, stress relief, and emotional well-being.",
      expandedBio: "Laura Sibaja Rodriguez has more than 5 years of experience as a Sound and Vibrational Healing Therapist. Certified from Institucion Espanola de Sonoterapia in 2020 and The Elephant Bowl in Sound Healing and Vibrational Therapies in 2017, she currently serves as a Sound Healing Therapist at Costa Rica Recovery. Laura speaks Spanish and English. Constantly seeking to grow and advance in her craft, Laura brings expertise in sound and vibrational therapies to her work. She is passionate about creating a family atmosphere at CRR and providing holistic well-being to clients.",
      image: "/staff-photos/team/Laura-Sibaja.webp",
      hasLinkedIn: false
    },
    {
      id: 25,
      name: "Marianella Zuñiga Loria (Nela)",
      title: "Cleaning & Hospitality",
      bio: "Maintains the cleanliness and comfort of our facility, ensuring a welcoming and healing environment.",
      expandedBio: "Marianella Zuñiga Loria (Nela) has more than 8 years of experience in customer service, culinary work, and caregiving. A high school graduate with training as an Accounting Assistant and in food handling, she currently works in Cleaning and Hospitality at Costa Rica Recovery. Nela speaks Spanish. She brings skills in maintaining facilities, preparing rooms, and managing laundry. Nela is passionate about helping others in their restoration process and finds satisfaction in her role.",
      image: "/staff-photos/team/Marianela-sq.webp",
      hasLinkedIn: false
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/facility/spaces/group-session.jpg"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-extra-dark/60 to-navy-dark/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-light text-white mb-6">
              Meet the Team Behind
              <br />
              <span className="italic font-serif text-orange">Your Recovery Journey</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our experienced and compassionate team is dedicated to guiding you toward a life of balance and well-being. Together, we'll help you unlock your full potential.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us for Any Questions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Our Commitment to
              <br />
              <span className="italic font-serif text-orange">Excellence in Care</span>
            </h2>
            <p className="text-lg font-secondary font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Every member of our team brings unique expertise, lived experience, and unwavering compassion to support your recovery journey. We believe in treating the whole person—mind, body, and spirit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Every interaction is guided by empathy, understanding, and genuine concern for your well-being and recovery."
              },
              {
                icon: Award,
                title: "Clinical Excellence",
                description: "Our licensed professionals provide evidence-based treatments and maintain the highest standards of clinical care."
              },
              {
                icon: Users,
                title: "Lived Experience",
                description: "Many of our team members have personal recovery experience, offering unique insight and authentic support."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-16 w-16 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-navy-extra-dark mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Meet Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Our Dedicated
              <br />
              <span className="italic font-serif text-orange">Team Members</span>
            </h2>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleOpenModal(member.id)}
                className="relative flex h-[27rem] md:h-[32rem] w-full flex-col justify-end rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute top-0 left-0 z-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay Container */}
                <div className="z-10 bg-gradient-to-t from-black/40 to-black/0 p-3 pt-16 md:p-4 md:pt-20 lg:pt-24">
                  {/* Liquid Glass Card */}
                  <div className="rounded-xl bg-white/30 px-4 pt-5 pb-6 text-white ring-1 ring-inset ring-white/30 backdrop-blur-[10px]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <svg 
                        viewBox="0 0 24 24" 
                        width="24" 
                        height="24" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        aria-hidden="true" 
                        className="size-6"
                      >
                        <path d="M7 17 17 7m0 0H7m10 0v10"></path>
                      </svg>
                    </div>
                    
                    <p className="mt-2 text-md font-semibold">{member.title}</p>
                    
                    <p className="mt-0.5 text-sm md:text-md line-clamp-2">
                      {member.bio}
                    </p>
                    
                    {/* Social Links - Only LinkedIn for select members */}
                    {member.hasLinkedIn && (
                      <ul className="mt-4 flex gap-5">
                        <li>
                          <a 
                            href="#"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex rounded-xs text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-110 transition-transform"
                            aria-label="LinkedIn"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-5">
                              <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill="currentColor" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-navy-extra-dark to-navy-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light mb-6">
              Ready to Meet Our Team?
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Our compassionate team is here to support you every step of the way. Contact us to learn more about how we can help you or your loved one begin the journey to recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <motion.button
              className="bg-orange hover:bg-orange-dark text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Get in Touch
            </motion.button>
          </Link>
              
              <a href="tel:+18668041793">
                <motion.button
                  className="border border-white/30 hover:border-white/60 text-white font-secondary font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-4 h-4" />
                  Call (866) 804-1793
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember !== null && (() => {
          const member = teamMembers.find(m => m.id === selectedMember)
          if (!member) return null

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                {/* Close Button - Sticky positioned inside dialog */}
                <div className="sticky top-0 z-30 h-0">
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
                  >
                    <X className="w-5 h-5 text-navy-extra-dark" />
                  </button>
                </div>

                {/* Navigation Arrows - Fixed Position */}
                {selectedMember > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="fixed left-4 md:left-[calc((100vw-72rem)/2-3rem)] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-navy-extra-dark" />
                  </button>
                )}

                {selectedMember < teamMembers.length && (
                  <button
                    onClick={handleNext}
                    className="fixed right-4 md:right-[calc((100vw-72rem)/2-3rem)] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
                  >
                    <ChevronRight className="w-6 h-6 text-navy-extra-dark" />
                  </button>
                )}

                {/* Modal Content */}
                <div className="md:flex">
                  {/* Image Section - Desktop Left / Mobile Top */}
                  <div className="md:w-2/5 relative">
                    <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none"
                      />
                    </div>
                  </div>

                  {/* Content Section - Desktop Right / Mobile Bottom */}
                  <div className="md:w-3/5 p-8 md:p-12 md:pr-16">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-extra-dark mb-2">
                          {member.name}
                        </h2>
                        <p className="text-lg font-semibold text-orange">
                          {member.title}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="w-16 h-1 bg-orange/30"></div>

                      {/* Expanded Bio */}
                      <div className="prose prose-sm md:prose-base max-w-none">
                        {member.expandedBio?.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* LinkedIn Link */}
                      {member.hasLinkedIn && (
                        <div className="pt-4 border-t border-gray-200">
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-navy-extra-dark hover:text-orange transition-colors"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                              <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z" fill="currentColor" />
                            </svg>
                            <span className="text-sm font-medium">Connect on LinkedIn</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </main>
  )
}