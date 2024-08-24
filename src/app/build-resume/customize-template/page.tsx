import { CustomizeTempFeat } from "@/features/building/CustomizeTempFeat";
import Link from "next/link";
import React from "react";

const CustomizeTemplate = () => {
  return (
    <div>
      <div className="z-50 w-full md:text-xl text-base select-none font-urbanist font-semibold text-secondaryColor flex justify-between items-center fixed top-0 left-0 md:px-12 px-8 md:py-4 py-2 bg-bgColor">
        <Link href="/">Next Resume</Link>
      </div>
      <CustomizeTempFeat />
    </div>
  );
};

export default CustomizeTemplate;
