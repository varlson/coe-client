import React from "react";

type inputProps = {
  type: string;
};
function Input({ type }: inputProps) {
  return (
    <input
      className="w-full bg-darkRed text-white font-Jura rounded h-10 px-4"
      type={type}
    />
  );
}

export default Input;
