import OlaButton from "@/Components/Button/Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative h-screen bg-primary-foreground flex mx-24 max-lg:mx-4 max-lg:h-auto">
      <div className="flex flex-row my-auto w-full max-lg:flex-col max-lg:items-center max-lg:gap-12">
        <div className="flex flex-col items-end max-lg:items-center max-lg:w-full">
          <div className="flex flex-row w-[300px] max-lg:w-full max-lg:justify-center max-lg:justify-center max-lg:mt-15">
            <OlaButton className="text-3xl max-lg:hidden" variant="number" size={64}>
              1
            </OlaButton>
            <OlaButton
              className="text-3xl max-lg:w-[210px] max-lg:h-[62px]"
              variant="outline"
            >
              About Us
            </OlaButton>
          </div>

          <Image
            src="/OLA-Primary-VERT.png"
            alt="Background"
            width={160}
            height={160}
            priority
            className="max-lg:w-24 max-lg:h-[350px]"
          />
        </div>

        <div className="flex flex-col gap-10 h-1/2 items-center max-lg:w-full  mx-10">
          <div className="w-2/3 max-lg:w-[90%] text-center text-2xl text-foreground max-lg:text-lg">
            <p>
              Ola Padel Club is dedicated to the pure experience of padel. Built
              for precision, rhythm, and flow, every court is designed to
              enhance how the game is played.
            </p>
          </div>

          <Image
            src="/Aboutcourt.png"
            alt="Background"
            width={1000}
            height={1000}
            priority
            className="max-lg:w-[90%] max-lg:h-auto rounded-xl"
          />

          <div className="w-2/3 max-lg:w-[90%] text-center text-2xl text-foreground max-lg:text-lg">
            <p>
              Through iconic simplicity, we remove distraction and create space
              for focus, performance, and connection around the game.
            </p>
          </div>
        </div>

        <div className="right-container flex flex-col justify-evenly max-lg:items-center max-lg:mb-6">
          <div className="flex flex-col items-center">
            <p className="text-8xl text-primary tracking-widest max-lg:hidden writing-vertical-rl max-lg:text-6xl max-lg:text-4xl">
              2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
