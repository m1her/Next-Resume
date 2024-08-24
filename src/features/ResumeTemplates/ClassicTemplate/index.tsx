import { useResumeContext } from "@/context/ResumeContext";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";

export const ClassicTemplate = ({
  color = "text-[#1f4e79]",
}: {
  color?: string;
}) => {
  const path = usePathname();
  const { resumeData } = useResumeContext();

  return (
    <div
      className={`w-full max-w-[800px] mx-auto p-8 ${
        path.split("/")[2] != "choose-template"
          ? resumeData.fontType
          : "font-notoserifgeorgian"
      } text-black bg-white`}
    >
      <div id="header" className="text-center">
        <div className={`${color} font-bold text-4xl`}>Your Name</div>
        <div className="text-black/60 font-semibold text-xl mt-2">
          Job Title
        </div>
        <div className="mt-4 text-black text-base">
          +20 000 000 0000 | my-email@example.com | City, Country
        </div>
      </div>

      <div id="summary" className="mt-12">
        <div className="text-black font-semibold text-lg border-b-2 border-black">
          Summary
        </div>
        <div className="mt-2 text-black text-justify">
          Ghjl klmno pqrs tuvwx yzabc defgh ijkl mnopqr stuvw xyzab cdefgh ijkl
          mnopqr stuvw xyzab cdefg hijkl mnopq rstuvw xyza bcd efg hij klmno
          pqrs tuvwx yzabc defgh ijkl mnop qrst uvwx yzab cdefg hijkl mnopq rst
          uvwx yzabc defghi jklmnopq rs tuvwx yzab cdefgh ijklmn opqrs tuvwx
          yzabcdefg hijkl mnopqrst uvwxy zabcde.
        </div>
      </div>

      <div id="skills" className="mt-8">
        <div className="text-black font-semibold text-lg border-b-2 border-black">
          Skills
        </div>
        <div className="mt-4 text-black grid grid-cols-3 gap-x-8">
          {["Skill", "Skill", "Skill", "Skill", "Skill", "Skill"].map(
            (skill, idx) => (
              <div className="flex items-center" key={idx}>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-green-500 w-4 h-4 mr-2"
                />
                {skill}
              </div>
            )
          )}
        </div>
      </div>

      <div id="experience" className="mt-12">
        <div className="text-black font-semibold text-lg border-b-2 border-black">
          Experience
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <div className="text-lg font-medium">Company Name</div>
            <div className="text-black/70">Location - Type</div>
          </div>
          <div className="text-black/70 text-sm flex justify-between">
            <div>Experience Role</div>
            <div>Start – End</div>
          </div>
          <ul className="list-disc list-inside mt-2 text-black">
            <li>
              Xyloz qwerty at 73.29%, completed a prime level achievement.
            </li>
            <li>
              Assembled modular frameworks with Zyx.js, enhancing project
              adaptability.
            </li>
            <li>
              Partnered with the strategy crew to craft intuitive and
              interactive designs.
            </li>
          </ul>
          <div className="mt-2">
            <div className="font-medium">Key Tech and Tools:</div>
            <div className="text-black/70 text-sm">
              Skill1, Skill2, Skill3, Skill4, Skill5.
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="mt-12">
        <div className="text-black font-semibold text-lg border-b-2 border-black">
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
        <div className="text-black font-semibold text-lg border-b-2 border-black">
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
