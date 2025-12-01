import Image from "next/image";

export function MobileImage() {

  return (
    <div className="flex justify-center">
      <Image
        src="/Court1.png"
        width={350}
        height={350}
        alt="Ola Padel Club Court"
        fetchPriority="high"
        className="object-contain rounded-4xl"
        priority
      />
    </div>
  );
}
