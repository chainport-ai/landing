import { APP_URL } from "./constants";

export const siteConfig = {
  global: {
    url: "https://chainport.pro",
    name: "Chainport",
    logo: "/images/logo.svg",
    title: "Chainport | AI-prowered web development platform",
    description:
      "Chainport provide AI-powered web development platform to help you build your next project faster.",
    keywords: ["AIGC", "AI", "Web development", "Chatgpt", "GPT-4", "OpenAI"],
    authors: [
      {
        name: "jotyy",
        url: "https://jotyy.vercel.app",
      },
    ],
    creator: "jotyy",
    thumbnail: "/images/og-image.png",
    twitter: {
      creator: "@jotyy3",
    },
  },
  header: {
    nav: {
      links: [
        { href: "/pricing", label: "Pricing" },
        { href: "/blog", label: "Blog" },
      ],
    },
    cta: {
      primary: {
        label: "Join the waitlist",
        href: "/waitlist",
      },
    },
  },
  footer: {
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Blog",
        href: "/blogs",
      },
      {
        label: "Pricing",
        href: "/pricing",
      },
    ],
    socialLinks: {
      twitter: "https://twitter.com/chainport",
      github: "https://github.com/chain-port",
      linkedin: "https://www.linkedin.com/chainport",
      mail: "mailto:wanjun@chainport.com",
    },
  },
  homePage: {
    hero: {
      headline: "**AI-powered**\n Web Development Platform",
      subheadline:
        "Chainport provide AI-powered web development platform to help you build your next project faster.",
      cta: [
        { label: "Join the waitlist", href: APP_URL },
        {
          label: "Contact us",
          href: "mailto:wanjun@chainport.pro",
        },
      ],
      demoVideo: {
        src: null,
      },
      // companies: [
      //   { name: "Vercel", logo: VercelLogo },
      //   { name: "Pioneer", logo: PioneerLogo },
      //   { name: "Y Combinator", logo: YCombinatorLogo },
      //   { name: "Next.js", logo: NextLogo },
      //   { name: "Prisma", logo: PrismaLogo },
      // ],
    },
    techs: {
      headline: "What We are **Using**",
      features: [
        {
          title: "ChatGPT",
          description:
            "ChatGPT is a large language model trained to generate human-like responses to given conversational prompts.",
          image: "/images/features/openai.svg",
          cta: {
            label: "See more",
            href: "#",
          },
        },
        {
          title: "Next.js",
          description:
            "Explore the latest Next.js 14 features: App dir, Routing, Layouts, Loading UI, API routes, Server components, Server actions, and more.",
          image: "/images/features/nextjs.svg",
          cta: {
            label: "See more",
            href: "#",
          },
        },
        {
          title: "Stripe",
          description:
            "Integration with Stripe Checkout and the Stripe customer portal, Automatic syncing of pricing plans and subscription statuses via Stripe webhooks",
          image: "/images/features/stripe.svg",
          cta: {
            label: "See more",
            href: "#",
          },
        },
      ],
    },
    testimonial: {
      headline: "Our Customers **Love** us",
      subheadline: "",
      testimonials: [
        {
          content:
            "Consectetur adipiscing elit. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. diam quis accumsan fermentum, odio nibh ultricies odio. ut odio. fusce nec diam et dolor efficitur aliquam.",
          href: "https://www.ahmedbk.com",
          author: {
            name: "Ahmed BK",
            role: "Sr front-end developer at ispoke.to",
            avatar: "https://github.com/ahmedbenkhalifa.png",
          },
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. ut odio. fusce nec diam et dolor efficitur aliquam. aenean euismod, diam quis accumsan fermentum, odio nibh ultricies odio, ut odio. fusce nec diam et dolor efficitur aliquam. aenean euismod. ",
          href: "https://figitma.com",
          author: {
            name: "Hamza Bouissa",
            role: "Founder of Figitma",
            avatar: "https://github.com/hamzabouissi.png",
          },
        },
        {
          content:
            "Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. Dielit. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies od. ut odio. fusce nec diam et dolor efficitur aliquam. aenean euismod, diam quis accumsan.",
          href: "https://www.iyed.dev",
          author: {
            name: "Iyed",
            role: "Passionate developer",
            avatar:
              "https://www.iyed.dev/_next/image?url=%2Fimages%2Favatar.png&w=256&q=75",
          },
        },
      ],
    },
    cta: {
      headline: "Ready to get started?",
      subheadline:
        "Pre-order today and get a 50% discount on the final price for the first 3 months. No credit card required.",
      cta: {
        label: "Pre-order now",
        href: "mailto:wanjun@chainport.pro",
      },
    },
  },
  pricingPage: {
    headline: "Simple pricing.",
    subheadline:
      "Use chainport for free. Upgrade to enable custom domains and more advanced features.",
    pricingPlans: [
      {
        name: "Free",
        price: { monthly: "$0", yearly: "$0" },
        description: "Good for getting started.",
        href: APP_URL,
        features: [
          "Free hosting on 'chainport.pro'",
          "Optimized SEO",
          "Has 'Built with Chainport' branding",
        ],
      },
      {
        featured: true,
        name: "Pro",
        price: { monthly: "$29", yearly: "$25" },
        billing: "per month",
        description: "Perfect for small / medium sized businesses.",
        href: APP_URL,
        features: [
          "Everything in Free.",
          "Basic analytics",
          "Remove 'Built with Chainport' branding",
        ],
      },
      {
        name: "Entreprise",
        price: { monthly: "$99", yearly: "$90" },
        billing: "per month",
        description: "For even the biggest enterprise companies.",
        href: APP_URL,
        features: [
          "Everything in Personal site.",
          "Advanced analytics",
          "Priority support",
        ],
      },
    ],
    faq: [
      {
        question: "How does chainport works?",
        answer:
          "Chainport uses GPT-4 to generate code based on your requirements.",
      },
      {
        question: "How do I create a website with chainport?",
        answer:
          "You can create a website with chainport by following the documentation.",
      },
      {
        question: "How much does chainport cost?",
        answer:
          "Chainport is free to use. You can upgrade to Pro for $19/month.",
      },
      {
        question: "Can I use chainport for free?",
        answer: "Yes, you can use chainport for free.",
      },
    ],
    cta: {
      headline: "Ready to get started?",
      subheadline:
        "Pre-order today and get a 50% discount on the final price for the first 3 months. No credit card required.",
      cta: {
        label: "Pre-order now",
        href: "mailto:wanjun@chainport.pro",
      },
    },
  },
  blogPage: {
    headline: "Blog",
    subheadline: "Learn more about Chainport and write your posts with MDX.",
  },
};
