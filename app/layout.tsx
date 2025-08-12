import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/Cursor";

export const metadata: Metadata = {
  title: "Calvin Baltazar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="antialiased overflow-x-hidden max-w-[100vw]">
        <div className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 min-h-[100dvh] overflow-x-hidden">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            {children}
            <Footer />
            <CustomCursor />
          </div>
        </div>
      </body>
    </html>
  );
}
