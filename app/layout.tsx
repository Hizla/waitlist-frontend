import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import QueryProvider from "./query-provider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Hizla - Waitlist",
  description: "Hizla, the opensource link shortener.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibm.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <QueryProvider>
          <Header />
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
