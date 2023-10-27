import React from "react";
import { SlideProps } from "../../types/types";
import Button from "../ui/Button";
import Icons from "../ui/Icons";

function Slide({ title, img_url }: SlideProps) {
  return (
    <div>
      <img className="object-contain h-64 rounded-xl" src={img_url} alt="" />
      <div className="my-1">
        <p>{title}</p>
      </div>
      <div className="p-2 w-5/6 border m-auto flex gap-x-8 justify-center ">
        <Icons size="h-7" link="" icon="/icons/delete.png" />
        <Icons size="h-7" link="" icon="/icons/edit.png" />
      </div>
    </div>
  );
}

export default Slide;
