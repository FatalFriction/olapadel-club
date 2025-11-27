import AboutUs from "@/Components/Module/AboutUs/About"
import Galleries from "@/Components/Module/Gallery/Galleries"
import Hero from "@/Components/Module/Hero/Hero"
import HowtoJoin from "@/Components/Module/Join/HowtoJoin"
import Services from "@/Components/Module/Services/Services"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Hero/>
      <AboutUs/>
      <Services />
      <HowtoJoin />
      <Galleries />
    </div>
  )
}
