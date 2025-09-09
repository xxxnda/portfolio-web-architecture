import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "MOUL VISION - Architecture Studio",
  description: "Modern architecture studio creating innovative and sustainable designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
