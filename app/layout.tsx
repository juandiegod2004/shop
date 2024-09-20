import { Urbanist } from 'next/font/google';
import "./globals.css";
import type { Metadata } from 'next';
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';




const urbanist = Urbanist({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: " Cubrelechos Bogota M.R",
  description: "Welcome to Cubrelechos Bogota M.R",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}




