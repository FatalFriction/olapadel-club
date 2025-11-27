import OlaButton from "@/Components/Button/Button";
import MasonryGrid from "./Masonry";

const items = [
  { id: 1, image: "/Coach.jpg" },
  { id: 2, image: "/Aboutcourt.png" },
  { id: 3, image: "/Coach.jpg" },
  { id: 4, image: "/Aboutcourt.png" },
  { id: 5, image: "/Aboutcourt.png" },
  { id: 6, image: "/Aboutcourt.png" },
]

const Galleries = () => {
  return (
    <div className="relative h-screen bg-primary flex">
      <div className="mx-24 my-auto">
        <div className="flex flex-col items-start w-screen">
          <div className="flex flex-row w-[280px]">
            <OlaButton className="text-3xl" variant="number-outline" size={68}>
              <p style={{ fontFamily: "var(--font-faculty)" }}>4</p>
            </OlaButton>
            <OlaButton className="text-4xl" variant="outline-secondary">
              <p className="px-8 py-2">Gallery</p>
            </OlaButton>
          </div>
          <h2 className="text-primary-foreground text-5xl my-6">
            Galleries
          </h2>
          <MasonryGrid />
        </div>
      </div>
    </div>
  );
};

export default Galleries;
