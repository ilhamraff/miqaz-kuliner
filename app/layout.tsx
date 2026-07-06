import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miqazkuliner.vercel.app"),

  title: {
    default:
      "Miqaz Nusantara Kuliner — Premium Frozen Fish Culinary from Indonesia",
    template: "%s | Miqaz Nusantara Kuliner",
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
    title: "Miqaz Nusantara Kuliner — Premium Frozen Fish Culinary",
    description:
      "Premium frozen seafood crafted with authentic Indonesian recipes, fresh fish, and frozen-fresh technology.",
    url: "https://miqazkuliner.vercel.app",
    siteName: "Miqaz Nusantara Kuliner",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Miqaz Nusantara Kuliner — Premium Frozen Fish Culinary",
    description:
      "Premium frozen seafood crafted with authentic Indonesian recipes, fresh fish, and frozen-fresh technology.",
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
        playfair.variable
      )}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}