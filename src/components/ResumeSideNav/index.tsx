"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LinkItem } from "./LinkItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { linksData } from "./LinksData";
import { debounce } from "@/utils/debounce";

export const ResumeSideNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(1);

  const clickHandler = (numberId: number) => {
    setSelectedId(numberId);
    router.push(`/build-resume/fill-data/${linksData[numberId - 1].link}`);
  };

  const selectPrev = debounce(() => {
    setSelectedId((prev) => (prev > 1 ? prev - 1 : prev));
  }, 200);

  const selectAfter = debounce(() => {
    setSelectedId((prev) => (prev < 7 ? prev + 1 : prev));
  }, 200);

  useEffect(() => {
    const cur = linksData.findIndex(
      (item) => item.link == pathname.split("/")[3]
    );
    setSelectedId(cur + 1);
  }, []);
  return (
    <div className="md:px-12 px-8 md:py-4 py-3 md:w-[300px] w-full text-white md:min-h-screen md:text-xl text-base select-none font-urbanist font-semibold bg-textColor h-full shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
      <Link href="/" className="text-primaryColor">
        Next Resume
      </Link>
      <div className="flex md:flex-col flex-row justify-between gap-y-4 text-base md:mt-20 mt-4 ">
        {linksData.map((item) => (
          <LinkItem
            key={item.number}
            id={item.id}
            clickHandler={clickHandler}
            number={item.number}
            selected={selectedId}
            text={item.text}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 md:hidden">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`w-3 h-3 ${selectedId == 1 ? "text-white/20" : ""}`}
          onClick={selectPrev}
        />
        <div>{linksData[selectedId - 1].text}</div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`w-3 h-3 ${selectedId == 7 ? "text-white/20" : ""}`}
          onClick={selectAfter}
        />
      </div>
    </div>
  );
};
