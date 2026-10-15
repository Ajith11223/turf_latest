import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sporticon.in"),
  title: "SPORTICON Infra | Turf Court Construction Agency | Sports Infrastructure",
  description: "We design, build and maintain world-class sports facilities, artificial football turfs, box cricket arenas, pickleball and basketball courts across India.",
  keywords: [
    "turf court construction",
    "football turf construction",
    "box cricket arena development",
    "pickleball court builders",
    "basketball court construction",
    "sports infrastructure agency",
    "SPORTICON Infra",
    "synthetic turf India"
  ],
  authors: [{ name: "SPORTICON Infra Private Limited", url: "https://www.sporticon.in" }],
  openGraph: {
    title: "SPORTICON Infra | Turf Court Construction Agency",
    description: "Building the Future of Sports Infrastructure. 250+ Handed Over Facilities, Pan-India Reach.",
    url: "https://www.sporticon.in",
    siteName: "SPORTICON Infra",
    images: [
      {
        url: "/images/hero-turf.jpg",
        width: 1200,
        height: 630,
        alt: "SPORTICON Sports Infrastructure",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/sporticon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#06110c] text-white">
        {children}
      </body>
    </html>
  );
}
