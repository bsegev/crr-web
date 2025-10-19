"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function TreatmentTypesExpandable() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
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
          <div className="text-center mb-12 sm:mb-16">
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
          </div>
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
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 grid place-items-center z-[100]">
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
                  className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img
                      width={200}
                      height={200}
                      src={active.src}
                      alt={active.title}
                      className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />
                  </motion.div>

                  <div className="text-base">
                    <div className="flex justify-between items-start p-4">
                      <div className="">
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-bold text-navy-extra-dark text-sm"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-gray-600 text-sm"
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
                        className="text-gray-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
          <ul className="max-w-2xl mx-auto w-full gap-4">
            {cards.map((card, index) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-white rounded-xl cursor-pointer text-base"
              >
                <div className="flex gap-4 flex-col md:flex-row ">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <img
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-navy-extra-dark text-center md:text-left text-sm"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-gray-600 text-center md:text-left text-sm"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-orange hover:text-white text-black mt-4 md:mt-0"
                >
                  {card.ctaText}
                </motion.button>
              </motion.div>
            ))}
          </ul>
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
    src: "/hero-bg/pexels-enrique-hidalgo-1230661389-34293263.jpg",
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
    description: "Individual sessions",
    title: "One-on-One Therapy",
    src: "/hero-bg/jake-johnson-_pbFvzlIPr0-unsplash.jpg",
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
    src: "/hero-bg/paige-laine-elmer-R8Qvisl-Dzw-unsplash.jpg",
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
    description: "Healing relationships",
    title: "Family Therapy",
    src: "/hero-bg/cesar-badilla-miranda-IvyIreqmA8s-unsplash.jpg",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Addiction affects the entire family system. Our family therapy program helps repair relationships, improve communication, and rebuild trust. Sessions are available virtually or in-person in Costa Rica. <br /> <br />
          The family program includes weekly family therapy sessions, education about addiction and recovery, communication skills training, boundary-setting workshops, and codependency awareness and healing. <br /> <br />
          Families who participate in treatment see significantly higher long-term recovery rates and stronger ongoing support systems.
        </p>
      );
    },
  },
  {
    description: "Mind-body connection",
    title: "Holistic Therapies",
    src: "/hero-bg/polina-kocheva-Xf802oUIHLc-unsplash.jpg",
    ctaText: "Learn More",
    ctaLink: "/contact",
    content: () => {
      return (
        <p>
          Our holistic therapies address the physical, emotional, and spiritual aspects of recovery. Experience yoga, meditation, art therapy, adventure therapy, and more in Costa Rica's healing environment. <br /> <br />
          Holistic offerings include daily yoga and meditation, art and music therapy, Tai Chi and Qigong, adventure therapy like surfing and hiking, nutritional therapy and cooking classes, plus massage and acupuncture. <br /> <br />
          Holistic therapies complement evidence-based treatment for whole-person healing, addressing mind, body, and spirit in your recovery journey.
        </p>
      );
    },
  },
  {
    description: "Peer recovery support",
    title: "12-Step Facilitation",
    src: "/hero-bg/vlad-d-DOKH2miZEL0-unsplash.jpg",
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

