import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import AuroraBackground from "@/components/AuroraBackground";
import { profile } from "@/lib/data";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — AI Engineer & Full Stack Developer`,
  description: profile.blurb,
  metadataBase: new URL("https://dheerajchaubey.dev"),
  openGraph: {
    title: `${profile.name} — AI Engineer & Full Stack Developer`,
    description: profile.blurb,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer & Full Stack Developer`,
    description: profile.blurb,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <AuroraBackground />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
