import { ChooseTempFeat } from "@/features/building/ChooseTempFeat";
import Link from "next/link";
import React from "react";

const ChooseTemplate = () => {
  return (
    <div>
      <div className="z-50 w-full md:text-xl text-base select-none font-urbanist font-semibold text-secondaryColor flex justify-between items-center fixed top-0 left-0 md:px-12 px-8 md:py-4 py-2 bg-bgColor">
        <Link href="/">Next Resume</Link>
      </div>
      <ChooseTempFeat />
    </div>
  );
};

export default ChooseTemplate;
