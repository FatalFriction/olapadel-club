import OlaButton from "@/Components/Button/Button";
import MasonryGrid from "./Masonry";

const Galleries = () => {
  return (
    <div className="relative h-screen bg-primary flex max-lg:h-auto">
      <div className="mx-24 my-auto max-w-[1600px] 
        max-xl:mx-16 max-lg:mx-10 max-md:mx-6 max-sm:mx-4 w-full">
        
        <div className="flex flex-col items-start w-full max-lg:items-center">
          
          <div className="flex flex-row max-w-[280px] max-sm:mt-10 max-lg:justify-center max-lg:w-full">
            <OlaButton
              className="text-3xl max-sm:hidden"
              variant="number-outline"
              size={68}
              data-size-sm={52}
              data-size-md={60}
              data-size-lg={68}
            >
              <p style={{ fontFamily: "var(--font-faculty)" }}>4</p>
            </OlaButton>

            <OlaButton
              className="text-4xl max-sm:text-2xl max-md:w-[200px] max-md:h-[62px]"
              variant="outline-secondary"
            >
              <p className="px-8 py-2">Gallery</p>
            </OlaButton>
          </div>

          <h2 className="text-primary-foreground text-5xl my-6 
            max-lg:text-center max-sm:text-3xl max-md:text-4xl">
            Galleries
          </h2>

          <div className="w-full max-lg:flex max-lg:justify-center">
            <MasonryGrid />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Galleries;
