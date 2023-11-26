import Link from "next/link";
import React from "react";

type FuncButtonPropsType = {
  button: {
    label: string;
    link: string;
  };
};
function FuncButton(button: FuncButtonPropsType) {
  const { label, link } = button.button;
  return (
    <div className="text-white p-2 rounded font-Jura shadow cursor-pointer bg-basicRed btn-min-w text-center">
      <Link href={link}>{label}</Link>
    </div>
  );
}

export default FuncButton;
