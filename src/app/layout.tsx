import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
//
import { Metadata } from "next";
import localFont from "next/font/local";
//
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Toaster } from "@/components/ui/toaster";
//
const california = localFont({
  src: "../../public/fonts/TheCaliforniaSerif.woff2",
  display: "swap",
  variable: "--font-california",
  weight: "400",
});
const gillRegular = localFont({
  src: "../../public/fonts/GillSansC-Regular.woff2",
  display: "swap",
  variable: "--font-gill-regular",
  weight: "400",
});
const gillBold = localFont({
  src: "../../public/fonts/GillSansC-Bold.woff2",
  display: "swap",
  variable: "--font-gill-bold",
  weight: "700",
});
const gillLight = localFont({
  src: "../../public/fonts/GillSansLightC.woff2",
  display: "swap",
  variable: "--font-gill-light",
  weight: "300",
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Oushn",
    template: "%s | Oushn",
  },
  description:
    "We’re Oushn, an animation and motion design studio from Ukraine, working worldwide. We create bright explainers, illustrations and cool animated content for brands with focus on storytelling and emotions. We do all cycle of animation production - from idea to last details in sound design",
  robots: "noindex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${california.variable} ${gillLight.variable} ${gillRegular.variable} ${gillBold.variable}`}
    >
      <body className="relative font-Gill text-lg text-dark-sienna">
        <Header />

        <main>{children}</main>

        <Toaster />

        <Footer />
      </body>
    </html>
  );
}
