// app/fonts.ts
import { Urbanist, Jost } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});
