export type ExperienceHeaderInputs = {
  companyName: string;
  companyLocation: string;
  companyPositionRole: string;
  startDate: string;
  endDate: string;
};

export type ExperienceBullitPoints = {
  expBullitPoints: { text: string }[];
};

export type ExperienceTechs = {
  expTech: string;
};

export type ExperienceCard = ExperienceHeaderInputs &
  ExperienceBullitPoints &
  ExperienceTechs;
