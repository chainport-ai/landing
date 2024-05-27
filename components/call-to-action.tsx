import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn, stringReplace } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

interface CallToActionProps {
  logo?: boolean;
  headline: string;
  subheadline: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
}

export const CallToAction = (props: CallToActionProps) => {
  const { logo = true, headline, subheadline, cta, className } = props;
  return (
    <section className={cn("mx-auto max-w-xl px-6 text-center", className)}>
      {logo && (
        <Image
          src={siteConfig.global.logo}
          alt={siteConfig.global.name}
          loading="lazy"
          width={80}
          height={80}
          className="mx-auto mb-12"
        />
      )}
      <h2 className="font-display text-4xl font-semibold sm:text-5xl">
        {stringReplace(headline, /\*\*(.*?)\*\*/g, (match, index) => (
          <span key={index} className="word-animation">
            {match}
          </span>
        ))}
      </h2>
      <p className="text-muted-foreground mt-4">{subheadline}</p>
      <Link href={cta.href}>
        <Button size="lg" className="mt-8">
          {cta.label}
        </Button>
      </Link>
    </section>
  );
};
