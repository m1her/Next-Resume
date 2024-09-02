import React, { forwardRef } from "react";
import { useResumeContext } from "@/context/ResumeContext";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { ClassicTempExp } from "./ClassicTempExp";
import { ClassicTempEdu } from "./ClassicTempEdu";

export const ClassicTemplate = () => {
  const path = usePathname();
  const isDefault = path.split("/")[2] === "choose-template";
  const { resumeData } = useResumeContext();

  return (
    <div
      id="my-temp"
      className={`w-full max-w-[800px] mx-auto p-8 ${
        path.split("/")[2] !== "choose-template"
          ? resumeData.fontType
          : "font-notoserifgeorgian"
      } bg-white`}
      style={{
        color:
          resumeData.colorTheme.color === ""
            ? "#1f4e79"
            : resumeData.colorTheme.color,
      }}
    >
      <div id="header" className="text-center">
        <div className="font-bold text-4xl">
          {isDefault || !resumeData.name ? "Your Name" : resumeData.name}
        </div>
        <div className="opacity-60 font-semibold text-xl mt-2">
          {isDefault || !resumeData.job ? "Job Title" : resumeData.job}
        </div>
        <div className="w-full flex justify-center">
          <div className="mt-4 text-black text-base flex justify-center gap-x-2 w-[500px] flex-wrap">
            <div>
              {isDefault || !resumeData.phone
                ? "+20 000 000 0000"
                : resumeData.phone}
            </div>
            |
            <div>
              {isDefault || !resumeData.email
                ? "my-email@example.com"
                : resumeData.email}
            </div>
            |
            <div>
              {isDefault || !resumeData.location
                ? "City, Country"
                : resumeData.location}
            </div>
            |
            <div>
              {isDefault || !resumeData.website
                ? "https://www.linkedin.com/in/mns21"
                : resumeData.website}
            </div>
          </div>
        </div>
      </div>

      <div id="summary" className="mt-12">
        <div className="font-semibold text-lg border-b-2 pb-2 border-black">
          Summary
        </div>
        <div className="mt-2 text-black text-justify">
          {isDefault || !resumeData.summary
            ? `Ghjl klmno pqrs tuvwx yzabc defgh ijkl mnopqr stuvw xyzab cdefgh ijkl
          mnopqr stuvw xyzab cdefg hijkl mnopq rstuvw xyza bcd efg hij klmno
          pqrs tuvwx yzabc defgh ijkl mnop qrst uvwx yzab cdefg hijkl mnopq rst
          uvwx yzabc defghi jklmnopq rs tuvwx yzab cdefgh ijklmn opqrs tuvwx
          yzabcdefg hijkl mnopqrst uvwxy zabcde.`
            : resumeData.summary}
        </div>
      </div>

      <div id="skills" className="mt-8">
        <div className="font-semibold text-lg border-b-2 pb-2 border-black">
          Skills
        </div>
        <div className="mt-4 text-black grid grid-cols-3 gap-x-8">
          {isDefault || !resumeData.skills
            ? ["Skill", "Skill", "Skill", "Skill", "Skill", "Skill"].map(
                (skill, idx) => (
                  <div className="flex items-center" key={idx}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 w-4 h-4 mr-2"
                    />
                    {skill}
                  </div>
                )
              )
            : resumeData.skills.map((skill, idx) => (
                <div className="flex items-center" key={idx}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 w-4 h-4 mr-2"
                  />
                  {skill}
                </div>
              ))}
        </div>
      </div>

      <div id="experience" className="mt-12">
        <div className="font-semibold text-lg border-b-2 pb-2 border-black">
          Experience
        </div>
        {isDefault || !resumeData.experience ? (
          <ClassicTempExp />
        ) : (
          resumeData.experience.map((item, idx) => (
            <ClassicTempExp key={idx} data={item} />
          ))
        )}
      </div>

      <div id="education" className="mt-12">
        <div className="font-semibold text-lg border-b-2 pb-2 border-black">
          Educations
        </div>
        {isDefault || !resumeData.education ? (
          <ClassicTempEdu />
        ) : (
          resumeData.education.map((item, idx) => (
            <ClassicTempEdu key={idx} data={item} />
          ))
        )}
      </div>

      <div id="projects" className="mt-12">
        <div className="font-semibold text-lg border-b-2 pb-2 border-black">
          Projects
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <div className="text-lg font-medium">Project Title</div>
            <div className="text-black/70 text-sm">Complete Date</div>
          </div>
          <div className="mt-2 text-black">
            Wqerui opasd fjkl zxcvbnm rtyuio p;lkjh gfdsa qwer asdfg hjuik mnvb
            cdefgh klmno pqrs tuv wxyz abc def ghi jkl mnop qrst uvw asdwhh.
          </div>
          <div className="flex flex-col mt-2">
            <div className="font-medium">Key Features:</div>
            <ul className="list-disc list-inside mt-1 text-black">
              <li>Qwerty zxcvb asd fghj klm nopq rty uio p;lk jhg fds a</li>
              <li>Vbnm asdf ghjk lkjh p;io yu trvw xz abc def gh ijk</li>
              <li>Lkjh qwer asd fghj k;l zxcv bnma sdfgh jkl mnop qwer</li>
            </ul>
          </div>
          <div className="mt-2">
            <div className="font-medium">Key Tech and Tools:</div>
            <div className="text-black/70 text-sm">
              Skill1, Skill2, Skill3, Skill4, Skill5.
            </div>
          </div>
        </div>
      </div>

      <div id="languages" className="mt-8">
        <div className="font-semibold text-lg border-b-2 pb-2 border-black">
          Languages
        </div>
        <div className="mt-4 text-black grid grid-cols-2 gap-x-8">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 w-4 h-4 mr-2"
            />
            <div>
              <span>Language</span>
              <span className="text-black/70 ml-2">Level</span>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 w-4 h-4 mr-2"
            />
            <div>
              <span>Language</span>
              <span className="text-black/70 ml-2">Level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
