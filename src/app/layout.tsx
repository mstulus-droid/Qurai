import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Manrope,
  Scheherazade_New,
  Source_Serif_4,
} from "next/font/google";
import { Suspense } from "react";
import { InitialSplash } from "@/app/initial-splash";
import { NavigationProvider } from "@/components/navigation-provider";
import { NavigationLoading } from "@/components/navigation-loading";
import { ThemeController } from "@/components/theme-toggle";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Qurai",
  description:
    "Bedah quran per ayat dengan pendekatan kritis, non-apologis, dan fokus pada anotasi, kritik, serta konteks.",
  icons: {
    icon: "/brand/qurai-app-icon-dark.png",
    shortcut: "/brand/qurai-app-icon-dark.png",
    apple: "/brand/qurai-app-icon-dark.png",
  },
  openGraph: {
    title: "Qurai",
    description:
      "Bedah quran per ayat dengan pendekatan kritis, non-apologis, dan fokus pada anotasi, kritik, serta konteks.",
    images: [
      {
        url: "/brand/qurai-app-icon-dark.png",
        width: 512,
        height: 512,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${plexMono.variable} ${scheherazade.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="dark-mode min-h-full flex flex-col">
        <ThemeController />
        <Suspense fallback={null}>
          <NavigationProvider>
            <InitialSplash />
            <NavigationLoading />
            {children}
          </NavigationProvider>
        </Suspense>
      </body>
    </html>
  );
}
