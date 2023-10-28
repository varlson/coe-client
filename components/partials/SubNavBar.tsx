import React, { MouseEvent, useEffect, useRef, useState } from "react";

import {
  ExpandCurso,
  ExpandInfra,
  ExpandInicio,
  ExpandPesquisa,
  ExpandBolsa,
} from "../ui/Ui";
import { IncialValue, subNavSwitcher } from "../../services/util";
import Link from "next/link";
import Contact from "../ui/Contact";
export default function SubNavBar() {
  useEffect(() => {
    let spand = document.getElementById("inicio") as any;
    spand.style.maxHeight = spand.scrollHeight + "px";
    setHideElement((prevState: any) => ({ ...prevState, ["inicio"]: true }));
  }, []);

  const [hideElement, setHideElement] = useState<any>({
    curso: false,
    infra: false,
    inicio: false,
    pesquisa: false,
    bolsa: false,
    contact: false,
  });

  const expandHandler = (key: string) => {
    let spand = document.getElementById(key) as any;
    if (hideElement[key]) {
      spand.style.maxHeight = null;
      setHideElement((prevState: any) => ({ ...prevState, [key]: false }));
    } else {
      setHideElement(IncialValue);
      spand.style.maxHeight = spand.scrollHeight + "px";
      setHideElement((prevState: any) => ({ ...prevState, [key]: true }));
    }
  };

  return (
    <div className=" bg-darkRed font-Jura text-white rounded">
      <ul className="flex text-center gap-1  justify-between">
        <li
          className={`${
            hideElement.inicio && "bg-basicRed"
          }   px-5 py-2  rounded-t  cursor-pointer`}
        >
          <div
            id="inicio"
            onClick={(e) => {
              expandHandler("inicio");
            }}
            className="nav-item"
          >
            <Link href={"/"}>
              <span>COE</span>
            </Link>
            <img className="h-5" src="/icons/expand_arrow.png" alt="" />
          </div>
        </li>
        <li
          className={`${
            hideElement.curso && "bg-basicRed"
          }   px-5 py-2  rounded-t  cursor-pointer`}
        >
          <div
            onClick={(e) => {
              expandHandler("curso");
            }}
            id="curso"
            className="nav-item"
          >
            <span>Curso</span>
            <img className="h-5" src="/icons/expand_arrow.png" alt="" />
          </div>
        </li>
        <li
          className={`${
            hideElement.infra && "bg-basicRed"
          }   px-5 py-2  rounded-t  cursor-pointer`}
        >
          <div
            onClick={(e) => {
              expandHandler("infra");
            }}
            id="infra"
            className="nav-item"
          >
            <span>Infraestrutura</span>
            <img className="h-5" src="/icons/expand_arrow.png" alt="" />
          </div>
        </li>
        <li
          className={`${
            hideElement.pesquisa && "bg-basicRed"
          }   px-5 py-2 rounded-t   cursor-pointer`}
        >
          <div
            onClick={(e) => {
              expandHandler("pesquisa");
            }}
            id="pesquisa"
            className="nav-item"
          >
            <span>Pesq. e Extensão</span>
            <img className="h-5" src="/icons/expand_arrow.png" alt="" />
          </div>
        </li>
        <li
          className={`${
            hideElement.bolsa && "bg-basicRed"
          }   px-5 py-2 rounded-t   cursor-pointer`}
        >
          <div
            onClick={(e) => {
              expandHandler("bolsa");
            }}
            id="bolsa"
            className="nav-item"
          >
            <span>Bolsas</span>
            <img className="h-5" src="/icons/expand_arrow.png" alt="" />
          </div>
        </li>

        <li
          className={`${
            hideElement.contact && "bg-basicRed"
          }   px-5 py-2 rounded-t   cursor-pointer`}
        >
          <div className="nav-item">
            <Link href="/contatos">
              <span>Contato</span>
            </Link>
          </div>
        </li>
      </ul>
      <div className="height" id="subNav">
        {hideElement.inicio && <ExpandInicio />}
        {hideElement.infra && <ExpandInfra />}
        {hideElement.curso && <ExpandCurso />}
        {hideElement.bolsa && <ExpandBolsa />}
        {hideElement.pesquisa && <ExpandPesquisa />}
        {hideElement.contact && <Contact />}
      </div>
    </div>
  );
}
