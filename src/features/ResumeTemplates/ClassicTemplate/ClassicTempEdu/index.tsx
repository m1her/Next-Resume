import { EducationCard } from "@/features/building/EducationFeat/EduDataTypes";
import React from "react";

export const ClassicTempEdu = ({ data }: { data?: EducationCard }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-medium">
          {data?.schoolName ? data?.schoolName : "Education University"}
        </div>
        <div className="text-black">
          {data?.schoolLocation ? data?.schoolLocation : "City, Country"}
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="text-black font-medium">
          {data?.schoolDegree ? data?.schoolDegree : "Education Degree"}
        </div>
        <div className="text-black/70 text-sm">
          {data?.startDate ? data?.startDate + data?.endDate : "Start – End"}
        </div>
      </div>
      <ul className="list-disc list-inside mt-1 text-black">
        {data?.eduBullitPoints ? (
          data?.eduBullitPoints.map((item, idx) => (
            <li key={idx}>{item.text}</li>
          ))
        ) : (
          <>
            <li>Qwerty zxcvb asd fghj klm nopq rty uio p;lk jhg fds a</li>
            <li>Vbnm asdf ghjk lkjh p;io yu trvw xz abc def gh ijk</li>
            <li>Lkjh qwer asd fghj k;l zxcv bnma sdfgh jkl mnop qwer</li>
          </>
        )}
      </ul>
    </div>
  );
};
