import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full text-xl select-none font-urbanist font-semibold text-secondaryColor flex justify-between items-center fixed top-0 left-0 px-12 py-4 bg-bgColor">
      <div>Next Resume</div>
      <button className="bg-gradient-to-r from-primaryColor to-indigo-600 px-6 py-3 rounded text-transparent hover:text-white bg-clip-text hover:bg-clip-padding relative transition-all duration-300">
        Build My Resume
        <div className="bg-gradient-to-r from-primaryColor to-indigo-600 w-full h-full p-[1px] absolute top-0 left-0 rounded-[5px] -z-10">
          <div className="bg-bgColor w-full h-full rounded"></div>
        </div>
      </button>
    </div>
  );
};
