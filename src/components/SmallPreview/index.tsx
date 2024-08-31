import { useResumeContext } from "@/context/ResumeContext";
import React, { useState } from "react";
import Modal from "../Modal";

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
  const [previewTemplate, setPreviewTemplate] = useState(false);
  const setSelectedHandler = () => {
    if (!disableAction && defaultFont && setDefaults) {
      setResumeData((prev) => ({
        ...prev,
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
      {disableAction && (
        <div
          onClick={() => setPreviewTemplate(true)}
          className="absolute text-lg font-semibold text-white w-full h-full top-0 left-0 z-10 bg-transparent hover:bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
          Preview
        </div>
      )}
      <div className="scale-[0.27] origin-top-left absolute w-[800px]">
        {children}
      </div>
      {previewTemplate && (
        <Modal
          customStyle="p-0 rounded-0 lg:scale-100 md:scale-75 scale-[0.90] "
          onDismiss={() => setPreviewTemplate(false)}
        >
          {children}
        </Modal>
      )}
    </div>
  );
};
