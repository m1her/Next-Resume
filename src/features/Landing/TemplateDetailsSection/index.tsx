import React from "react";

export const TemplateDetailsSection = () => {
  return (
    <div className="w-full md:px-12 px-8">
      <div className="w-full md:p-16 p-10 font-urbanist text-white bg-gradient-to-br from-blue-800 to-primaryColor rounded-2xl grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-8">
        <div className="col-span-2 flex flex-col w-full md:gap-y-12 gap-y-6 md:items-start items-center">
          <div className="md:text-4xl text-3xl font-bold w-full">
            Impressive & HR-Approved templates to land your dream job
          </div>
          <div className="md:text-xl text-base font-semibold w-full">
            Choose one of our professional templates. You can easily change
            colors to any resume format you choose.
          </div>
          <button className="md:text-xl text-base font-semibold md:w-fit w-full px-8 md:py-4 py-3 rounded bg-white text-primaryColor hover:bg-white/95 transition-colors duration-300">
            Create My Resume
          </button>
        </div>
      </div>
    </div>
  );
};
