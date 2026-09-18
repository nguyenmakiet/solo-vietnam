import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
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
    images: [{ url: "https://res.cloudinary.com/dl5kqhspv/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/fallback_picture", width: 1200, height: 630 }],
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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
