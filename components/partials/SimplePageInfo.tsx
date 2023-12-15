import React, { ReactNode } from "react";

type SimplePageInfoPropType = {
  children: ReactNode;
  subTitle: string;
  img: string;
};

function SimplePageInfo({ children, subTitle, img }: SimplePageInfoPropType) {
  return (
    <div className="p-2">
      <fieldset className="font-Jura rounded border border-slate-300 border-dotted p-3">
        <legend className="flex gap-x-4 items-center p-2">
          <p className="text-2xl font-semibold">{subTitle}</p>
          <img className="object-contain h-10" src={`/image/${img}`} alt="" />
        </legend>
        <div className="my-2 font-Jura">{children}</div>
      </fieldset>
    </div>
  );
}

export default SimplePageInfo;
