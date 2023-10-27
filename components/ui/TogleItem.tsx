import React from "react";
import { subMenuTypes } from "../../types/types";
import { menuTogleType } from "../../types/types";

// type menuTogleType = {
//   label: string;
//   subMenus: subMenuTypes[];
//   id: string;
// };

function TogleItem({ label, subMenus, id }: menuTogleType) {
  const expandHandle = () => {
    let content = document.getElementById(id) as HTMLElement;
    console.log(content.style.maxHeight);

    if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  };
  return (
    <div className="text-white grid">
      <div
        onClick={expandHandle}
        className="cursor-pointer bg-basicRed my-2 flex shadow p-2 ml-5 justify-self-start menu-item"
      >
        <p className="px-1 font-bold">{label}</p>
        <img
          className="object-contain h-5 self-center"
          src="/icons/expand_arrow.png"
          alt=""
        />
      </div>
      <div
        id={id}
        className="expand-items mobile-navbar-items ml-7 justify-self-start"
      >
        <ul className="">
          {subMenus.map((item, index) => (
            <li key={index} className="shadow p-1">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TogleItem;
