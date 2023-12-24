"use client";

import { cn } from "@/utils/helpers/class-name";
import { useState } from "react";
import pepperMint from "@/public/peppermint.png";
import Image from "next/image";

export function JingleBells() {
  const [play, setPlay] = useState(false);

  function togglePlay() {
    setPlay((prev) => !prev);
  }

  return (
    <>
      <button
        onClick={togglePlay}
        className="absolute flex items-center w-[5.2rem] h-8 px-1 bg-pink-100 rounded-full shadow-inner shadow-pink-300 top-2 right-2"
      >
        <Image
          alt="Pepper mint"
          src={pepperMint}
          height={28}
          width={28}
          className={cn(
            "relative z-10 transition-all duration-300",
            play ? "translate-x-[170%] rotate-90" : "rotate-0 translate-x-0"
          )}
        />
        <small
          className={cn(
            "absolute left-0 overflow-hidden text-xs text-pink-400 pointer-events-none text-end transition-all duration-300",
            play ? "w-12" : "w-0"
          )}
        >
          Sounds
        </small>
      </button>
      {play && <audio src="/jingle-bells.webm" autoPlay loop />}
    </>
  );
}
