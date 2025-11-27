import OlaButton from "@/Components/Button/Button";
import Image from "next/image";
import Stepper from "./Stepper";

const HowtoJoin = () => {
  return (
    <div className="relative h-screen bg-primary-foreground flex mx-24">
      <div className="flex flex-row my-auto gap-30">
        <div className="flex flex-col items-start">
          <div className="flex flex-row">
            <OlaButton className="text-3xl" variant="number" size={68}>
              3
            </OlaButton>
            <OlaButton className="text-2xl" variant="outline">
              How To Join
            </OlaButton>
          </div>
          <h2 className="text-primary text-5xl mt-6 mb-4">
            How to Join Our Communities
          </h2>
          <p className="text-lg tracking-wide text-foreground mb-20">
            Join a calm, focused community built around the pure love of padel.
          </p>
          <div className="flex flex-col gap-6">
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
        <div className="relative w-[900px] h-[550px] overflow-hidden rounded-3xl mt-[7%]">
          <Image src="/Court1.png" alt="Background" fill loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default HowtoJoin;
