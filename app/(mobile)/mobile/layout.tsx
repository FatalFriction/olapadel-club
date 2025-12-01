import type { Metadata,Viewport } from "next"
import localFont from "next/font/local"
import "../../globals.css"

const arpona = localFont({
  src: [
    {
      path: "../../Fonts/Arpona.otf",
      style: "normal"
    }
  ],
  variable: "--font-arpona",
  display: "swap",
})

const faculty = localFont({
  src: [
    { path: "../../Fonts/Faculty.ttf", style: "normal"},
  ],
  variable: "--font-faculty",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ola Padel Club Links | Iconic Simplicity",
  description: "A calm, minimal padel experience",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en" className={`antialiased ${arpona.variable} ${faculty.variable}`}>
      {children}
    </div>
  )
}
