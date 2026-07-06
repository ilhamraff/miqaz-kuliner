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
      "Miqaz Kuliner Nusantara — Premium Frozen Fish Culinary from Indonesia",
    template: "%s | Miqaz Kuliner Nusantara",
  },

  description:
    "Discover premium frozen seafood from Indonesia. Pempek Premium, Otak-Otak Panggang, and Rendang Abon Ikan — crafted with authentic recipes, fresh fish, and hygienic frozen technology.",

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
    "Premium frozen seafood crafted with authentic Indonesian recipes.",
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
    "Premium frozen seafood crafted with authentic Indonesian recipes.",

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