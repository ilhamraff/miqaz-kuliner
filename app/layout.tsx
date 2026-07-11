import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miqazkuliner.vercel.app"),

  title: {
    default:
      "Miqaz Kuliner Nusantara",
    template: "%s | Miqaz Kuliner Nusantara",
  },

  description:
    "Olahan Ikan Premium dengan Resep Autentik Khas Nusantara",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  keywords: [
    "pempek premium",
    "otak-otak panggang",
    "rendang abon ikan",
    "frozen food Indonesia",
    "kuliner nusantara",
    "Miqaz",
    "seafood premium",
    "halal frozen food",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
  title: "Miqaz Kuliner Nusantara",
  description:
    "Olahan Ikan Premium dengan Resep Autentik Khas Nusantara",
  url: "https://miqazkuliner.vercel.app",
  siteName: "Miqaz Kuliner Nusantara",
  locale: "id_ID",
  type: "website",

  images: [
    {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Miqaz Kuliner Nusantara",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: "Miqaz Kuliner Nusantara",
  description:
    "Olahan Ikan Premium dengan Resep Autentik Khas Nusantara",

  images: ["/images/og-image.png"],
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
      className={cn(
        "h-full antialiased",
        poppins.variable,
        montserrat.variable
      )}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}