import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// El Tirol Brand Font Alternatives
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Playfair Display - closest free alternative to Quadrant Text
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quadrant",
})

// Inter - clean alternative for Messina Sans body/button text
const messinaSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-messina",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${messinaSans.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'IWC - International Wellness Collective',
  description: 'Transformative healing experiences delivered with absolute discretion and dignity. Four distinctive centers offering trauma-informed care, addiction recovery, and holistic healing.',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};
