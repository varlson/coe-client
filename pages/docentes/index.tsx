import React from "react";
import Icons from "../../components/ui/Icons";

function index() {
  return (
    <div className="w-9/12 m-auto p-2">
      <fieldset className="border border-slate-300 border-dotted p-4 rounded">
        <legend className="flex gap-x-4 items-center px-2 ">
          <p className="font-bold uppercase">Docentes</p>
          <img className="object-cover h-10" src="/icons/teacher.png" alt="" />
        </legend>

        <div className="my-2 flex gap-x-4 justify-between">
          <Icons
            link="https://decsi.ufop.br/docentes"
            size="h-16"
            icon="image/decsi.png"
          />
          <Icons
            link="https://sites.ufop.br/deelt/docentes"
            size="h-16"
            icon="image/deelt.png"
          />
          <Icons
            link="https://icea.ufop.br/decea/professores"
            size="h-16"
            icon="image/decea_logo.jpg"
          />
        </div>
      </fieldset>
    </div>
  );
}

export default index;
