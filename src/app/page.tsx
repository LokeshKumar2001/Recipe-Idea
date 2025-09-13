import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-7 relative w-full h-[200px] sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
      <Image
        src="/banner2.png"
        alt="Delicious food banner"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
