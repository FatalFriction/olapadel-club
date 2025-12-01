import OlaButton from "@/Components/Button/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden">
      <Image
        src="/netcourt.jpg"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div
        className="absolute inset-0 
        bg-linear-to-t
        from-foreground/30
        from-2%
        via-background/22
        via-11%
        to-background/0
        to-87%
        -z-10"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-between text-primary-foreground px-20">
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
        <div className="flex flex-col text-3xl/10  w-[40%] text-left mt-[18%] text-shadow-lg">
          <p>
            Play padel like never before <br /> friendly matches, skill building
            sessions,
            <br /> and a community that feels like family
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
    </div>
  );
};

export default Hero;
