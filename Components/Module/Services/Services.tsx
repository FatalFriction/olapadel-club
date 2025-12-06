import OlaButton from "@/Components/Button/Button";
import CardContainer from "./CardContainer";

const Services = () => {
  return (
    <div className="relative h-screen bg-primary flex max-lg:h-auto">
      <div className="mx-24 my-auto max-xl:mx-16 max-lg:mx-10 max-md:mx-6 max-sm:mx-4 w-full">
        <div className="flex flex-col items-start w-full">

          <div className="flex flex-row w-[280px] max-md:w-full max-md:justify-center max-sm:mt-15">
            <OlaButton
              className="text-3xl max-md:hidden"
              variant="number-outline"
              size={68}
            >
              2
            </OlaButton>

            <OlaButton
              className="text-4xl max-sm:text-2xl max-md:w-[200px] max-md:h-[62px]"
              variant="outline-secondary"
            >
              <p className="px-8 py-2">Services</p>
            </OlaButton>
          </div>

          <h2 className="text-primary-foreground text-5xl my-6 max-sm:text-3xl max-md:text-4xl max-lg:text-center max-lg:w-full">
            Our Services and Activities
          </h2>

          <div className="w-full max-lg:flex max-lg:justify-center">
            <CardContainer />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
