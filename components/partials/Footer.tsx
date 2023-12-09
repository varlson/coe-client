import React from "react";
import { ComercialTime, Location, MediaSocial } from "../ui/Ui";

export default function Footer() {
  return (
    <div id="footer" className="font-Jura text-white py-10 bg-dark800">
      <div className="px-3 text-sm  lg:justify-between md:w-9/12 grid md:grid-cols-2 lg:grid-cols-3 m-auto">
        <Location />
        <MediaSocial />
        <ComercialTime />
      </div>
    </div>
  );
}
