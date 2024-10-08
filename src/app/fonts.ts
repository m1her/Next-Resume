// app/fonts.ts
import {
  Urbanist,
  Jost,
  Noto_Serif_Georgian,
  Roboto_Mono,
} from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const notoserifgeorgian = Noto_Serif_Georgian({
  subsets: ["latin"],
  variable: "--font-notoserifgeorgian",
});

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto",
});
