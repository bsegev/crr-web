"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function MainServicesCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
            Our Core Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
            Comprehensive{" "}
            <span className="italic font-serif text-orange">Treatment Programs</span>
          </h2>
          <p className="text-lg sm:text-xl font-secondary font-light text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
            From medical detox to aftercare planning, we support you at every stage of your recovery journey
          </p>
        </div>
      </div>
      
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Medical Detoxification",
    title: "Safe & Supervised Detox",
    src: "/services-cards/medical-detox.png",
    content: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
          <span className="font-bold text-neutral-700">
            Medical detoxification is the first critical step in recovery.
          </span>{" "}
          Our 24/7 medically supervised detox program ensures your safety and comfort during withdrawal. 
          Our experienced medical team monitors your vitals, manages symptoms, and provides compassionate 
          care in a serene Costa Rican setting.
        </p>
        <div className="mt-8 space-y-4 text-neutral-600 text-base">
          <h3 className="font-bold text-neutral-700 text-lg">What to Expect:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 medical supervision and monitoring</li>
            <li>Medication-assisted treatment when appropriate</li>
            <li>Comfortable, private accommodations</li>
            <li>Nutritional support and hydration therapy</li>
            <li>Holistic comfort measures (massage, meditation)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    category: "Residential Treatment",
    title: "30, 60 & 90-Day Programs",
    src: "/services-cards/program-months.png",
    content: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
          <span className="font-bold text-neutral-700">
            Personalized residential treatment programs tailored to your needs.
          </span>{" "}
          Choose from 30, 60, or 90-day programs that combine evidence-based therapies with holistic 
          practices. Live in our comfortable San José facility while immersing yourself in Costa Rica's 
          healing environment.
        </p>
        <div className="mt-8 space-y-4 text-neutral-600 text-base">
          <h3 className="font-bold text-neutral-700 text-lg">Program Includes:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Individual therapy sessions (3-5x per week)</li>
            <li>Group therapy and peer support</li>
            <li>Family therapy and communication workshops</li>
            <li>Cognitive Behavioral Therapy (CBT)</li>
            <li>12-Step facilitation or alternative approaches</li>
            <li>Yoga, meditation, and mindfulness practices</li>
            <li>Cultural immersion and nature excursions</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    category: "Holistic Therapies",
    title: "Mind, Body & Spirit Healing",
    src: "/services-cards/yoga-shala.png",
    content: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
          <span className="font-bold text-neutral-700">
            Recovery is about healing the whole person.
          </span>{" "}
          Our holistic therapies complement evidence-based treatment to address physical, emotional, 
          and spiritual well-being. Experience the therapeutic power of Costa Rica's natural beauty 
          combined with ancient healing practices.
        </p>
        <div className="mt-8 space-y-4 text-neutral-600 text-base">
          <h3 className="font-bold text-neutral-700 text-lg">Holistic Modalities:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Daily yoga and meditation sessions</li>
            <li>Tai Chi and Qigong practices</li>
            <li>Art and music therapy</li>
            <li>Nutritional therapy and cooking classes</li>
            <li>Adventure therapy (surfing, hiking, zip-lining)</li>
            <li>Massage and acupuncture</li>
            <li>Beach walks and nature immersion</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    category: "Family Support",
    title: "Healing Together",
    src: "/services-cards/family-support.png",
    content: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
          <span className="font-bold text-neutral-700">
            Addiction affects the whole family.
          </span>{" "}
          Our family program helps loved ones understand addiction, develop healthy communication 
          patterns, and rebuild trust. Virtual and in-person sessions available to accommodate families 
          across North America.
        </p>
        <div className="mt-8 space-y-4 text-neutral-600 text-base">
          <h3 className="font-bold text-neutral-700 text-lg">Family Services Include:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Weekly family therapy sessions (virtual or in-person)</li>
            <li>Educational workshops on addiction and recovery</li>
            <li>Communication skills training</li>
            <li>Codependency and boundary-setting workshops</li>
            <li>Family weekend visits in Costa Rica (optional)</li>
            <li>Aftercare family support groups</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    category: "Aftercare Planning",
    title: "Long-Term Success",
    src: "/services-cards/aftercare.png",
    content: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
          <span className="font-bold text-neutral-700">
            Recovery doesn't end when treatment does.
          </span>{" "}
          Our comprehensive aftercare planning ensures you have the support and resources needed 
          for long-term success. We connect you with local resources, support groups, and ongoing 
          therapy options when you return home.
        </p>
        <div className="mt-8 space-y-4 text-neutral-600 text-base">
          <h3 className="font-bold text-neutral-700 text-lg">Aftercare Includes:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Personalized relapse prevention plan</li>
            <li>Referrals to local therapists and support groups</li>
            <li>Sober living placement assistance</li>
            <li>Alumni support network and check-ins</li>
            <li>Monthly virtual alumni meetings</li>
            <li>Crisis support hotline (24/7)</li>
            <li>Return to Costa Rica wellness retreats</li>
          </ul>
        </div>
      </div>
    ),
  },
];

// Fix: Import Image component
import Image from "next/image";

