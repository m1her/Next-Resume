"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export const TemplatesReveiw = () => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-[1/1.41] relative select-none ">
      <Image
        src={"/classic.webp"}
        alt={"classic"}
        fill
        className="border border-black/20"
        style={{
          position: "absolute",
          transition: "transform 1.5s",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transform: rotate ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      />
      <Image
        src={"/twoCol.webp"}
        alt={"twoCol"}
        fill
        className="border border-black/20"
        style={{
          position: "absolute",
          transition: "transform 1.5s",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transform: rotate ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      />
    </div>
  );
};
