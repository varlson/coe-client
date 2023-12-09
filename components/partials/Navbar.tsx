import React, { useState } from "react";
import { Logo, Search } from "../ui/Ui";
import SubNavBar from "./SubNavBar";
import ClickableIcons from "../ui/ClickableIcons";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const showMenuHandler = () => {
    const mobileMenu = document.getElementById("mobileMenu") as HTMLElement;
    if (showMenu) {
      mobileMenu.style.width = "100vw";
      mobileMenu.style.left = "0px";
      setShowMenu(!showMenu);
    } else {
      mobileMenu.style.width = "0vw";
      mobileMenu.style.left = "-10px";
      setShowMenu(!showMenu);
    }
  };

  return (
    <>
      <div className="lg:hidden ">
        <MobileNavbar showMenuHandler={showMenuHandler} />
      </div>
      <div id="header" className="bg-basicBlack py-2 px-4">
        <div className="lg:w-9/12 m-auto grid grid-cols-12 ">
          <div className=" col-span-9 md:col-span-5 text-white">
            <Logo />
          </div>

          <div className="hidden md:block self-center md:col-start-7 md:col-span-7 lg:col-start-8">
            <Search />
          </div>

          <div className=" md:hidden self-center justify-self-end col-span-3 ">
            <ClickableIcons showMenuHandler={showMenuHandler} />
          </div>

          <div className="hidden md:block col-span-12 my-2">
            <SubNavBar />
          </div>
        </div>
      </div>
    </>
  );
}
