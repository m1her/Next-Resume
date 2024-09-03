import { useResumeContext } from "@/context/ResumeContext";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";
import { TwoColumnsExp } from "./TwoColumnsExp";
import { TwoColumnsPrj } from "./TwoColumnsPrj";

export const TwoColumnsTemplate = () => {
  const path = usePathname();
  const isDefault = path.split("/")[2] === "choose-template";
  const { resumeData } = useResumeContext();
  return (
    <div
      className={`w-full max-w-[1000px] mx-auto py-12 h-full ${
        path.split("/")[2] != "choose-template"
          ? resumeData.fontType
          : "font-roboto"
      } bg-white`}
      style={{
        color:
          resumeData.colorTheme.color == ""
            ? "#374151"
            : resumeData.colorTheme.color,
      }}
    >
      <div id="header" className="text-center border-b mx-16 border-black pb-8">
        <div className={`font-light text-6xl`}>
          {isDefault || !resumeData.name ? "Your Name" : resumeData.name}
        </div>
        <div className="text-black/80 text-2xl mt-2">
          {isDefault || !resumeData.job ? "Job Title" : resumeData.job}
        </div>
      </div>

      <div className="grid grid-cols-5 w-full">
        <div
          className="col-span-2 w-full h-full !bg-opacity-5 text-black px-16 py-8 flex flex-col gap-y-8"
          style={{
            backgroundColor:
              resumeData.colorTheme.color == ""
                ? "#37415110"
                : resumeData.colorTheme.color + "10",
          }}
        >
          <div
            id="contacts2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">CONTACT</div>
            <div className="flex gap-x-2 items-center">
              <FontAwesomeIcon icon={faMobile} className="w-5 h-5" />
              {isDefault || !resumeData.phone
                ? "+20 000 000 0000"
                : resumeData.phone}
            </div>
            <div className="flex gap-x-2 items-center break-all">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              {isDefault || !resumeData.email
                ? "my-email@example.com"
                : resumeData.email}
            </div>
            <div className="flex gap-x-2 items-center break-all">
              <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
              {isDefault || !resumeData.website
                ? "https://www.linkedin.com/in/mns21"
                : resumeData.website}
            </div>
            <div className="flex gap-x-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
              {isDefault || !resumeData.location
                ? "City, Country"
                : resumeData.location}
            </div>
          </div>

          <div
            id="skills2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">SKILLS</div>
            <div className="flex items-center gap-x-1 flex-wrap">
              {isDefault || resumeData.skills.length == 0
                ? "Skill, Skill, Skill, Skill, Skill, Skill"
                : resumeData.skills.map((skill, idx) => (
                    <div className="" key={idx}>
                      {skill},
                    </div>
                  ))}
            </div>
          </div>

          <div
            id="education2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium flex flex-col gap-y-4">
              EDUCATION
            </div>
            {isDefault || resumeData.skills.length == 0 ? (
              <div className="flex flex-col gap-y-2">
                <div className="font-medium">Education Degree</div>
                <div className="text-lg font-medium">Education University</div>
                <div>Location</div>
                <div>from date - to date</div>
              </div>
            ) : (
              resumeData?.education.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-y-2">
                  <div className="font-medium">{item.schoolDegree}</div>
                  <div className="text-lg font-medium">{item.schoolName}</div>
                  <div>{item.schoolLocation}</div>
                  <div>
                    {item.startDate} - {item.endDate}
                  </div>
                </div>
              ))
            )}
          </div>

          <div
            id="laguages2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">LANGUAGES</div>
            <div className="flex flex-col gap-y-2">
              {isDefault || resumeData?.languages.length == 0 ? (
                <>
                  <div className="flex items-center gap-x-2">
                    <div>Language : </div>
                    <div>Level</div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div>Language : </div>
                    <div>Level</div>
                  </div>
                </>
              ) : (
                resumeData?.languages.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-x-2">
                    <div>{item.language} : </div>
                    <div>{item.level}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="col-span-3 w-full h-full p-8 pr-16 flex flex-col gap-y-8">
          <div
            id="profile2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">PROFILE</div>
            <div className="text-black">
              {isDefault || !resumeData.summary
                ? `Ghjl klmno pqrs tuvwx yzabc defgh ijkl mnopqr stuvw xyzab cdefgh ijkl
          mnopqr stuvw xyzab cdefg hijkl mnopq rstuvw xyza bcd efg hij klmno
          pqrs tuvwx yzabc defgh ijkl mnop qrst uvwx yzab cdefg hijkl mnopq rst
          uvwx yzabc defghi jklmnopq rs tuvwx yzab cdefgh ijklmn opqrs tuvwx
          yzabcdefg hijkl mnopqrst uvwxy zabcde.`
                : resumeData.summary}
            </div>
          </div>

          <div
            id="experience2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">EXPERIENCE</div>
            {isDefault || resumeData.experience.length == 0 ? (
              <TwoColumnsExp />
            ) : (
              resumeData.experience.map((item, idx) => (
                <TwoColumnsExp key={idx} data={item} />
              ))
            )}
          </div>

          <div id="projects2">
            <div className="text-xl font-medium">PROJECTS</div>
            {isDefault || resumeData.projects.length == 0 ? (
              <TwoColumnsPrj />
            ) : (
              resumeData.projects.map((item, idx) => (
                <TwoColumnsPrj key={idx} data={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
