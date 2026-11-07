import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OG_FALLBACK_IMAGE } from "@/lib/cloudinary";

// Self-hosted fonts (app/fonts, SIL OFL - licences alongside). next/font/google broke
// Vercel builds intermittently: Turbopack could not resolve Google's
// fonts.gstatic.com/l/font?kit=... URLs ("next/font/google queries have exactly one entry").
// Each file is subset to the Latin, Latin Extended and Vietnamese ranges Google served.
const ibmPlexSans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./fonts/ibm-plex-sans-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/ibm-plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ibm-plex-sans-700.woff2", weight: "700", style: "normal" },
  ],
});

const sourceSerif4 = localFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    { path: "./fonts/source-serif-4-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/source-serif-4-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/source-serif-4-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/source-serif-4-600-italic.woff2", weight: "600", style: "italic" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soloinvietnam.com"),
  title: "Solo in Vietnam - Travel Guides for Solo Travelers",
  description:
    "Practical travel guides for solo travelers in Vietnam. Safety tips, scam alerts, transport guides, and local insights.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Solo in Vietnam",
    title: "Solo in Vietnam - Travel Guides for Solo Travelers",
    description: "Practical travel guides for solo travelers in Vietnam. Safety tips, scam alerts, transport guides, and local insights.",
    url: "https://www.soloinvietnam.com",
    images: [{ url: OG_FALLBACK_IMAGE, width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} ${sourceSerif4.variable} antialiased`}>
        <Header />
        {children}
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KPB6Y38KYH"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KPB6Y38KYH');
          `}
        </Script>
      </body>
    </html>
  );
}
