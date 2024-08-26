"use client";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ResumeData {
  templateName: "classic" | "twoCol" | "";
  colorTheme: {
    color: string;
    ring: string;
  };
  fontType: string;
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const defaultResumeData: ResumeData = {
  templateName: "",
  colorTheme: { color: "", ring: "" },
  fontType: "",
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  useEffect(() => {
    if (
      resumeData.templateName == "" &&
      localStorage.getItem("NextResumeData")
    ) {
      const data = JSON.parse(localStorage.getItem("NextResumeData") || "");
      const { template } = data;
      setResumeData({
        ...data,
        template: templatesData[template as keyof TemplatesDataTypes],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResumeContext must be used within a ResumeProvider");
  }
  return context;
};
