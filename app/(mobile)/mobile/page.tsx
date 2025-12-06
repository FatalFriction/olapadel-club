import { BackgroundProvider } from "@/Components/Module/Mobile/Background/BackgroundContext";
import Background from "@/Components/Module/Mobile/Background/Background";
import MobileButton from "@/Components/Module/Mobile/Button/Button";
import { SocialIcon } from "react-social-icons";
import { MobileLogo } from "@/Components/Module/Mobile/Logo/MobileLogo";
import { CalendarDays, MapPinHouse } from "lucide-react";
import { MobileImage } from "@/Components/Module/Mobile/CourtPict/Court";

export default function Home() {
  return (
    <BackgroundProvider>
      <div className="relative min-h-screen w-full overflow-hidden">

        <Background />

        <div className="relative z-10 p-2 space-y-6 flex flex-col items-center">

          <MobileLogo />

          <MobileButton
            href="https://wa.me/6282225638033"
            icon={
              <SocialIcon
                network="whatsapp"
                fgColor="#073730"
                bgColor="transparent"
                as="span"
                style={{ height: 62, width: 62 }}
              />
            }
          >
            Whatsapp
          </MobileButton>
          <MobileButton
            href="https://www.instagram.com/ola.padelclub"
            icon={
              <SocialIcon
                network="instagram"
                fgColor="#073730"
                bgColor="transparent"
                as="span"
                style={{ height: 62, width: 62}}
              />
            }
          >
            Instagram
          </MobileButton>
          <MobileButton
            href="https://courtside.id/mitra?mitra_id=a0728379-8662-4c9b-8cde-61fcceb8d247"
            icon={<CalendarDays size={33} color="#073730" className="ml-[17px]"/>}
          >
            <p className="ml-2">Book Court</p>
          </MobileButton>
          <MobileButton
            href="https://maps.app.goo.gl/jtyBEcyVXvnNEeaG8"
            icon={<MapPinHouse size={33} color="#073730" className="ml-11"/>}
          >
            <p className="ml-5">Our Location</p>
          </MobileButton>

        <MobileImage />
        </div>


      </div>
    </BackgroundProvider>
  );
}
