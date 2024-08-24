import type { Metadata } from "next";
import { jost, notoserifgeorgian, roboto, urbanist } from "./fonts";
import "./globals.css";
import { ResumeProvider } from "@/context/ResumeContext";

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
      <body
        className={`${jost.variable} ${urbanist.variable} ${notoserifgeorgian.variable} ${roboto.variable}`}
      >
        <ResumeProvider>{children}</ResumeProvider>
      </body>
    </html>
  );
}
