import type { Metadata } from "next";
import { jost, urbanist } from "./fonts";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Next Resume",
  description: "Create Your Resume | By m1her",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${urbanist.variable}`}>
        <NavBar />
        <div className="md:pt-28 pt-20">{children}</div>
      </body>
    </html>
  );
}
