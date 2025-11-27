import Image from "next/image"

export default function ImageGrid() {
  return (
    <section className="w-full bg-[#073730]">
      <div className="grid grid-cols-3 grid-rows-2 gap-8 max-w-[1700px]">

        <div className="relative w-full h-[290px] rounded-3xl overflow-hidden">
          <Image
            src="/gallery.jpg"
            alt="Image 1"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-[290px] rounded-3xl overflow-hidden">
          <Image
            src="/gallery1.jpg"
            alt="Image 2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-full row-span-2 rounded-3xl overflow-hidden">
          <Image
            src="/gallery2.jpg"
            alt="Image 4"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-[300px] col-span-2 rounded-3xl overflow-hidden">
          <Image
            src="/gallery3.png"
            alt="Image 3"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  )
}
