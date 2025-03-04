import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";

const plusJS = Plus_Jakarta_Sans({
  weight : '400',
  subsets : ['latin'],
  variable: "--font-plusjs"
})


export const metadata: Metadata = {
  title: "Realty Corp",
  description: "Brilliant minds behind real estate investment strategies",
  keywords: ["Real estate investment", "Leasing Strategies"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-zinc-black [&::-webkit-scrollbar-thumb]:bg-zinc-50/10 [&::-webkit-scrollbar-thumb]:rounded-full">
      <body
        className={plusJS.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
