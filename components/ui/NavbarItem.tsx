import Link from "next/link";
import React, { PropsWithChildren } from "react";

function NavbarItem(props: PropsWithChildren, { title }: { title: string }) {
  return (
    <div className="p-2 font-Jura">
      <fieldset className="border border-dotted border-slate-400 p-2">
        <legend className="flex p-2 gap-x-3 font-semibold">
          <p className="self-center">Contatos</p>
          <img className="onject-cover h-10 " src="/icons/contact.png" alt="" />
        </legend>
        <p>{title}</p>
        <div className="my-2">{props.children}</div>
      </fieldset>
    </div>
  );
}

export default NavbarItem;
