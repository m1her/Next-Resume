export type EducationHeaderInputs = {
  schoolName: string;
  schoolLocation: string;
  schoolDegree: string;
  startDate: string;
  endDate: string;
};

export type EducationBullitPoints = {
  eduBullitPoints: { text: string }[];
};

export type EducationCard = EducationHeaderInputs & EducationBullitPoints;
