"use client";
import { EducationCard } from "@/features/building/EducationFeat/EduDataTypes";
import { ExperienceCard } from "@/features/building/ExperienceFeat/ExpDataTypes";
import { LangDataTypes } from "@/features/building/LanguagesFeat/LangDataTypes";
import { ProjectCard } from "@/features/building/ProjectsFeat/PrjDataTypes";
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
  email: string;
  job: string;
  location: string;
  name: string;
  number: string;
  website: string;
  summary: string;
  skills: string[];
  experience: ExperienceCard[];
  education: EducationCard[];
  projects: ProjectCard[];
  languages: LangDataTypes[];
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export const defaultResumeData: ResumeData = {
  templateName: "",
  colorTheme: { color: "", ring: "" },
  fontType: "",
  email: "",
  job: "",
  location: "",
  name: "",
  number: "",
  website: "",
  summary: "",
  skills: [],
  experience: [],
  education: [],
  projects: [],
  languages: [],
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
