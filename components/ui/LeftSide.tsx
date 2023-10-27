import React from "react";

function LeftSide() {
  return (
    <div className=" font-Jura text-basicRed">
      <ul className="divide-y-2 divide-slate-300 p-1 text-center ">
        <li className="font-semibold my-4 ">Menu</li>
        <li className="cursor-pointer my-3 ">Ensino</li>
        <li className="cursor-pointer my-3">Pessoal</li>
        <li className="cursor-pointer my-3">Horários</li>
        <li className="cursor-pointer my-3">Pesquisa</li>
        <li className="cursor-pointer my-3 border-b-slate-300">Contato</li>
      </ul>
    </div>
  );
}

export default LeftSide;
