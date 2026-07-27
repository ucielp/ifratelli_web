import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { AppShell } from "@/components/layout/AppShell";

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
  title: "ifratelli accesorios • Handmade Jewelry Since 1998",
  description: "Handmade necklaces, bracelets, earrings, anklets, and eyeglass holders by sisters Caro and María. Made in Mallorca and El Masnou, Spain.",
  icons: {
    icon: "/ifratelli_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Hardcoded default G-EC3YDPD502 with environment variable override support
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-EC3YDPD502";

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-linen text-earth font-sans selection:bg-gold/30 selection:text-earth">
        <ShopProvider>
          <AppShell>
            {children}
          </AppShell>
        </ShopProvider>

        {/* Google Analytics Tag (gtag.js) for stream G-EC3YDPD502 */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
