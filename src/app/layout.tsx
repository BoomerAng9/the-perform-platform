import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import PerFormNav from "@/components/PerFormNav";
import Footer from "@/components/landing/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Per|Form \u2014 A.I.M.S. Sports Intelligence Platform",
  description:
    "The absolute source for collegiate scouting. Powered by the AGI Associated Grading Index and the A.I.M.S. neural scouting network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-800">
        <SiteHeader />
        <PerFormNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
