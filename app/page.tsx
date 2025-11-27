import AboutUs from "@/Components/Module/AboutUs/About"
import Hero from "@/Components/Module/Hero/Hero"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Hero/>
      <div className="mx-24">
        <AboutUs/>
      </div>
    </div>
  )
}
