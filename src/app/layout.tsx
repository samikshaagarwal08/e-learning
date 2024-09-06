import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Learning",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f6f8f7]">
      <body className="bg-[#f6f8f7]">
        <>
          <Header/>
          {children}
          <Footer/>
        </>
      </body>
    </html>
  );
}
