import { useResumeContext } from "@/context/ResumeContext";
import React from "react";

export const SmallPreview = ({
  children,
  isSelected,
  name,
  disableAction = false,
  defaultFont,
  defaultColors,
  setDefaults,
}: Readonly<{
  children: React.ReactNode;
  isSelected: boolean;
  name: "classic" | "twoCol";
  disableAction?: boolean;
  defaultFont?: string;
  defaultColors?: {
    color: string;
    ring: string;
  };
  setDefaults?: React.Dispatch<React.SetStateAction<any>>;
}>) => {
  const { setResumeData } = useResumeContext();

  const setSelectedHandler = () => {
    if (!disableAction && defaultFont && setDefaults) {
      setResumeData((prev) => ({
        ...prev,
        template: children,
        templateName: name,
      }));
      setDefaults({ fontType: defaultFont, colorTheme: defaultColors });
    }
  };
  return (
    <div
      onClick={setSelectedHandler}
      className={`flex-shrink-0 relative w-[218px] h-[320px] overflow-hidden border border-gray-600 ${
        disableAction ? "" : "hover:outline cursor-pointer"
      } outline-blue-500  ${isSelected ? "outline" : ""}`}
    >
      <div className="scale-[0.27] origin-top-left absolute w-[800px]">
        {children}
      </div>
    </div>
  );
};
