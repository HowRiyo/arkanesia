import { Raleway, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "ArkaNesia",
  description: "ArkaNesia bawa kamu menyelami warisan budaya dan tradisi yang penuh arti.", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${manrope.variable} antialiased`}
      >
        <Nav/>
        <main className="mx-auto min-h-screen max-w-6xl py-20 px-10 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
