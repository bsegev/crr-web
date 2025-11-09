"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function TreatmentTypesExpandable() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [visibleCount, setVisibleCount] = useState(5);
  const [previousVisibleCount, setPreviousVisibleCount] = useState(5);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-sm font-light text-orange tracking-widest uppercase mb-4">
              Evidence-Based Treatment
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-light text-navy-extra-dark leading-[1.1] tracking-[-0.02em]">
              Therapeutic{" "}
              <span className="italic font-serif text-orange">Modalities</span>
            </h2>
            <p className="text-lg sm:text-xl font-secondary font-light text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
              Click each therapy type to learn more about how we support your recovery
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="w-full bg-gray-50 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0  grid place-items-center z-[100]">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden text-sm"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img
                      width={200}
                      height={200}
                      src={active.src}
                      alt={active.title}
                      className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                    />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-start p-4">
                      <div className="">
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="!font-bold text-navy-extra-dark !text-sm !leading-normal"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-gray-600 !text-sm"
                        >
                          {active.description}
                        </motion.p>
                      </div>

                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.ctaLink}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-orange text-white"
                      >
                        {active.ctaText}
                      </motion.a>
                    </div>
                    <div className="pt-4 relative px-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-600 text-sm md:text-sm lg:text-base max-h-[55vh] md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white_0%,white_85%,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&>p]:!text-sm md:[&>p]:!text-sm lg:[&>p]:!text-base [&>p]:!leading-relaxed"
                      >
                        {typeof active.content === "function"
                          ? active.content()
                          : active.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
          <ul className="max-w-2xl mx-auto w-full space-y-4">
            {cards.slice(0, visibleCount).map((card, index) => {
              const isNewlyVisible = index >= previousVisibleCount;
              return (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                  initial={isNewlyVisible ? { opacity: 0, y: 20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={isNewlyVisible ? { 
                    duration: 0.5, 
                    delay: (index - previousVisibleCount) * 0.1,
                    ease: "easeOut"
                  } : { duration: 0 }}
                onClick={() => setActive(card)}
                  className="p-4 flex flex-row md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-row items-center flex-1 min-w-0">
                  <motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0">
                    <img
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-14 w-14 rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="!font-medium text-navy-extra-dark text-left !text-sm !leading-normal"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-gray-600 text-left !text-sm"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-orange hover:text-white text-black ml-4 flex-shrink-0"
                >
                  {card.ctaText}
                </motion.button>
            </motion.div>
              );
            })}
        </ul>
        
        {/* Show More Button */}
        {visibleCount < cards.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => {
                setPreviousVisibleCount(visibleCount);
                setVisibleCount(prev => Math.min(prev + 5, cards.length));
              }}
              className="px-8 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              Show {Math.min(5, cards.length - visibleCount)} More Therapies
            </button>
          </motion.div>
        )}
        
        {/* Show Less Button (when all are visible) */}
        {visibleCount >= cards.length && visibleCount > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => {
                setPreviousVisibleCount(visibleCount);
                setVisibleCount(5);
              }}
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Show Less
            </button>
          </motion.div>
        )}
        </div>
      </section>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Evidence-based therapy",
    title: "Cognitive Behavioral Therapy (CBT)",
    src: "/facility/modalities/CBT_image.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          CBT is one of the most effective evidence-based treatments for addiction. This therapy helps you identify and change negative thought patterns and behaviors that contribute to substance use. <br /> <br />
          In sessions, you'll learn to identify triggers and high-risk situations, develop coping strategies for cravings, challenge and reframe negative thoughts, build problem-solving skills, and practice new behaviors in real-world situations. <br /> <br />
          Our therapists are trained in evidence-based CBT techniques specifically adapted for addiction treatment, providing you with tools that will support your recovery long after treatment ends.
        </p>
      );
    },
  },
  {
    description: "Emotional regulation therapy",
    title: "Dialectical Behavior Therapy (DBT)",
    src: "/facility/modalities/DBT_image.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          DBT is an evidence-based therapy that combines cognitive-behavioral techniques with mindfulness practices. It's particularly effective for individuals with emotional regulation challenges and co-occurring disorders. <br /> <br />
          DBT focuses on four key areas: mindfulness skills, distress tolerance, emotional regulation, and interpersonal effectiveness. You'll learn practical tools to manage intense emotions, handle crisis situations, and build healthier relationships. <br /> <br />
          Research shows DBT significantly reduces substance use frequency and improves treatment retention, especially for those with borderline personality disorder and substance use disorders.
        </p>
      );
    },
  },
  {
    description: "Rational thinking therapy",
    title: "Rational Emotive Behavioral Therapy (REBT)",
    src: "/facility/modalities/REBT_image.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          REBT helps you identify and change irrational beliefs that contribute to emotional distress and substance use. This evidence-based approach focuses on the connection between thoughts, emotions, and behaviors. <br /> <br />
          Through REBT, you'll learn to challenge self-defeating thoughts, develop rational thinking patterns, improve emotional regulation, and build healthier coping strategies. <br /> <br />
          Clinical studies show REBT significantly reduces irrational beliefs, anxiety, and stress in patients with substance use disorders, leading to improved self-control and lower relapse risk.
        </p>
      );
    },
  },
  {
    description: "Trauma-sensitive care",
    title: "Trauma-Informed Care",
    src: "/facility/modalities/Trauma-informed-image.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Trauma-informed care recognizes that most people with addiction have experienced trauma. Our approach integrates this understanding into every aspect of treatment, creating a safe, supportive environment for healing. <br /> <br />
          Our trauma-informed approach includes safety and trust-building, choice and collaboration in treatment planning, peer support integration, cultural sensitivity, and empowerment-focused interventions. <br /> <br />
          This approach helps address the root causes of addiction while building resilience and creating lasting recovery outcomes.
        </p>
      );
    },
  },
  {
    description: "Individual sessions",
    title: "One-on-One Therapy",
    src: "/facility/modalities/one-on-one-therapy-image.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Individual therapy provides a safe, confidential space to explore the root causes of your addiction and develop personalized strategies for recovery. You'll work closely with a dedicated therapist 3-5 times per week. <br /> <br />
          Sessions focus on trauma processing and healing, co-occurring mental health disorders, relationship and family issues, personal goal-setting and life planning, and developing healthy coping mechanisms. <br /> <br />
          Your therapist will tailor treatment to your unique needs, history, and recovery goals, ensuring you receive the personalized attention you deserve.
        </p>
      );
    },
  },
  {
    description: "Peer support",
    title: "Group Therapy",
    src: "/facility/spaces/group-session.jpg",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Group therapy provides powerful peer support and shared learning experiences. Connect with others who understand your struggles and celebrate your victories together in a safe, structured environment. <br /> <br />
          Group therapy helps reduce feelings of isolation and shame, learn from others' experiences and insights, practice new social and communication skills, build a supportive recovery community, and develop accountability and mutual support. <br /> <br />
          Groups are led by licensed therapists and limited to 8-10 participants for optimal engagement and meaningful connection.
        </p>
      );
    },
  },
  {
    description: "Present-moment awareness",
    title: "Mindfulness & Meditation",
    src: "/facility/modalities/meditation.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Mindfulness and meditation practices help you develop present-moment awareness and emotional regulation skills essential for recovery. These evidence-based practices reduce stress, anxiety, and cravings. <br /> <br />
          Our mindfulness program includes guided meditation sessions, breathing exercises, body scan practices, mindful movement, and integration of mindfulness into daily activities. <br /> <br />
          Research shows mindfulness interventions significantly reduce substance use, anxiety, and depression in addiction treatment populations, supporting long-term recovery outcomes.
        </p>
      );
    },
  },
  {
    description: "Mind-body wellness",
    title: "Yoga & Movement Therapy",
    src: "/facility/wellness/yoga-stretch.jpg",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Yoga and movement therapy combine physical exercise with mindfulness to promote healing of mind, body, and spirit. These practices help reduce stress, improve mood, and build physical strength. <br /> <br />
          Our yoga program includes gentle and restorative yoga, breathwork (pranayama), meditation, and movement therapy sessions tailored to all fitness levels. <br /> <br />
          Studies show that 80% of yoga participants with alcohol use disorder achieved recovery or significant improvement, compared to 48% in control groups, demonstrating the powerful healing benefits of this practice.
        </p>
      );
    },
  },
  {
    description: "Creative expression",
    title: "Art & Music Therapy",
    src: "/facility/wellness/art-therapy.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Art and music therapy provide alternative ways to express emotions, process trauma, and explore your inner world when words may not be enough. These creative modalities support emotional healing and self-discovery. <br /> <br />
          Our creative therapy program includes visual arts, music therapy, creative writing, drama therapy, and expressive arts workshops. No artistic experience is necessary. <br /> <br />
          Creative therapies help reduce anxiety and depression, improve emotional regulation, and provide healthy outlets for stress and difficult emotions during recovery.
        </p>
      );
    },
  },
  {
    description: "Vibrational healing",
    title: "Sound Healing",
    src: "/facility/modalities/sound-healing-image.webp",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Sound healing uses vibrational frequencies to promote relaxation, reduce stress, and support emotional healing. This ancient practice is now backed by modern research showing significant therapeutic benefits. <br /> <br />
          Our sound healing sessions include Tibetan singing bowls, crystal bowls, gong therapy, and guided sound meditation. These sessions help calm the nervous system and promote deep relaxation. <br /> <br />
          Research shows that Tibetan singing bowl meditation reduces tension, anger, fatigue, and depressed mood by 19-27% after a single session, with the strongest effects in adults aged 31-60.
        </p>
      );
    },
  },
  {
    description: "Nature-based therapy",
    title: "Adventure Therapy",
    src: "/facility/nature/volcano-wide.jpg",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Adventure therapy combines outdoor activities with therapeutic intervention to build confidence, teamwork, and problem-solving skills. Costa Rica's natural environment provides the perfect setting for this transformative approach. <br /> <br />
          Our adventure therapy program includes hiking, surfing, zip-lining, rock climbing, and team-building activities in Costa Rica's beautiful natural settings. <br /> <br />
          Adventure therapy helps build self-confidence, develop healthy coping skills, and create positive associations with physical activity and nature, all essential for long-term recovery.
        </p>
      );
    },
  },
  {
    description: "Nutritional wellness",
    title: "Nutritional Counseling",
    src: "/facility/nutrition/chef-avocado-toast.webp",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Proper nutrition is essential for physical and mental health during recovery. Our nutritional counseling helps restore your body's natural balance and supports brain healing from substance use. <br /> <br />
          Our nutrition program includes individual counseling, meal planning, cooking classes, education about nutrition and recovery, and support for developing healthy eating habits. <br /> <br />
          Research shows that nutrition and physical activity counseling in addiction treatment leads to 22% less sugary drink intake and up to 47% higher activity levels post-intervention.
        </p>
      );
    },
  },
  {
    description: "Peer recovery support",
    title: "12-Step Facilitation",
    src: "/facility/modalities/12-steps-image.png",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          12-Step facilitation introduces you to the principles and practices of AA/NA. While we respect all paths to recovery, we offer 12-Step support for those who find value in this time-tested approach. <br /> <br />
          The program includes introduction to the 12 Steps and 12 Traditions, step work with your individual counselor, on-site AA/NA meetings, connection to local home groups upon return, and sponsorship guidance and support. <br /> <br />
          We also support alternative recovery paths including SMART Recovery and Refuge Recovery, ensuring you find the approach that resonates with you.
        </p>
      );
    },
  },
];

