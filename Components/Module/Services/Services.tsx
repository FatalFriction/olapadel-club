import OlaButton from "@/Components/Button/Button";
import CardContainer from "./CardContainer";

const Services = () => {
  return (
    <div className="relative h-full bg-primary flex max-lg:h-auto">
      <div className="mx-24 xl:my-16 max-xl:mx-16 max-lg:mx-10 w-full">
        <div className="flex flex-col items-start w-full">

          <div className="flex flex-row w-[280px] max-lg:w-full max-lg:justify-center max-lg:mt-15">
            <OlaButton
              className="text-3xl max-lg:hidden"
              variant="number-outline"
              size={68}
            >
              2
            </OlaButton>

            <OlaButton
              className="text-4xl max-lg:text-2xl max-lg:w-[200px] max-lg:h-[62px]"
              variant="outline-secondary"
            >
              <p className="px-8 py-2">Services</p>
            </OlaButton>
          </div>

          <h2 className="text-primary-foreground text-5xl my-6 max-lg:text-3xl max-lg:text-center max-lg:w-full">
            Our Services and Activities
          </h2>

          <div className="w-full max-lg:flex max-lg:justify-center max-lg:mb-15">
            <CardContainer />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
