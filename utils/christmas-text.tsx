"use client";
import { useEffect, useState } from "react";
import { cn } from "./helpers/class-name";
import { TypographyH4 } from "./typography";

const christmasTexts = [
  "May your holidays be merry and bright!",
  "Wishing you a season filled with love, joy, and laughter!",
  "Tis the season to spread love and cheer!",
  "Merry everything and a happy always!",
  "Here's to a season of love, harmony, and joyous moments!",
  "Wishing you and your family peace, love, and joy this Christmas.",
  "Let the spirit of Christmas warm your home with love, joy, and peace.",
  "May the magic of Christmas fill every corner of your heart and home.",
  "Have yourself a merry little Christmas!",
  "Sending warm wishes for a wonderful Christmas!",
];

function ChristmasGreetings() {
  const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % christmasTexts.length);
      setAnimationKey((prevKey) => prevKey + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <TypographyH4 key={animationKey} className={cn("mx-auto w-fit", "")}>
      <div className={cn("typewriter", "whitespace-normal")}>
        {christmasTexts[index]}
      </div>
    </TypographyH4>
  );
}

export default ChristmasGreetings;
