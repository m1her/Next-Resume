import nlp from "compromise";

const extractPhoneNumbers = (text: string) => {
  const phonePattern = /\+?\d[\d -]{8,}\d/g;
  const phones = text.match(phonePattern);
  return phones ? phones : [];
};

const extractSummary = (text: string) => {
  const summaryPattern = /Summary\s*(.*?)(?=\s{4}|$)/i;
  const summaryMatch = text.match(summaryPattern);

  if (summaryMatch) {
    return summaryMatch[1].trim();
  }

  return "";
};

const extractSkills = (text: string) => {
  const skillsPattern = /\s{3,}Skills\s*[:\-]?\s*(.*?)(?=\s{5}|$)/i;
  const match = text.match(skillsPattern);

  if (match) {
    return match[1]
      .split(/,\s*|\s*;\s*|\s*[\n\r]+\s*|\s{2,}/)
      .map((skill) => skill.trim())
      .filter((skill) => skill.length > 1);
  }

  return [];
};

export const textParsing = (text: string) => {
  const doc = nlp(text);
  const emails = doc.match("#Email ").out("array");
  const websites = doc.match("#Url ").out("array");
  const phones = extractPhoneNumbers(text);
  const locations = doc.match("#City #Country").out("array");
  const name = doc.match("#Noun").out("array");
  const jobTitle = doc.match("#Noun").out("array");
  const summary = extractSummary(text);
  const skills = extractSkills(text);

  return {
    email: emails[0] || "",
    website: websites[0] || "",
    phone: phones[0] || "",
    location: locations[0] || "",
    name: name.slice(0, 2).join(" ") || "",
    job: jobTitle.slice(2, 4).join(" ") || "",
    summary: summary || "",
    skills: skills || "",
  };
};
