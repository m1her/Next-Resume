import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const BuildingResumeFooter = ({
  handleBack,
  confCustoms,
  text,
  disabled,
  btnType = "button",
  form,
}: {
  handleBack?: () => void;
  confCustoms?: () => void;
  text: string;
  disabled?: boolean;
  btnType?: "button" | "submit" | "reset";
  form?: string;
}) => {
  return (
    <div>
      <div className="w-full h-32"></div>
      <div className="fixed z-20 bottom-0 left-0 md:px-12 py-8 px-8 bg-white flex items-center gap-x-8 justify-end w-full shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
        <div
          onClick={handleBack}
          className="text-primaryColor flex items-center gap-x-1 md:text-lg text-base hover:border-b border-primaryColor cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
          Back
        </div>
        <button
          type={btnType}
          form={form}
          onClick={confCustoms}
          disabled={disabled}
          className="px-6 py-2 font-semibold md:text-lg text-base text-white bg-secondaryColor rounded-full hover:bg-amber-500 disabled:bg-gray-500 transition-colors duration-300 cursor-pointer"
        >
          {text}
        </button>
      </div>
    </div>
  );
};
