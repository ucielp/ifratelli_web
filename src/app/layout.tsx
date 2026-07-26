import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ifratelli accesorios • Handcrafted Mediterranean Jewelry Since 1998",
  description: "Handcrafted necklaces, bracelets, earrings, anklets, and eyeglass holders by sisters Caro & María. Rooted in Rosario 1998, flourishing in El Masnou and Mallorca.",
  icons: {
    icon: "/ifratelli_logo.svg",
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
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-linen text-earth font-sans selection:bg-gold/30 selection:text-earth">
        <ShopProvider>
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
