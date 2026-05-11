import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Manrope,
  Scheherazade_New,
  Source_Serif_4,
} from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import { InitialSplash } from "@/app/initial-splash";
import { NavigationProvider } from "@/components/navigation-provider";
import { NavigationLoading } from "@/components/navigation-loading";
import { ThemeController } from "@/components/theme-toggle";
import { SITE_URL } from "@/lib/site-url";
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

const quranComplex = localFont({
  src: "../../font/QPCV2.woff2",
  variable: "--font-quran-complex",
  weight: "400",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Qurai",
  url: SITE_URL,
  inLanguage: "id-ID",
  description:
    "Bedah quran per ayat dengan pendekatan kritis, non-apologis, dan fokus pada anotasi, kritik, serta konteks.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Qurai",
    template: "%s",
  },
  description:
    "Bedah quran per ayat dengan pendekatan kritis, non-apologis, dan fokus pada anotasi, kritik, serta konteks.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/qurai-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/qurai-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/qurai-favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/qurai-favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: {
      url: "/brand/qurai-favicon-180.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  openGraph: {
    title: "Qurai",
    description:
      "Bedah quran per ayat dengan pendekatan kritis, non-apologis, dan fokus pada anotasi, kritik, serta konteks.",
    url: "/",
    siteName: "Qurai",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/brand/qurai-app-icon-dark.png",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qurai",
    description:
      "Bedah quran per ayat dengan pendekatan kritis, non-apologis, dan fokus pada anotasi, kritik, serta konteks.",
    images: ["/brand/qurai-app-icon-dark.png"],
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
      suppressHydrationWarning
      className={`${manrope.variable} ${plexMono.variable} ${scheherazade.variable} ${quranComplex.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('qurai-theme')==='light'?'light':'dark';document.documentElement.classList.toggle('light-mode',t==='light');document.documentElement.classList.toggle('dark-mode',t==='dark');document.documentElement.style.colorScheme=t;}catch(e){}",
          }}
        />
      </head>
      <body suppressHydrationWarning className="dark-mode min-h-full flex flex-col">
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
