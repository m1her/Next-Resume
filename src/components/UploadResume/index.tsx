import { useResumeContext } from "@/context/ResumeContext";
import { textParsing } from "@/utils/textParsing";
import React, { useState, ChangeEvent } from "react";

export const UploadResume: React.FC = () => {
  const { setResumeData } = useResumeContext();
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleUpload(e.target.files[0]);
    }
  };

  const handleUpload = async (file: File) => {
    if (!file) {
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/parseresume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const { email, website, phone, location, name, job, summary, skills } =
        textParsing(result.text);
      setResumeData((prev) => ({
        ...prev,
        email,
        website,
        phone,
        location,
        name,
        job,
        summary,
        skills,
      }));
      
    } catch (error) {
      `Error: ${error instanceof Error ? error.message : "Unknown error"}`;
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="resume-upload"
      />
      <label
        htmlFor="resume-upload"
        className="w-full bg-secondaryColor text-black px-4 py-2 rounded text-center font-bold font-urbanist shadow-[INSET_0_0_6px_1px_rgba(255,255,255,0.6)] hover:bg-[#fcb72f] hover:shadow-[INSET_0_0_6px_1px_rgba(245,158,11,1)] cursor-pointer transition-all duration-300"
      >
        {uploading ? "Uploading..." : "UPLOAD"}
      </label>
    </div>
  );
};
