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

      <div className="w-full mt-8 flex justify-center gap-x-8 select-none">
        <SmallPreview>
          <ClassicTemplate />
        </SmallPreview>
        <SmallPreview>
          <ClassicTemplate />
        </SmallPreview>
      </div>
<div className="w-full h-32"></div>
      <div className="fixed bottom-0 left-0 md:p-12 p-8 bg-white flex justify-end w-full shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
        <div className="px-6 py-2 font-semibold text-lg text-white bg-secondaryColor rounded-full hover:bg-amber-500 transition-colors duration-300">Choose Template</div>
      </div>
    </div> 
  );
};
