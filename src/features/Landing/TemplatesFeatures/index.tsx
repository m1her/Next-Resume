import {
  faBrain,
  faClock,
  faFileInvoice,
  faLinesLeaning,
  faPalette,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TemplatesFeatures = () => {
  return (
    <div className="flex flex-col items-center font-urbanist md:gap-12 gap-8 md:px-12 px-8 text-textColor">
      <div className="md:text-4xl text-3xl font-semibold text-center md:w-2/3 w-full">
        Get hired 33% faster with our feature-packed and easy-to-use resume
        builder app
      </div>
      <div className="grid gap-8 md:grid-cols-3 grid-cols-2">
        <div className="flex flex-col md:gap-4 gap-2">
          <FontAwesomeIcon
            icon={faBrain}
            className="text-accentColor w-8 h-8"
          />
          <div className="md:text-3xl text-2xl font-semibold">
            Powerful resume builder
          </div>
          <div className="md:text-lg text-base font-jost">
            Use our potent creation tools and expert guidance to create the
            perfect resume for your next job application.
          </div>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <FontAwesomeIcon
            icon={faFileInvoice}
            className="text-accentColor w-8 h-8"
          />
          <div className="md:text-3xl text-2xl font-semibold">
            Professional templates{" "}
          </div>
          <div className="md:text-lg text-base font-jost">
            Choose from 25+ applicant tracking systems (ATS)-friendly modern and
            professional templates.
          </div>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <FontAwesomeIcon
            icon={faPalette}
            className="text-accentColor w-8 h-8"
          />
          <div className="md:text-3xl text-2xl font-semibold">
            Customize fonts and colors
          </div>
          <div className="md:text-lg text-base font-jost">
            Select custom fonts and colors on any resume template.
          </div>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <FontAwesomeIcon
            icon={faClock}
            className="text-accentColor w-8 h-8"
          />
          <div className="md:text-3xl text-2xl font-semibold">Save Time</div>
          <div className="md:text-lg text-base font-jost">
            Focus on job search. Build a resume in minutes and start your job
            search.
          </div>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <FontAwesomeIcon icon={faVial} className="text-accentColor w-8 h-8" />
          <div className="md:text-3xl text-2xl font-semibold">
            ATS-friendly templates
          </div>
          <div className="md:text-lg text-base font-jost">
            Sail through applicant tracking systems with resume templates that
            appeal to both machines and humans.
          </div>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <FontAwesomeIcon
            icon={faLinesLeaning}
            className="text-accentColor w-8 h-8"
          />
          <div className="md:text-3xl text-2xl font-semibold">
            Expert tips and guidance
          </div>
          <div className="md:text-lg text-base font-jost">
            Get help every step of the way as you build your resume with expert
            tips and suggested phrases.
          </div>
        </div>
      </div>
    </div>
  );
};
