import AOSProvider from "@/components/AOSProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NET Facilities & Properties Management Ltd | Facilities Management in Ghana",

  description:
    "NET Facilities & Properties Management Ltd provides professional facilities management, office cleaning, property maintenance, consultancy, asset management, and support services across Ghana.",

  keywords: [
    "Facilities Management Ghana",
    "Office Cleaning Ghana",
    "Property Management Ghana",
    "Cleaning Company Accra",
    "Commercial Cleaning",
    "Property Maintenance",
    "Facility Services",
    "Net Facilities",
  ],

  authors: [{ name: "NET Facilities & Properties Management Ltd" }],

  creator: "NET Facilities & Properties Management Ltd",

  openGraph: {
    title: "NET Facilities & Properties Management Ltd",

    description:
      "Professional Facilities Management, Cleaning and Property Maintenance Services across Ghana.",

    url: "https://netfacilities.com",

    siteName: "NET Facilities",

    locale: "en_GH",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col">
  <AOSProvider />

  <Navbar />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}
