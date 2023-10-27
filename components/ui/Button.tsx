import React from "react";

type BUttonProps = {
  label: string;
};

function Button({ label }: BUttonProps) {
  return (
    <div className="bg-basicRed px-4 py-1 rounded text-white text-center cursor-pointer hover:text-slate-300 transition-all duration-300">
      {label}
    </div>
  );
}

export default Button;
