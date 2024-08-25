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

export const TwoColumnsTemplate = () => {
  const path = usePathname();
  const { resumeData } = useResumeContext();
  return (
    <div
      className={`w-full max-w-[1000px] mx-auto py-12 ${
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
        <div className={`font-light text-6xl`}>Your Name</div>
        <div className="text-black/80 text-2xl mt-2">Job Title</div>
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
              +20 000 000 0000
            </div>
            <div className="flex gap-x-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              my-email@example.com
            </div>
            <div className="flex gap-x-2 items-center">
              <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
              https://my-website.com
            </div>
            <div className="flex gap-x-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
              City, Country
            </div>
          </div>

          <div
            id="skills2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">SKILLS</div>
            <div className="flex flex-col gap-y-2">
              <div className="font-medium">Skills Title</div>
              <div className="flex items-center gap-x-4">
                <div>SKill1</div>
                <div>SKill2</div>
                <div>SKill3</div>
                <div>SKill4</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="font-medium">Skills Title</div>
              <div className="flex items-center gap-x-4">
                <div>SKill1</div>
                <div>SKill2</div>
                <div>SKill3</div>
                <div>SKill4</div>
              </div>
            </div>
          </div>

          <div
            id="education2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">EDUCATION</div>
            <div className="flex flex-col gap-y-2">
              <div className="font-medium">Education Degree</div>
              <div className="text-lg font-medium">Education University</div>
              <div>from date - to date</div>
              <div>grade result</div>
            </div>
          </div>

          <div
            id="laguages2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">LANGUAGES</div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2">
                <div>Language : </div>
                <div>Level</div>
              </div>
              <div className="flex items-center gap-x-2">
                <div>Language : </div>
                <div>Level</div>
              </div>
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
              Ghjl klmno pqrs tuvwx yzabc defgh ijkl mnopqr stuvw xyzab cdefgh
              ijkl mnopqr stuvw xyzab cdefg hijkl mnopq rstuvw xyza bcd efg hij
              klmno pqrs tuvwx yzabc defgh ijkl mnop qrst uvwx yzab cdefg hijkl
              mnopq rst uvwx yzabc defghi jklmnopq rs tuvwx yzab cdefgh ijklmn
              opqrs tuvwx yzabcdefg hijkl mnopqrst uvwxy zabcde.
            </div>
          </div>

          <div
            id="experience2"
            className="flex flex-col pb-8 gap-y-6 text-sm border-b-2 border-dotted border-gray-500"
          >
            <div className="text-xl font-medium">EXPERIENCE</div>
            <div className="text-black">
              <div className="flex justify-between">
                <div className="text-xl font-medium">Experience Role</div>
                <div className="text-black/70 text-sm">Location - Type</div>
              </div>
              <div className="text-black/70 text-sm flex justify-between">
                <div>Company Name</div>
                <div>Start – End</div>
              </div>
              <ul className="list-disc list-inside mt-2">
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

          <div id="projects2">
            <div className="text-xl font-medium">PROJECTS</div>
            <div className="mt-4 text-black">
              <div className="flex justify-between">
                <div className="text-xl font-medium">Project Title</div>
                <div className="text-black/70 text-sm">Complete Date</div>
              </div>
              <div className="text-sm mt-2">
                Wqerui opasd fjkl zxcvbnm rtyuio p;lkjh gfdsa qwer asdfg hjuik
                mnvb cdefgh klmno pqrs tuv wxyz abc def ghi jkl mnop qrst uvw
                asdwhh.
              </div>
              <div className="flex flex-col mt-2">
                <div className="font-medium">Key Features:</div>
                <ul className="list-disc list-inside mt-1 text-sm">
                  <li>Qwerty zxcvb asd fghj klm nopq rty uio p;lk jhg fds a</li>
                  <li>Vbnm asdf ghjk lkjh p;io yu trvw xz abc def gh ijk</li>
                  <li>Lkjh qwer asd fghj k;l zxcv bnma sdfgh jkl mnop qwer</li>
                </ul>
              </div>
              <div className="mt-2">
                <div className="font-medium text-sm">Key Tech and Tools:</div>
                <div className="text-black/80 text-sm">
                  Skill1, Skill2, Skill3, Skill4, Skill5.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
