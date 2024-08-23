import React from "react";
import { Main } from "./Main";
import { TemplateDetailsSection } from "./TemplateDetailsSection";
import { TemplatesFeatures } from "./TemplatesFeatures";
import { LetsLandDreamJob } from "./LetsLandDreamJob";
import { Footer } from "./Footer";

export const LandingPage = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <Main />
      <TemplateDetailsSection />
      <TemplatesFeatures />
      <LetsLandDreamJob />
      <Footer />
    </div>
  );
};
