import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { cn, stringReplace } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type company = {
  name: string;
  logo: any;
};

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: {
    label: string;
    href: string;
  }[];
  demoVideo: {
    src: string | null;
  };
}

export const Hero = (props: HeroProps) => {
  const { headline, subheadline, cta, demoVideo } = props;
  return (
    <section className="px-6">
      <div className="z-10 flex items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Release comming soon</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <h1 className="font-display text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {headline.split("\n").map((line, index) => (
          <span key={index}>
            {stringReplace(line, /\*\*(.*?)\*\*/g, (match, index) => (
              <span key={index} className="word-animation">
                {match}
              </span>
            ))}
            <br />
          </span>
        ))}
      </h1>
      <h2 className="text-md mx-auto mb-8 mt-6 max-w-4xl text-center md:text-lg lg:text-xl">
        {subheadline}
      </h2>
      <div className="flex justify-center space-x-2 sm:space-x-4">
        {cta[0] && (
          <Link href={cta[0].href}>
            <Button size="lg" color="primary">
              {cta[0].label}
            </Button>
          </Link>
        )}
        {cta[1] && (
          <Link href={cta[1].href}>
            <Button size="lg" variant="outline" color="neutral">
              {cta[1].label}
            </Button>
          </Link>
        )}
      </div>
      {demoVideo?.src && (
        <div className="container mt-20 max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-3xl border bg-slate-800 shadow-xl ">
            <video muted autoPlay loop playsInline src={demoVideo.src} />
          </div>
        </div>
      )}
      {/* <div className="mt-28">
        <p className="text-muted-foreground text-center text-xl font-semibold">
          Backed by these companies
        </p>
        <ul
          role="list"
          className="mt-8 flex flex-wrap items-center justify-center gap-8"
        >
          {companies.map((company, index) => {
            const Logo = company.logo;
            return (
              <li key={company.name} className="">
                <Logo height={30} className="fill-muted-foreground" />
              </li>
            );
          })}
        </ul>
      </div> */}
    </section>
  );
};
