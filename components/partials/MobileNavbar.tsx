import React, { useEffect, useRef } from "react";
import { showMenuProp } from "../../test/datas";
import TogleItem from "../ui/TogleItem";
import { subMenuTypes } from "../../types/types";
import { submenus } from "../../constants/constants";

function MobileNavbar({ showMenuHandler }: showMenuProp) {
  const subm: subMenuTypes[] = [
    { label: "Option-1", link: "aaaaaaaa" },
    { label: "Option-2", link: "aaaaaaaa" },
    { label: "Option-3", link: "aaaaaaaa" },
    { label: "Option-4", link: "aaaaaaaa" },
  ];
  return (
    <div
      id="mobileMenu"
      className="bg-basicBlack top-0 showAnim bottom-0 fixed z-10"
    >
      <div className="text-4xl p-2 flex justify-end">
        <div onClick={showMenuHandler}>
          <img className="object-contain h-8" src="/icons/close.png" alt="" />
        </div>
      </div>
      <div className="overflow-hidden font-Jura">
        {submenus.map((menu, index) => (
          <TogleItem label={menu.label} subMenus={menu.subMenus} id={menu.id} />
        ))}
      </div>
    </div>
  );
}

export default MobileNavbar;
