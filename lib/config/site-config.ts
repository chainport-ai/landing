import { Rocket } from "lucide-react";
import { APP_URL } from "./constants";

export const siteConfig = {
  global: {
    url: "https://chainport.pro",
    name: "Chainport",
    logo: "/images/logo.svg",
    title: "Chainport | Launch your next project faster with AI",
    description:
      "Chainport provide AI-powered web development boilerplate to help you build your next project faster.",
    keywords: [
      "AIGC",
      "AI",
      "Web development",
      "Chatgpt",
      "GPT-4",
      "OpenAI",
      "Shipfast",
    ],
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
        label: "Get Shipped",
        href: "/pricing",
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
        { label: "Get Shipped", icon: Rocket, href: "/pricing" },
        // {
        //   label: "Contact us",
        //   href: "mailto:wanjun@chainport.pro",
        // },
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
      headline: "You don't need to\n **code everything** yourself.",
      features: [
        {
          title: "AI Integration",
          description:
            "Out-of-the-box integration with OpenAI's GPT-4 to generate code based on your requirements.",
          image: "/images/features/openai.svg",
          items: ["AI Chat", "AI Code Generation", "AI-enabled text editor"],
          label: "24 hours saved",
        },
        {
          title: "Web Development",
          description:
            "Next14 project setup with Landing page, Blog, and Document pages. Tailwind CSS, TypeScript, ESLint, Prettier, and Husky pre-configured.",
          image: "/images/features/nextjs.svg",
          items: [
            "Landing Page",
            "Document Page",
            "Authentication",
            "Database",
          ],
          label: "40 hours saved",
        },
        {
          title: "Stripe",
          description:
            "Integration with Stripe Checkout and the Stripe customer portal, Automatic syncing of pricing plans and subscription statuses via Stripe webhooks",
          image: "/images/features/stripe.svg",
          items: [
            "Stripe Checkout",
            "Stripe Customer Portal",
            "Stripe Webhooks",
          ],
          label: "6 hours saved",
        },
        {
          title: "Marketing",
          description:
            "SEO optimization, Analytics, Email marketing, and Social media sharing. Boost your website traffic and increase your sales.",
          image: "/images/features/marketing.svg",
          items: [
            "SEO Optimization",
            "Posthog Analytics",
            "Resend Email",
            "Social Media Bento",
          ],
          label: "15 hours saved",
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
        "Start building your next project with Chainport. No credit card required.",
      cta: {
        label: "Get Shipped",
        href: "/pricing",
      },
    },
  },
  pricingPage: {
    headline: "Simple pricing.",
    subheadline:
      "Use chainport for free. Upgrade to enable custom domains and more advanced features.",
    pricingPlans: [
      {
        featured: true,
        name: "Startup Boilerplate",
        price: { oneTime: "$99" },
        billing: "One Time Payment",
        description: "Perfect for small / medium sized businesses.",
        href: APP_URL,
        features: [
          "Next.js 14",
          "Email integrations",
          "Magic link sign up",
          "Workspace support",
          "Markdown-based blog",
          "Animated UI Components",
          "Email & Password sign up",
          "Stripe payments",
          "Social logins (Google, Apple, 60+ more)",
          "Lifetime updates",
        ],
      },
      {
        name: "Pro Boilerplate",
        price: { oneTime: "$149" },
        billing: "One Time Payment",
        description: "For even the biggest enterprise companies.",
        href: APP_URL,
        features: [
          "Everything from the Startup Boilerplate",
          "React Chrome Extension Boilerplate",
          "Extension authentication",
          "Push UI into web pages",
          "Read content from web pages",
          "Installation welcome page",
          "Background & Content script",
          "Discord community ✨",
          "Lifetime updates",
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
          "Chainport is pay once, launch unlimited products. No hidden fees.",
      },
    ],
    cta: {
      headline: "Ready to get started?",
      subheadline:
        "Start building your next project with Chainport. No credit card required.",
      cta: {
        label: "Get Shipped",
        href: "mailto:wanjun@chainport.pro",
      },
    },
  },
  blogPage: {
    headline: "Blog",
    subheadline: "Learn more about Chainport and write your posts with MDX.",
  },
};
