import OlaButton from "@/Components/Button/Button";
import Image from "next/image";
import Stepper from "./Stepper";

const HowtoJoin = () => {
  return (
    <div className="relative h-screen bg-primary-foreground flex mx-24 max-xl:mx-16 max-lg:mx-10 max-md:mx-6 max-sm:mx-4 max-lg:h-auto">
      <div className="flex flex-row my-auto gap-30 max-lg:flex-col max-lg:gap-16 max-lg:items-center w-full">

        <div className="flex flex-col items-start max-lg:items-center w-full">
          <div className="flex flex-row max-md:w-full max-md:justify-center max-sm:mt-15">
            <OlaButton
              className="text-3xl max-md:hidden"
              variant="number"
              size={68}
            >
              3
            </OlaButton>

            <OlaButton
              className="text-2xl max-sm:text-xl max-md:w-[200px] max-md:h-[60px]"
              variant="outline"
            >
              How To Join
            </OlaButton>
          </div>

          <h2 className="text-primary text-5xl mt-6 mb-4 max-sm:text-3xl max-md:text-4xl max-lg:text-center">
            How to Join Our Communities
          </h2>

          <p className="text-lg tracking-wide text-foreground mb-20 max-sm:text-base max-lg:text-center max-lg:mb-10 max-md:w-[80%]">
            Join a calm, focused community built around the pure love of padel.
          </p>

          <div className="flex flex-col gap-6 w-full">
            <Stepper
              step="01"
              title="Choose Your Path"
              description="Select a membership or session that fits your rhythm."
              stepSpacing={44}
            />
            <Stepper
              step="02"
              title="Book Your Court"
              description="Reserve your court or training through our platform."
            />
            <Stepper
              step="03"
              title="Step onto the court"
              description="Join the game. Join the Community."
            />
            <Stepper
              step="04"
              title="Connect and Grow"
              description="Build relationships and grow through shared play."
            />
          </div>
        </div>

        <div className="relative w-[900px] h-[550px] overflow-hidden rounded-3xl mt-[7%] max-md:mb-[10%] max-lg:w-full max-lg:h-[400px] max-sm:h-[260px]">
          <Image src="/Court1.png" alt="Background" fill loading="lazy" className="object-cover" />
        </div>

      </div>
    </div>
  );
};

export default HowtoJoin;
