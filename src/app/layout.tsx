import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import logo from "@images/logos/logo-blue.svg";

const california = localFont({ src: "../../public/fonts/TheCaliforniaSerif.woff2", display: "swap", variable: '--font-california', weight: '400' });
const gillRegular = localFont({ src: "../../public/fonts/GillSansC-Regular.woff2", display: "swap", variable: '--font-gill-regular', weight: '400' });
const gillBold = localFont({ src: "../../public/fonts/GillSansC-Bold.woff2", display: "swap", variable: '--font-gill-bold', weight: '700' });
const gillLight = localFont({ src: "../../public/fonts/GillSansLightC.woff2", display: "swap", variable: '--font-gill-light', weight: '300' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${california.variable} ${gillLight.variable} ${gillRegular.variable} ${gillBold.variable}`}>
      <body className="relative font-Gill text-lg text-dark-sienna">
        <Header logo={logo}></Header>

        <main>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
