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
  metadataBase: new URL("https://fm-port-ashen.vercel.app"),

  title: "Fayçal Mebarki | Full Stack Developer & Développeur Web",

  description:
    "Fayçal Mebarki — Full Stack Developer and Développeur Web in Algeria. Specialized in Next.js, React, TypeScript, Django, WordPress, website development, création de sites web and SEO.",

  keywords: [
    // Name
    "Fayçal Mebarki",
    "Faycal Mebarki",

    // English
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "Web Development",
    "Portfolio Developer",

    // French
    "Développeur Web",
    "Développeur Full Stack",
    "Développeur Web Algérie",
    "Création site web",
    "Création de sites internet",
    "Développement web",
    "Référencement SEO",

    // Technologies
    "Next.js",
    "React",
    "TypeScript",
    "Django",
    "WordPress",
    "SEO",
  ],

  authors: [{ name: "Fayçal Mebarki" }],
  creator: "Fayçal Mebarki",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Fayçal Mebarki | Full Stack Developer",
    description:
      "Full Stack Developer and Développeur Web. Explore my portfolio, web development projects, skills and experience.",
    url: "/",
    siteName: "Fayçal Mebarki Portfolio",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
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
