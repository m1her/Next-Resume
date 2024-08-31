"use client";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";

const MyTemp = () => {
  const { resumeData } = useResumeContext();

  const handleDownload = async () => {
    const downloadElement = document.getElementById("download");
    if (downloadElement) {
      const scale = 3; // Higher scale for better resolution
      const canvas = await html2canvas(downloadElement, {
        scale: scale,
        useCORS: true, // Handles cross-origin images
        scrollX: 0,
        scrollY: -window.scrollY, // Handle scrolling issue
        windowWidth: downloadElement.scrollWidth, // Ensure correct width capture
        windowHeight: downloadElement.scrollHeight, // Ensure correct height capture
      });

      const imgWidth = 595.28; // A4 width in points
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 841.89; // A4 height in points

      let pdf = new jsPDF("portrait", "pt", "a4");
      let heightLeft = imgHeight;
      let position = 0;

      while (heightLeft > 0) {
        pdf.addImage(
          canvas.toDataURL("image/png"),
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight
        );
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) {
          pdf.addPage();
        }
      }

      pdf.save("resume.pdf");
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <div className="flex items-center gap-x-4">
        <Link
          href={"/"}
          className="px-12 py-3 bg-primaryColor rounded text-white text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Home
        </Link>
        <button
          onClick={handleDownload}
          className="px-12 py-3 bg-primaryColor rounded text-white text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Download
        </button>
      </div>
      <div id="download" className="w-fit">
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </div>
    </div>
  );
};

export default MyTemp;
