import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NeuralBackground from "@/components/neural-background";
import ScrollProgress from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://awazme.com"),
  title: "Automataiz – The Future of Business. Automated. | AI Business Operating System",
  description:
    "Automataiz combines Marketing, Sales, Operations, Finance and AI into one intelligent Business Operating System. Replace 15+ fragmented tools with one AI-first platform.",
  keywords: [
    "Automataiz",
    "awazme",
    "AI Business Operating System",
    "AI CRM",
    "Marketing Automation",
    "AI Workforce",
    "Business Automation India",
    "Debasish Kabi",
    "Nova AI",
    "AI SDR",
  ],
  authors: [{ name: "Debasish Kabi", url: "https://awazme.com" }],
  creator: "Automataiz",
  openGraph: {
    title: "Automataiz – The Future of Business. Automated.",
    description:
      "Automataiz brings Marketing, Sales, Operations, Finance, and AI into one connected ecosystem.",
    url: "https://awazme.com",
    siteName: "Automataiz",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Automataiz AI Business Operating System",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automataiz – The Future of Business. Automated.",
    description: "The AI-Powered Business Operating System for modern enterprises.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SF2V2QDXVR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SF2V2QDXVR');
            `,
          }}
        />
      </head>
      <body className="bg-[#050505] text-white min-h-screen flex flex-col relative selection:bg-brand-green selection:text-black">
        {/* Top Scroll Laser Beam */}
        <ScrollProgress />

        {/* Background Neural Canvas */}
        <NeuralBackground />

        {/* Global Floating Glass Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 relative z-10">{children}</main>

        {/* Global Luxury Footer */}
        <Footer />
      </body>
    </html>
  );
}
