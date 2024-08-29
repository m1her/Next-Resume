import React, { useEffect, useState } from "react";
import { ExpHeaderData } from "./ExpHeaderData";
import {
  ExperienceBullitPoints,
  ExperienceHeaderInputs,
} from "../ExpDataTypes";
import { ExpBullitPointsData } from "./ExpBullitPointsData";
import { ExpKeyTechs } from "./ExpKeyTechs";

export const ExperienceItem = () => {
  const [headData, setHeadData] = useState<ExperienceHeaderInputs[]>([]);
  const [expBullitPoints, setExpBullitPoints] = useState<string[]>();
  const [expKeyTechs, setExpKeyTechs] = useState<string>("");

  useEffect(() => {
    console.log(headData);
    console.log(expBullitPoints);
    console.log(expKeyTechs);
  }, [headData, expBullitPoints, expKeyTechs]);

  return (
    <div className="flex flex-col gap-4">
      <ExpHeaderData setHeadData={setHeadData} />
      <ExpBullitPointsData setExpBullitPoints={setExpBullitPoints} />
      <ExpKeyTechs setExpKeyTechs={setExpKeyTechs} />
      <button
        form="experience-form"
        type="submit"
        className="mt-2 font-semibold text-white bg-primaryColor rounded px-10 py-2 lg:w-fit w-full hover:bg-primaryColor/90 transition-all duration-300"
      >
        Add
      </button>
    </div>
  );
};
