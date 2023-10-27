import React from "react";
import { labsInfoType } from "../../types/types";

// type labsInfoType = {
//   isLeft: string;
//   title: string;
//   preText: string;
//   posText: string;
//   img: string;
// };
function View({ lab }: { lab: labsInfoType }) {
  const { isLeft, title, preText, posText, img } = lab;
  if (isLeft)
    return (
      <div className="font-Jura">
        <h3 className=" border-b-2 border-basicRed  font-bold text-xl mb-3">
          {title}
        </h3>
        <div className="my-2 grid grid-cols-12 gap-4 p-2">
          <div className="col-span-8">
            <img className="object-fit h-96 w-full " src={img} alt="" />
          </div>
          <div className="col-span-4 text-justify">{preText}</div>
        </div>

        <div className="col-span-12 p-2">
          <p>{posText}</p>
        </div>
      </div>
    );

  return (
    <div className="my-2 font-Jura">
      <h3 className=" border-b-2 border-basicRed  font-bold text-xl my-2">
        {title}
      </h3>
      <div className="my-2 grid grid-cols-12 gap-4 p-2">
        <div className="col-span-4 text-justify">{preText}</div>
        <div className="col-span-8">
          <img className="object-fit h-96 w-full " src={img} alt="" />
        </div>
      </div>

      <div className="col-span-12 p-2">
        <p>{posText}</p>
      </div>
    </div>
  );
}

export default View;
