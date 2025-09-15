"use client";
import { useAppStore } from "@/store/appStore";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme } = useAppStore();

  return (
    <div
      className={`mt-7 ${
        theme === "dark" ? "text-white" : "text-black"
      } relative w-full h-[200px] sm:h-64 md:h-80 lg:h-96 xl:h-[500px]`}
    >
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
