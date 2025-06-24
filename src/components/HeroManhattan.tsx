"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config/schoolConfig";

const { theme } = siteConfig

const { accentColor } = theme

export default function HeroManhattan() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/hero.webp"
        alt="Manhattan School of Music"
        fill
        priority
        className="object-cover object-center"
      />
      
      <div className="absolute inset-0 px-[10vw] pt-[10vh]">
        <div className="relative">
          <span className={`text-[40vw] font-bold ${accentColor} opacity-60 leading-none select-none block`}>
            M
          </span>
          <h1 className="absolute max-w-xl top-[40%] left-[20%] text-white text-4xl md:text-6xl font-serif leading-snug drop-shadow-xl drop-shadow-black">
            Those who excel reach the stars
          </h1>
        </div>
      </div>
    </section>
  );
}
