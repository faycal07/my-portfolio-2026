import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Provider from "@/components/HighOtherComponent/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { cn } from "@/lib/utils";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const font = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin'],
});


export const metadata: Metadata = {
  title: "Fayçal Mebarki Portfolio",
  description: "Portfolio website with Next js 16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", font.className, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
        </Provider>
        </body>
    </html>
  );
}
