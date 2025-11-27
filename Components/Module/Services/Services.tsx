import OlaButton from "@/Components/Button/Button";
import CardContainer from "./CardContainer";

const Services = () => {
  return (
    <div className="relative h-screen bg-primary flex">
      <div className="mx-24 my-auto">
        <div className="flex flex-col items-start">
          <div className="flex flex-row w-[280px]">
            <OlaButton className="text-3xl" variant="number-outline" size={68}>
              2
            </OlaButton>
            <OlaButton className="text-4xl" variant="outline-secondary">
              <p className="px-8 py-2">Services</p>
            </OlaButton>
          </div>
          <h2 className="text-primary-foreground text-5xl my-6">
            Our Services and Activities
          </h2>
            <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default Services;
