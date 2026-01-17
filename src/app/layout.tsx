import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import AppBanner from "./components/AppBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4F39F6",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Escribo - Interactive Storytelling Through QR-Coded Apparel",
  description: "Escribo connects physical clothing with digital stories. Scan QR codes on apparel, claim items, write your story, and share your journey with others.",
  keywords: ["Escribo", "QR code apparel", "interactive storytelling", "digital fashion", "story sharing", "clothing stories"],
  authors: [{ name: "Escribo" }],
  creator: "Escribo",
  publisher: "Escribo",
  applicationName: "Escribo",
  generator: "Next.js",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Escribo",
    statusBarStyle: "black-translucent",
  },
  // Native Apple Smart App Banner for iOS Safari
  itunes: {
    appId: "YOUR_APP_ID", // Replace with your actual App ID
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://escribo.ai",
    siteName: "Escribo",
    title: "Escribo - Interactive Storytelling Through QR-Coded Apparel",
    description: "Scan QR codes on apparel, claim items, write your story, and share your journey.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Escribo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escribo - Interactive Storytelling Through QR-Coded Apparel",
    description: "Scan QR codes on apparel, claim items, write your story, and share your journey.",
    images: ["/icon-512.png"],
  },
  colorScheme: "light",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppBanner />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
