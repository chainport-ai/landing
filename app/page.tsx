import { Pricing } from "@/app/pricing/pricing";
import { PricingPlans } from "@/app/pricing/pricing-plans";
import { CallToAction } from "@/components/call-to-action";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { UseCases } from "@/components/use-cases";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div className="animate-in fade-in slide-in-from-top-6 pt-28 duration-500">
      <Hero
        headline={siteConfig.homePage.hero.headline}
        subheadline={siteConfig.homePage.hero.subheadline}
        cta={siteConfig.homePage.hero.cta}
        demoVideo={siteConfig.homePage.hero.demoVideo}
        // companies={siteConfig.homePage.hero.companies}
      />
      <UseCases
        className="mt-40"
        headline={siteConfig.homePage.techs.headline}
        features={siteConfig.homePage.techs.features}
      />
      <Features className="mt-40" />
      {/* <Testimonials
        headline={siteConfig.homePage.testimonial.headline}
        subheadline={siteConfig.homePage.testimonial.subheadline}
        testimonials={siteConfig.homePage.testimonial.testimonials}
      /> */}
      <Pricing className="mt-28 container max-w-5xl" />
      <CallToAction
        className="mt-20"
        headline={siteConfig.homePage.cta.headline}
        subheadline={siteConfig.homePage.cta.subheadline}
        logo={false}
        cta={siteConfig.homePage.cta.cta}
      />
    </div>
  );
}
