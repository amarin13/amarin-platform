import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AMARIN — Product Architecture & Systems",
  description:
    "Designing products that scale — in code, business and impact. Product Architect & Systems Designer helping founders build scalable digital products from idea to impact.",
  keywords: [
    "Product Architecture",
    "Systems Design",
    "Strategic Engineering",
    "Startup Systems",
    "Scalable Products",
  ],
  authors: [{ name: "Amarin" }],
  openGraph: {
    title: "AMARIN — Product Architecture & Systems",
    description:
      "Designing products that scale — in code, business and impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
