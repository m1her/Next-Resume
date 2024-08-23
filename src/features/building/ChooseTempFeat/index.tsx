import { SmallPreview } from "@/components/SmallPreview";
import { ClassicTemplate } from "@/features/ResumeTemplates/ClassicTemplate";
import React from "react";

export const ChooseTempFeat = () => {
  return (
    <div className="md:pt-28 pt-20 md:p-12 p-8 flex flex-col gap-y-2 items-center font-urbanist text-textColor">
      <div className="md:text-4xl text-3xl text-center font-bold ">
        Choose from our resume templates
      </div>
      <div className="md:text-2xl text-xl text-center opacity-50">
        Choose your preferred template to proceed to the next step and customize
        it
      </div>
      <div className="w-full h-[1px] bg-textColor/60"></div>
      <SmallPreview>
        <ClassicTemplate />
      </SmallPreview>
    </div>
  );
};
