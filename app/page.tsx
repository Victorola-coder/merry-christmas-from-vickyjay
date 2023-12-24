import { PageProps } from "@/.next/types/app/layout";
import { TypographyH2, TypographyH3 } from "@/utils/typography";
import { JingleBells } from "./JingleBells";
import Image from "next/image";
import caneGreen from "@/public/candy-cane-green.png";
import caneRed from "@/public/candy-cane-red.png";
import caneBalls from "@/public/cane-with-balls.png";
import candy1 from "@/public/candy-1.png";
import tree from "@/public/tree.png";
import SnowfallComponent from "@/utils/snow-fall";
import { Mountains_of_Christmas } from "next/font/google";
import { cn } from "@/utils/helpers/class-name";
import ChristmasGreetings from "@/utils/christmas-text";

const christMasFont = Mountains_of_Christmas({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function Home({ searchParams }: PageProps) {
  const name = searchParams.name ?? "to you";
  const isTobi = /tobi/i.test(name);
  const isAzrah = /azrah/i.test(name);
  const isVictor = /victor/i.test(name);
  const isSuwa = /suwa/i.test(name);
  const isNifemi = /nifemi/i.test(name);
  const isAurelius = /aurelius/i.test(name);
  const isFejiro = /fejiro/i.test(name);
  const isJia = /jia/i.test(name);
  const isKiane = /kiane/i.test(name);
  const isMuyiwa = /muyiwa/i.test(name);

  return (
    <main className="relative min-h-screen">
      <SnowfallComponent />
      <JingleBells />
      <Image
        draggable="false"
        src={caneGreen}
        height={180}
        alt="Candy Cane Green"
        className="absolute top-2"
      />
      <Image
        draggable="false"
        src={caneRed}
        height={180}
        alt="Candy Cane Green"
        className="absolute rotate-[16deg] bottom-10 right-20"
      />
      <Image
        draggable="false"
        src={caneBalls}
        height={180}
        alt="Candy Cane Green"
        className="absolute top-1/2 left-20"
      />
      <Image
        draggable="false"
        alt="candy"
        src={candy1}
        height={100}
        width={100}
        className="absolute bottom-16 right-1/2"
      />
      <Image
        draggable="false"
        alt="Christmas tree"
        className="absolute bottom-14 left-12"
        height={180}
        width={180}
        src={tree}
      />
      <section
        className={cn(
          "container p-3 mx-auto mt-32 text-center",
          christMasFont.className
        )}
      >
        <div className="relative z-20 p-6 bg-pink-100 transition-all duration-300 space-y-3 image-with-border min-h-96 rounded-md">
          <TypographyH2 className={cn("", christMasFont.className)}>
            Merry Christmas, {name}!
          </TypographyH2>
          <TypographyH3>{isAzrah && "I love you"}</TypographyH3>
          <TypographyH3>{isMuyiwa && "You're gay"}</TypographyH3>
          <TypographyH3>{isTobi && "We'd win man!"}</TypographyH3>
          <TypographyH3>{isVictor && "Write TS fraud"}</TypographyH3>
          <TypographyH3>{isAurelius && "Bitches when?"}</TypographyH3>
          <TypographyH3>{isJia && "Rust Next year! Goodluck!"}</TypographyH3>
          <TypographyH3>{isSuwa && "You're still a fraud"}</TypographyH3>
          <TypographyH3>{isFejiro && "Web3 nerd, good luck!"}</TypographyH3>
          <TypographyH3>{isNifemi && "Stay jiggy fam 🫢"}</TypographyH3>
          <TypographyH3>
            {isKiane && "Here's your christmas gift, Me!"}
          </TypographyH3>
          <TypographyH3>
            {isTobi && "React-Typescript with a lot of API's"}
          </TypographyH3>
          <ChristmasGreetings />
        </div>
      </section>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 text-xs">
        Merry Christmas!
      </div>
    </main>
  );
}
