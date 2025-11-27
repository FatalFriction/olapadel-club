import OlaButton from "@/Components/Button/Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative h-screen bg-primary-foreground flex">
      <div className="flex flex-row my-auto">
        <div className="flex flex-col items-end">
          <div className="flex flex-row w-[300px]">
            <OlaButton className="text-3xl" variant="number" size={68}>
              1
            </OlaButton>
            <OlaButton className="text-3xl" variant="outline">
              About Us
            </OlaButton>
          </div>
          <Image
            src="/OLA-Primary-VERT.png"
            alt="Background"
            width={160}
            height={160}
            priority
          />
        </div>
        <div className="flex flex-col gap-10 h-1/2 items-center">
          <div className="w-2/3 text-center text-2xl text-foreground">
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
          />
          <div className="w-2/3 text-center text-2xl text-foreground">
            <p>
              Through iconic simplicity, we remove distraction and create space
              for focus, performance, and connection around the game.
            </p>
          </div>
        </div>
        <div className="right-container flex flex-col justify-evenly">
          <div className="flex flex-col items-center">
            <p className="writing-vertical-rl text-8xl text-primary tracking-widest">
              2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
