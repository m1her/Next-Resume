import { ExperienceCard } from "@/features/building/ExperienceFeat/ExpDataTypes";
import React from "react";

export const TwoColumnsExp = ({ data }: { data?: ExperienceCard }) => {
  return (
    <div className="text-black">
      <div className="flex justify-between">
        <div className="text-xl font-medium">
          {data?.companyPositionRole
            ? data?.companyPositionRole
            : "Experience Role"}
        </div>
        <div className="text-black/70 text-sm">
          {data?.companyLocation ? data?.companyLocation : "Location"}
        </div>
      </div>
      <div className="text-black/70 text-sm flex justify-between">
        <div>{data?.companyName ? data?.companyName : "Company Name"}</div>
        <div>
          {data?.startDate
            ? data?.startDate + " - " + data?.endDate
            : "Start – End"}
        </div>
      </div>
      <ul className="list-disc list-inside mt-2">
        {data?.expBullitPoints ? (
          data?.expBullitPoints.map((item, idx) => (
            <li key={idx}>{item.text}</li>
          ))
        ) : (
          <>
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
          </>
        )}
      </ul>
      <div className="mt-2">
        <div className="font-medium">Key Tech and Tools:</div>
        <div className="text-black/70 text-sm">
          {data?.expTech
            ? data?.expTech
            : "Skill1, Skill2, Skill3, Skill4, Skill5."}
        </div>
      </div>
    </div>
  );
};
