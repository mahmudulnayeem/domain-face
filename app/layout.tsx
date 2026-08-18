import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Mahmudul Hasan Nayeem",
  description: "Domain face of www.madebynayeem.com",
  metadataBase: new URL("https://madebynayeem.com/"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mahmudul Hasan Nayeem",
    description:
      "Experienced remote front-end developer based in Dhaka, Bangladesh, specializing in the latest technologies. Passionate about learning new skills and sharing knowledge with the tech community.",
    images: ["/me.png"],
    siteName: "Domain face of www.madebynayeem.com",
    locale: "en_US",
    type: "website",
    url: "https://madebynayeem.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmudul Hasan Nayeem",
    description:
      "Experienced remote front-end developer based in Dhaka, Bangladesh, specializing in the latest technologies. Passionate about learning new skills and sharing knowledge with the tech community.",
    creator: "@yay_nayeem",
    images: ["/me.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: "/me.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: "/me.png",
  },
  other: {
    "google-site-verification": "google_verification_code_here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Performance optimization for Google AdSense */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2346352153674611"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
