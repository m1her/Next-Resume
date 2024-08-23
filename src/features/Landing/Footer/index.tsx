import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#fafafa] flex flex-col items-center md:p-12 p-8 -mt-12 gap-y-8">
      <div className="flex justify-between items-start w-full">
        <div className="md:text-2xl text-lg select-none font-urbanist font-semibold text-secondaryColor">
          <div>Next Resume</div>
        </div>
        <div className="font-semibold font-jost flex flex-col md:gap-y-4 gap-y-2">
          <div>
            Built By <span className="text-accentColor">m1her</span>
          </div>
          <div className="flex gap-x-4 text-accentColor">
            <Link href={"https://www.instagram.com/m1her/"}>
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 hover:text-accentColor/80 transition-colors duration-200"
              />
            </Link>
            <Link href={"www.linkedin.com/in/mns21"}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 h-6 hover:text-accentColor/80 transition-colors duration-200"
              />
            </Link>
            <Link href={"https://github.com/m1her"}>
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 hover:text-accentColor/80 transition-colors duration-200"
              />
            </Link>
            <Link href={"https://portfolio-v2-ten-delta.vercel.app/"}>
              <FontAwesomeIcon
                icon={faBriefcase}
                className="w-6 h-6 hover:text-accentColor/80 transition-colors duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-textColor font-urbanist font-medium text-lg">
        © 2024, Bold Limited. All rights reserved.
      </div>
    </div>
  );
};
