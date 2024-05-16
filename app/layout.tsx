import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { Suspense } from "react";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { CSPostHogProvider } from "@/app/provider";

const inter = Inter({ subsets: ["latin"] });
const display = Bricolage_Grotesque({
  weight: "600",
  variable: "--font-display",
  display: "swap",
  subsets: ["latin-ext", "latin"],
});

const config = siteConfig.global;

export const metadata: Metadata = {
  title: { default: config.title, template: `%s | ${config.name}` },
  description: config.description,
  keywords: config.keywords,
  authors: config.authors,
  creator: config.creator,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    title: config.title,
    description: config.description,
    siteName: config.name,
    images: [config.thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: [config.thumbnail],
    creator: config.twitter.creator,
  },
  metadataBase: new URL(config.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.className, display.className)}
        suppressHydrationWarning
      >
        <CSPostHogProvider>
          <div className="relative">
            {/* <Banner /> */}
            <Suspense fallback={<div className="h-[64px]" />}>
              <Header />
            </Suspense>
            <div className="min-h-[calc(100vh-64px)] pb-36">{children}</div>
            <Footer />
          </div>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
