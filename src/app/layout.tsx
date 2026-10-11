import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina Dental & Aesthetics | Best Dentist & Single-Visit CEREC Restorations",
  description: "Experience advanced digital dentistry, CEREC same-day crowns, dental implants, and pediatric care with hospital-grade sterilization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
