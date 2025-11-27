interface StepperProps {
  step: string;
  title: string;
  description: string;
  active?: boolean;
  stepSpacing?: number
}

const Stepper = ({
  step,
  title,
  description,
  active = false,
  stepSpacing,
}: StepperProps) => {
  return (
    <div
      className="flex flex-row gap-8 group cursor-pointer"
      style={{ fontFamily: "var(--font-faculty)" }}
    >
      <p className="text-4xl text-primary" style={{ marginRight: stepSpacing ? `${stepSpacing}px` : "2rem" }}>{step}</p>

      <div className="flex flex-col gap-2 w-full">
        <p className="text-4xl">{title}</p>
        <p className="text-xl">{description}</p>

        <div className="relative max-w-[600px] w-full h-[3px] bg-primary overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full bg-primary transition-all duration-500 ${
              active
                ? "w-[40%] animate-[growPrimary_0.5s_ease-out]"
                : "w-full group-hover:w-[40%] group-hover:animate-[growPrimary_0.5s_ease-out]"
            }`}
          />

          <div
            className={`absolute right-0 top-0 h-full bg-accent transition-all duration-500 ${
              active
                ? "w-[60%] animate-[growAccent_0.5s_ease-out_0.4s_forwards]"
                : "w-0 group-hover:w-[60%] group-hover:animate-[growAccent_0.5s_ease-out_0.4s_forwards]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
