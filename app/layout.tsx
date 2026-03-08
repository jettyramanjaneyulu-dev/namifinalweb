import "./globals.css";

import { Geist, Geist_Mono, Orbitron, Roboto } from "next/font/google";
import LayoutClient from "./LayoutClient";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${orbitron.variable}
          ${roboto.variable}
          bg-[#315879]
          text-[#f0f0f0]
        `}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}