"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

type Tab = {
  title: string
  value: string
  content?: string | React.ReactNode | any
}

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0])
  const [tabs, setTabs] = useState<Tab[]>(propTabs)

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs]
    const selectedTab = newTabs.splice(idx, 1)
    newTabs.unshift(selectedTab[0])
    setTabs(newTabs)
    setActive(newTabs[0])
  }

  return (
    <div className={cn("w-full", containerClassName)}>
      {/* Tabs */}
      <div
        className={cn(
          "flex flex-col sm:flex-row items-stretch sm:items-center justify-center [perspective:1000px] relative overflow-visible max-w-full w-full gap-3 sm:gap-4"
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx)
            }}
            className={cn("relative px-4 py-2 rounded-lg w-full sm:w-auto", tabClassName)}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-lg",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block font-semibold">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      
      {/* Content - attached to tabs */}
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        className={cn("mt-6", contentClassName)}
      />
    </div>
  )
}

export const FadeInDiv = ({
  className,
  tabs,
}: {
  className?: string
  key?: string
  tabs: Tab[]
  active: Tab
}) => {
  // Only render the first tab (active tab) since moveSelectedTabToTop puts it first
  const activeTab = tabs[0]
  
  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full"
        >
          {activeTab.content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

