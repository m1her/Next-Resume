import nlp from "compromise";

const extractPhoneNumbers = (text: string) => {
  const phonePattern = /\+?\d[\d -]{8,}\d/g;
  const phones = text.match(phonePattern);
  return phones ? phones : [];
};

export const textParsing = (text: string) => {
  const doc = nlp(text);
  const emails = doc.match("#Email").out("array");
  const websites = doc.match("#Url").out("array");
  const phones = extractPhoneNumbers(text);
  const locations = doc.match("#Place").out("array");
  const name = doc.nouns().out("text");
  const jobTitle = doc.match("#JobTitle+").out("text");

  return {
    email: emails.length > 0 ? emails[0] : "Email not found",
    website: websites.length > 0 ? websites[0] : "Website not found",
    phone: phones.length > 0 ? phones[0] : "Phone number not found",
    location: locations.length > 0 ? locations[0] : "Location not found",
    job: jobTitle.length > 0 ? jobTitle[0] : "Job title not found",
    name: name.length > 0 ? name : "Name not found",
  };
};
