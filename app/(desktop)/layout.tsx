import type { Metadata } from "next"
import localFont from "next/font/local"
import "../globals.css"
import Navbar from "@/Components/Navbar/Navbar"
import Footer from "@/Components/Module/Footer/Footer"

const arpona = localFont({
  src: [
    {
      path: "../font/Arpona.otf",
      style: "normal"
    }
  ],
  variable: "--font-arpona",
  display: "swap",
})

const faculty = localFont({
  src: [
    { path: "../font/Faculty.ttf", style: "normal"},
  ],
  variable: "--font-faculty",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ola Padel Club | Iconic Simplicity",
  description: "A calm, minimal padel experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`antialiased ${arpona.variable} ${faculty.variable}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
