import OlaButton from "@/Components/Button/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <Image
        src="/netcourt.jpg"
        alt="Background"
        width={1600}
        height={1600}
        priority
        className="object-cover -z-10 w-[1920px] h-full absolute top-0 left-0"
      />

      <div className="hidden lg:flex relative z-10 min-h-screen items-center justify-between text-primary-foreground px-20">
        <div
          className="
            text-5xl md:text-6xl lg:text-7xl xl:text-9xl 
            tracking-wider 
            w-full md:w-[75%] lg:w-[70%] 
            mt-[14%] md:mt-[12%] lg:mt-[10%] 
            text-shadow-lg
          "
        >
          <h1>
            Ola Padel Club
            <br />
            Court Of Simplicity
          </h1>
        </div>

        <div className="flex flex-col text-3xl/10 w-[40%] text-left mt-[18%] text-shadow-lg">
          <p>
            Play padel like never before <br /> friendly matches, skill building
            sessions, <br /> and a community that feels like family
          </p>

          <div className="flex flex-row items-center mt-16 gap-6 w-[80%]">
            <OlaButton
              className="text-3xl"
              variant="primary"
              icon={<ArrowUpRight size={24} />}
            >
              <Link href="https://wa.me/6282225638033">Book Now</Link>
            </OlaButton>
            <OlaButton className="text-3xl" variant="outline-secondary">
              <Link href="https://wa.me/6282225638033">Learn More</Link>
            </OlaButton>
          </div>
        </div>
      </div>

      <div className="lg:hidden relative z-20 flex flex-col items-center justify-center h-full px-8 text-primary-foreground text-center">

        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/15 to-transparent -z-10" />

        <h1 className="text-4xl sm:text-5xl tracking-wider font-semibold text-shadow-lg mt-32">
          Ola Padel Club
          <br />
          Court Of Simplicity
        </h1>

        <p className="text-lg sm:text-xl mt-6 max-w-md text-shadow-lg">
          Play padel like never before. Friendly matches, skill-building
          sessions, and a community that feels like family.
        </p>

        <div className="flex flex-col gap-4 mt-10 w-full max-w-fit">
          <OlaButton
            className="text-2xl"
            variant="primary"
            icon={<ArrowUpRight size={20} />}
          >
            <Link href="https://wa.me/6282225638033">Book Now</Link>
          </OlaButton>

          <OlaButton className="text-2xl" variant="outline-secondary">
            <Link href="https://wa.me/6282225638033">Learn More</Link>
          </OlaButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
