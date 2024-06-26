import type { Metadata } from "next";
import { inter, robotoMono } from "./ui/fonts";
import Navbar from "./ui/nav-links";
import "./globals.css";




export const metadata: Metadata = {
  title: "Avi Peltz 🔨",
  description: "Avi Peltz's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <div className="backgroundContainer">
          <div className="backgroundRed"></div>
          <div className="backgroundPurple"></div>
          <div className="backgroundTeal"></div>
        </div>
        <Navbar />
        {children}
        {/* <Footer /> */}
        {/* <Analytics /> */}
        {/* <Speed /> */}
      </body>
    </html>
  );
}
