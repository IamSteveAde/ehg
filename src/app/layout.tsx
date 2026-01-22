import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { AppContextProvider } from "../context-api/PropertyContext";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import Aoscompo from "@/utils/aos";


/* -------------------------------------
   FONT
------------------------------------- */
const dmsans = DM_Sans({ subsets: ["latin"] });

/* -------------------------------------
   METADATA — DIGITAL INCLUSION INITIATIVE
------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Equity Health Group",
    template: "%s | Equity Health Group",
  },
  description:
    "Equity Health Group is a premium, integrated healthcare group delivering world-class medical services across hospitals, diagnostics, vaccines, pharmaceuticals, and dental care — built to global standards with measurable impact at scale.",
};

/* -------------------------------------
   ROOT LAYOUT
------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Aoscompo>
              <Header />
              <NextTopLoader />
              {children}
              <Footer />
            </Aoscompo>

            

            {/* Global Chat Widget */}
            
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
