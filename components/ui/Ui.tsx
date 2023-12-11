import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex md:gap-2 items-center">
      <Link href="/">
        <img
          className="object-contain md:h-20 h-24"
          src="/icons/Logomarc.png"
          alt=""
        />
      </Link>
      <Link href="/">
        <div className="font-Jura text-center self-center">
          <p className="md:font-bold text-sm md:text-base md:text-normal ">
            Colegiado do curso de Engenharia Elétrica
          </p>
          <p className="font-extralight text-xs md:text-sm">
            ICEA - Campus João Monlevade - MG - Brasil
          </p>
        </div>
      </Link>
    </div>
  );
};

export const Search = () => {
  return (
    <Link href="/search">
      <img
        className=" justify-self-end h-10 object-contain"
        src="/icons/red-search.png"
        alt=""
      />
    </Link>
  );
};

export const ExpandInicio = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <Link href="/sobre">
        <li className="px-5 py-2 cursor-pointer">Sobre Colegiado</li>
      </Link>
      <Link href="/sobre/nde">
        <li className="px-5 py-2 cursor-pointer">Sobre NDE</li>
      </Link>
      <Link href="/sobre/membros">
        <li className="px-5 py-2 cursor-pointer">Membros NDEE</li>
      </Link>
      <Link href="/sobre/coee-em-numeros">
        <li className="px-5 py-2 cursor-pointer">COEE em Números</li>
      </Link>
    </ul>
  );
};

export const ExpandCurso = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <Link href="/curso">
        <li className="px-5 py-2 cursor-pointer">Graduação</li>
      </Link>
      <Link href="/curso/matriz-curricular">
        <li className="px-5 py-2 cursor-pointer">Matriz Curricular</li>
      </Link>
      <li className="px-5 py-2 cursor-pointer">Docentes</li>
      <li className="px-5 py-2 cursor-pointer">Ementas</li>
      <li className="px-5 py-2 cursor-pointer">Projeto Pedagógico</li>
      <li className="px-5 py-2 cursor-pointer">Avaliação</li>
    </ul>
  );
};

export const ExpandInfra = () => {
  return (
    <ul className="bg-basicRed  flex text-center">
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">
        <Link href="/laboratorios">Laboratórios</Link>
      </li>
      {/* <li className="hover:bg-red800 px-5 py-2 cursor-pointer">Lab de E. A.</li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">
        Lab de C. e A.
      </li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">
        Lab de S. E. I.
      </li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">Lab de R.</li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">
        Lab de P. de S.
      </li>

      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">Lab de E. D.</li> */}
    </ul>
  );
};

export const ExpandPesquisa = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <li className="px-5 py-2 cursor-pointer">
        <Link href="/pesquisa">Projetos de Pesquisa</Link>
      </li>
      <li className="px-5 py-2 cursor-pointer">
        <Link href="/pesquisa/grupos">Grupos de Pesquisas</Link>
      </li>
      <li className="px-5 py-2 cursor-pointer">
        <Link href="/pesquisa/extensao">Projetos de Extensão</Link>
      </li>
    </ul>
  );
};

export const ExpandBolsa = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <li className="px-5 py-2 cursor-pointer">Pesquisa e IC</li>
      <li className="px-5 py-2 cursor-pointer">Extensão</li>
      <li className="px-5 py-2 cursor-pointer">Institucional</li>
      <li className="px-5 py-2 cursor-pointer">Pro-Ativa</li>
      <li className="px-5 py-2 cursor-pointer">Monitoria</li>
      <li className="px-5 py-2 cursor-pointer">PRACE</li>
    </ul>
  );
};

export const LeftSide = () => {
  return (
    <div className="font-Jura text-sm">
      <div className=" bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>Editais</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>TCCs</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-1 p-2 mb-2">
        <span>Resoluções</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>ATVs</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>
    </div>
  );
};
export const RightSide = () => {
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
};

export const Location = () => {
  return (
    <div className="flex gap-2 items-center footer-group">
      <img className="h-8" src="icons/Address.png" alt="" />
      <div className="font-Jura">
        <p className="my-1">Instituto de Ciências Exatas e Aplicadas - ICEA</p>
        <p className="my-1">
          Rua Trinta e Seis, Nº 115, Loanda - João Monlevade - MG
        </p>
      </div>
    </div>
  );
};

export const MediaSocial = () => {
  return (
    <div className="px-1 flex flex-col gap-2 items-center footer-group">
      <div className="flex gap-2">
        <img className="h-8" src="/icons/facebook.png" alt="" />
        <img className="h-8" src="/icons/instagram.png" alt="" />
        <img className="h-8" src="/icons/WhatsApp.png" alt="" />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2">
          <img className="h-8" src="/icons/phone.png" alt="" />
          <p className="my-1">+55 31 3808-0833</p>
        </div>
        <div className="flex gap-2">
          <img className="h-8" src="/icons/email.png" alt="" />
          <p className="my-1">coee@ufop.edu.br</p>
        </div>
      </div>
    </div>
  );
};

export const ComercialTime = () => {
  return (
    <div className="p-1 flex items-center gap-4 mt-2 bg-red">
      <img className="h-8" src="/icons/Time Machine.png" alt="" />
      <div className="flex flex-col">
        <div className="mb-2 text-right">
          <p className="font-bold ">Atendimento Remoto</p>
          <p className="my-1">Segunda a sexta-feira, das 8h às 12h</p>
          <p className="my-1">Sexta-feira: 13h às 17h</p>
        </div>

        <div className="mb-2 text-right">
          <p className="font-bold ">Atendimento Presencial</p>
          <p className="my-1">Segunda a quinta-feira, das 14h às 18h</p>
        </div>
      </div>
    </div>
  );
};

type avatarProp = {
  img: string;
};
export const Avatar = ({ img }: avatarProp) => {
  return (
    <img className="object-contain h-14" src={`/icons/${img}.png`} alt="" />
  );
};

type AdmMenuItemProp = {
  img: string;
  label: string;
  link: string;
};

export const AdmMenuItem = ({ img, label, link }: AdmMenuItemProp) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer p-2 bg-darkRed500 font-Jura rounded shadow bordera w-28 grid justify-items-center">
        <img className="h-14 object-contain" src={`/icons/${img}.png`} alt="" />
        <p className="text-white ">{label}</p>
      </div>
    </Link>
  );
};
