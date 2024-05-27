import React from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckCircle, TimerIcon } from "lucide-react";
import { cn, stringReplace } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface UseCasesProps {
  className?: string;
  headline: string;
  features: {
    title: string;
    description: string;
    image?: string;
    items: string[];
    label: string;
  }[];
}

export const UseCases = (props: UseCasesProps) => {
  const { features, headline, className } = props;
  return (
    <section
      className={cn(
        "container flex max-w-7xl flex-col space-y-20 md:space-y-28",
        className
      )}
    >
      <h2 className="font-display text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
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
      </h2>
      {features.map((feature, index) => (
        <UseCase
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          items={feature.items}
          label={feature.label}
          direction={index % 2 === 0 ? "row" : "reverse"}
        />
      ))}
    </section>
  );
};

interface UseCaseProps {
  title: string;
  description: string;
  image?: string;
  items: string[];
  label: string;
  direction?: "col" | "reverse" | "row";
}

const UseCase = (props: UseCaseProps) => {
  const { title, description, items, label, image, direction = "row" } = props;
  return (
    <div
      className={cn("flex flex-col-reverse items-center gap-12", {
        "md:flex-row": direction === "row",
        "md:flex-row-reverse": direction === "reverse",
        "md:flex-col-reverse md:text-center": direction === "col",
      })}
    >
      {image && (
        <Image
          alt="feature"
          height={200}
          width={200}
          src={image}
          className="h-32 object-contain"
        />
      )}
      <div>
        <h2 className="font-display text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground mt-4 text-lg">{description}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm mt-2">
              <CheckCircle size={14} className="text-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Badge className="mt-2">
          <TimerIcon size={16} className="mr-1" />
          <span>{label.toUpperCase()}</span>
        </Badge>
      </div>
    </div>
  );
};
