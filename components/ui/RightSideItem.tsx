import React from "react";
import { sidesProps } from "../../types/types";
import Link from "next/link";

function RightSideItem({
  clickHandle,
  label,
  subMenus,
  icon,
  contentName,
}: sidesProps) {
  return (
    <div className="font-Jura text-sm">
      <div
        onClick={(e) => {
          clickHandle(contentName);
        }}
        className="cursor-pointer bg-basicBlack rounded  text-white p-1 mb-2"
      >
        <div className="flex items-center gap-2">
          <p className="my-2 font-bold w-full text-center">{label}</p>
          <img className="h-5" src={`/icons/${icon}`} alt="" />
        </div>
        <div>
          <ul id={contentName} className="hide ml-2">
            {subMenus?.map((item, index) => (
              <Link key={index} href={`/news/${item._id}`}>
                <li className="my-1" key={index}>
                  {item.noticeNumber}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightSideItem;
