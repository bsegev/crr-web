"use client"

import React from "react"
import { cn } from "@/lib/utils"

// El Tirol Watercolor Palette inspired by Hydrangea, Roots, Poro Tree, Sunshine, Roble Sabana
const watercolorColors = [
  "#7FE0CC", // Water - Hydrangea inspired
  "#A8C584", // Forest - Roots inspired  
  "#D4C7B4", // Stone - Poro Tree inspired
  "#F5E6A3", // Sunshine inspired
  "#B8A082", // Roble Sabana inspired
]

// 7 Base Vector Pebble Shapes (simplified SVG paths)
const basePebbles = [
  "M20,10 C30,5 40,15 35,25 C30,35 15,30 10,20 C5,10 10,5 20,10 Z", // Organic oval
  "M15,8 C25,3 35,12 32,22 C28,32 12,28 8,18 C4,8 8,3 15,8 Z", // Rounded triangle
  "M18,12 C28,8 38,18 34,28 C30,38 14,34 10,24 C6,14 10,8 18,12 Z", // Elongated oval
  "M22,14 C32,10 42,20 38,30 C34,40 18,36 14,26 C10,16 14,10 22,14 Z", // Curved rectangle
  "M16,6 C26,2 36,12 33,22 C29,32 13,28 9,18 C5,8 9,2 16,6 Z", // Teardrop
  "M24,16 C34,12 44,22 40,32 C36,42 20,38 16,28 C12,18 16,12 24,16 Z", // Kidney shape
  "M19,9 C29,5 39,15 36,25 C32,35 16,31 12,21 C8,11 12,5 19,9 Z", // Asymmetric oval
]

// 12 Approved Multi-Pebble Combinations
const approvedCombos = [
  [0, 1], // Combo 1: Organic oval + Rounded triangle
  [2, 3], // Combo 2: Elongated oval + Curved rectangle  
  [4, 5], // Combo 3: Teardrop + Kidney shape
  [0, 6], // Combo 4: Organic oval + Asymmetric oval
  [1, 2], // Combo 5: Rounded triangle + Elongated oval
  [3, 4], // Combo 6: Curved rectangle + Teardrop
  [5, 6], // Combo 7: Kidney shape + Asymmetric oval
  [0, 2, 4], // Combo 8: Three pebbles
  [1, 3, 5], // Combo 9: Three pebbles
  [2, 4, 6], // Combo 10: Three pebbles
  [0, 1, 2, 3], // Combo 11: Four pebbles
  [3, 4, 5, 6], // Combo 12: Four pebbles
]

interface WatercolorPebblesProps {
  combo?: number // 0-11 for approved combinations
  size?: "sm" | "md" | "lg"
  className?: string
  opacity?: number
}

export const WatercolorPebbles: React.FC<WatercolorPebblesProps> = ({
  combo = 0,
  size = "md",
  className,
  opacity = 0.15,
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32",
  }

  const selectedCombo = approvedCombos[combo % approvedCombos.length]
  
  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <svg
        viewBox="0 0 50 40"
        className="w-full h-full"
        style={{ mixBlendMode: "multiply" }}
      >
        {selectedCombo.map((pebbleIndex, index) => {
          const colorIndex = index % watercolorColors.length
          const color = watercolorColors[colorIndex]
          const path = basePebbles[pebbleIndex]
          
          // Offset each pebble slightly for layered effect
          const offsetX = index * 3
          const offsetY = index * 2
          
          return (
            <g key={`${pebbleIndex}-${index}`} transform={`translate(${offsetX}, ${offsetY})`}>
              <path
                d={path}
                fill={color}
                opacity={opacity}
                className="transition-opacity duration-500"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Decorative Background Pebbles Component
interface BackgroundPebblesProps {
  count?: number
  className?: string
}

export const BackgroundPebbles: React.FC<BackgroundPebblesProps> = ({
  count = 3,
  className,
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <WatercolorPebbles
          key={index}
          combo={index % 12}
          size={index % 2 === 0 ? "lg" : "md"}
          opacity={0.08}
          className={cn(
            "absolute",
            index === 0 && "top-10 right-10",
            index === 1 && "bottom-20 left-10",
            index === 2 && "top-1/2 right-1/4",
            index > 2 && "top-1/3 left-1/3"
          )}
        />
      ))}
    </div>
  )
} 