import React from 'react';
import { Metadata } from "next";
import Hero from './components/home/hero';
import Calculator from './components/home/calculator';
import About from './components/home/about';

import History from './components/home/history';
import Features from './components/shared/features';
import CompanyInfo from './components/home/info';
import BlogSmall from './components/shared/blog';
import DiscoverProperties from './components/home/property-option';
import Listing from './components/home/property-list';
import Testimonials from './components/home/testimonial';


export const metadata: Metadata = {
  metadataBase: new URL("https://www.designedbyced.africa"),

  title: {
    default: "DESIGNED — Experience, Excellence, Expertise",
    template: "%s | DESIGNED",
  },

  description:
    "DESIGNED is a luxury editorial magazine exploring how sound and technology shape experience — quietly, intentionally, and with restraint.",

  keywords: [
    "DESIGNED magazine",
    "AV magazine",
    "audio visual design",
    "architecture and sound",
    "experience design",
    "luxury AV",
    "architectural technology",
    "AV consulting",
    "CED Africa",
    "designed to disappear",
  ],

  openGraph: {
    title: "DESIGNED — Experience, Excellence, Expertise",
    description:
      "A luxury editorial magazine exploring how sound and technology shape experience in design-led spaces.",
    url: "https://www.designedbyced.africa",
    siteName: "DESIGNED",
    type: "website",
    images: [
      {
        url: "https://www.designedbyced.africa/og/designed-cover.jpg",
        width: 1200,
        height: 630,
        alt: "DESIGNED — Experience, Excellence, Expertise",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DESIGNED — Experience, Excellence, Expertise",
    description:
      "A luxury editorial magazine exploring how sound and technology shape experience — quietly and intentionally.",
    images: [
      "https://www.designedbyced.africa/og/designed-cover.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.designedbyced.africa",
  },
};


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      
      <DiscoverProperties />
      <Listing />
      
     
      
      
    </main>
  )
}
