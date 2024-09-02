import { textParsing } from "@/utils/textParsing";
import React, { useState, ChangeEvent, MouseEvent } from "react";

export const UploadResume: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus("No file selected");
      return;
    }

    setUploading(true);
    setUploadStatus("");

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
      if (result.error) {
        setUploadStatus(`Error: ${result.error}`);
      } else {
        setUploadStatus("Upload successful!");
        console.log(textParsing(result.text));
      }
    } catch (error) {
      setUploadStatus(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
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
      {file && (
        <button
          onClick={handleUpload}
          className="w-full mt-2 bg-primaryColor text-white px-4 py-2 rounded text-center font-bold hover:bg-primaryColorDark transition-all duration-300"
        >
          Submit
        </button>
      )}
      {uploadStatus && (
        <p className="mt-2 text-center text-red-500">{uploadStatus}</p>
      )}
    </div>
  );
};
