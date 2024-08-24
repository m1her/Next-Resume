"use client";
import { ClassicTemplate } from "@/features/ResumeTemplates/ClassicTemplate";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ResumeData {
  template: ReactNode;
  templateName: "classic" | "twoCol";
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
  template: <ClassicTemplate />,
  templateName: "classic",
  colorTheme: { color: "#000000", ring: "ring-black" },
  fontType: "font-notoserifgeorgian",
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

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
