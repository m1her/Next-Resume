import { ProjectCard } from "@/features/building/ProjectsFeat/PrjDataTypes";
import React from "react";

export const TwoColumnsPrj = ({ data }: { data?: ProjectCard }) => {
  return (
    <div className="mt-4 text-black">
      <div className="flex justify-between">
        <div className="text-xl font-medium">
          {data?.projectName ? data?.projectName : "Project Title"}
        </div>
        <div className="text-black/70 text-sm">
          {data?.finishDate ? data?.finishDate : "Complete Date"}
        </div>
      </div>
      <div className="text-sm mt-2">
        {data?.aboutProject
          ? data?.aboutProject
          : " Wqerui opasd fjkl zxcvbnm rtyuio p;lkjh gfdsa qwer asdfg hjuik mnvb cdefgh klmno pqrs tuv wxyz abc def ghi jkl mnop qrst uvw asdwhh."}
      </div>
      <div className="flex flex-col mt-2">
        <div className="font-medium">Key Features:</div>
        <ul className="list-disc list-inside mt-1 text-sm">
          {data?.prjBullitPoints ? (
            data?.prjBullitPoints.map((item, idx) => (
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
      <div className="mt-2">
        <div className="font-medium text-sm">Key Tech and Tools:</div>
        <div className="text-black/80 text-sm">
          {data?.prjTech
            ? data?.prjTech
            : "Skill1, Skill2, Skill3, Skill4, Skill5."}
        </div>
      </div>
    </div>
  );
};
