import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LucienneWordmark from "@/ui/LucienneWordmark";
import Header from "@/components/Header";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucienne Studio",
  description: "Lucienne Studio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <LucienneWordmark />
      </body>
    </html>
  );
}