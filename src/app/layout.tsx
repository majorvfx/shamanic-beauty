import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"], // Including ExtraLight (200) as per guidelines
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Including Light (300) for headlines
});

export const metadata: Metadata = {
  title: "Phoenix Rising | Life Coach & Transformation Mentor",
  description: "Experience the Alchemy of Divine Femininity. Premium transformation coaching for the modern high-achiever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${montserrat.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
