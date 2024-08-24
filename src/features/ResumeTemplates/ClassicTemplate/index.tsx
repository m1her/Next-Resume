import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ClassicTemplate = ({
  color = "text-[#1f4e79]",
}: {
  color?: string;
}) => {
  return (
    <div className="w-full max-w-[800px] mx-auto p-8 font-notoserifgeorgian text-black bg-white">
      <div id="header" className="text-center">
        <div className={`${color} font-bold text-4xl`}>Maher Nassrallah</div>
        <div className="text-black/60 font-semibold text-xl mt-2">
          Frontend Developer
        </div>
        <div className="mt-4 text-black text-base">
          +20 111 036 8913 | maher.ple2@gmail.com | Cairo, Egypt
        </div>
      </div>

      <div id="summary" className="mt-12">
        <div className="text-black font-semibold text-lg border-b-2 border-black">
          Summary
        </div>
        <div className="mt-2 text-black text-justify">
          As a passionate and dedicated Software Engineer with 1 year of
          experience in React, Next.js, Tailwind CSS, and Firebase, I am
          committed to delivering high-quality, efficient, and innovative web
          solutions. My strong problem-solving skills, collaborative teamwork,
          and continuous learning mindset ensure my ability to contribute to the
          company’s growth and success.
        </div>
      </div>

      <div id="skills" className="mt-8">
        <div className="text-black font-semibold text-lg border-b-2 border-black">
          Skills
        </div>
        <div className="mt-4 text-black grid grid-cols-3 gap-x-8">
          {["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"].map((skill) => (
            <div className="flex items-center" key={skill}>
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
        <div className="text-black font-semibold text-lg border-b-2 border-black">
          Experience
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <div className="text-lg font-medium">Awtar Tech</div>
            <div className="text-black/70">Gaza, Palestine – On-site</div>
          </div>
          <div className="text-black/70 text-sm flex justify-between">
            <div>Frontend/React.js Engineer (Trainee)</div>
            <div>Jul/2018 – Sep/2023</div>
          </div>
          <ul className="list-disc list-inside mt-2 text-black">
            <li>
              Achieved a percentage of 85.16%, graduating with a second honor
              degree.
            </li>
            <li>
              Developed reusable components using React.js, improving the codebases maintainability.
            </li>
            <li>
              Collaborated with the design team to implement responsive and user-friendly UI.
            </li>
          </ul>
        </div>
      </div>

      <div id="projects" className="mt-12">
        <div className="text-black font-semibold text-lg border-b-2 border-black">
          Projects
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <div className="text-lg font-medium">Skill Link</div>
            <div className="text-black/70 text-sm">30/Jul/2024</div>
          </div>
          <div className="mt-2 text-black">
            Innovative platform designed to connect individuals seeking to learn
            from professionals and experts eager to share their knowledge.
          </div>
          <div className="flex flex-col mt-2">
            <div className="font-medium">Key Features:</div>
            <ul className="list-disc list-inside mt-1 text-black">
              <li>
                Integrated real-time chat functionality using Firebase.
              </li>
              <li>
                Implemented user authentication and authorization with Next.js and Firebase.
              </li>
              <li>
                Designed responsive layouts with Tailwind CSS, ensuring a seamless user experience across devices.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <div className="font-medium">Key Tech and Tools:</div>
            <div className="text-black/70 text-sm">
              Next.js, Tailwind CSS, TypeScript, React Context, Firebase.
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
              <span>Arabic</span>
              <span className="text-black/70 ml-2">Native</span>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-500 w-4 h-4 mr-2"
            />
            <div>
              <span>English</span>
              <span className="text-black/70 ml-2">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
