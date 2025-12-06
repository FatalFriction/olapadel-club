interface StepperProps {
  step: string;
  title: string;
  description: string;
  active?: boolean;
  stepSpacing?: number;
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
      className="
        flex flex-row group cursor-pointer
        gap-8 max-lg:gap-6 max-md:gap-4 max-sm:gap-3
      "
      style={{ fontFamily: "var(--font-faculty)" }}
    >
      <p
        className="
          text-4xl text-primary 
          max-lg:text-3xl 
          max-md:text-2xl 
          max-sm:text-xl
        "
        style={{
          marginRight: stepSpacing
            ? `${stepSpacing}px`
            : "2rem",
        }}
      >
        {step}
      </p>

      <div
        className="
          flex flex-col gap-2 
          min-w-[600px] 
          max-lg:min-w-[500px]
          max-md:min-w-[350px]
          max-sm:min-w-0 max-sm:w-full
        "
      >
        <p
          className="
            text-4xl 
            max-lg:text-3xl 
            max-md:text-2xl 
            max-sm:text-xl
          "
        >
          {title}
        </p>

        <p
          className="
            text-xl
            max-lg:text-lg
            max-md:text-base
            max-sm:text-sm
          "
        >
          {description}
        </p>

        <div
          className="
            relative max-w-[600px] w-full h-[3px] 
            bg-primary overflow-hidden
            max-md:max-w-[90%]
            max-sm:max-w-[80%]
          "
        >
          <div
            className={`
              absolute left-0 top-0 h-full bg-primary transition-all duration-500
              ${active ? "w-[40%]" : "w-full group-hover:w-[40%]"}
            `}
          />

          <div
            className={`
              absolute right-0 top-0 h-full bg-accent transition-all duration-500
              ${active ? "w-[60%]" : "w-0 group-hover:w-[60%]"}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
