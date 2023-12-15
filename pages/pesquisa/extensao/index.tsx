import React from "react";
import SimplePageInfo from "../../../components/partials/SimplePageInfo";
import Link from "next/link";

function index() {
  return (
    <div className="w-9/12 m-auto font-Jura">
      <div className="title-wrap">
        <p className="title">Projeto de Extensão</p>
      </div>
      <SimplePageInfo img="extentions.png" subTitle="Projetos de Extensão">
        <div className="my-2">
          <div className=" gap-x-2 grid grid-cols-5 mt-1 mb-5 items-center text-justify">
            <p className="bg-slate-300 font-semibold p-2 text-center col-span-3">
              Título da ação
            </p>
            <p className="bg-slate-300 font-semibold p-2 text-center ">
              Coordenador
            </p>
            <p className="bg-slate-300 font-semibold p-2 text-center ">
              E-mail
            </p>

            <p className="px-2 col-span-3 ">
              Auxílio ao Hospital Margarida para reduzir gastos com energia
              elétrica - Etapa 4.
            </p>
            <p className="px-2 ">Prof. Juan Carlos Galvis Manso</p>
            <p className="px-2 ">
              <Link
                className="text-blue-600 underline"
                href="mailto:juancgalvis@ufop.edu.br"
              >
                juancgalvis@ufop.edu.br
              </Link>
            </p>
            <p className="col-span-3 border-b my-2"></p>
            <p className=" border-b my-2"></p>
            <p className=" border-b my-2"></p>
            <p className="px-2 col-span-3 ">
              Elaboração de um banco de dados de casos de Dengue na cidade de
              João Monlevade e Ouro Preto.
            </p>
            <p className="px-2 ">Prof. Edgard G. Torres Saravia</p>
            <p className="px-2 ">
              <Link
                className="text-blue-600 underline"
                href="mailto:edgard@ufop.edu.br"
              >
                edgard@ufop.edu.br
              </Link>
            </p>
            <p className="col-span-3 border-b my-2"></p>
            <p className=" border-b my-2"></p>
            <p className=" border-b my-2"></p>
            <p className="px-2 col-span-3 ">
              Robótica sustentável no ensino médio: o robô como mecanismo
              interdisciplinar de transmissão do conhecimento.
            </p>
            <p className="px-2 ">Prof. Rodrigo Augusto Ricco </p>
            <p className="px-2 ">
              <Link
                className="text-blue-600 underline"
                href="mailto:ricco@ufop.edu.br"
              >
                ricco@ufop.edu.br
              </Link>
            </p>

            <p className="col-span-3 border-b my-2"></p>
            <p className=" border-b my-2"></p>
            <p className=" border-b my-2"></p>
            <p className="px-2 col-span-3 ">
              Utilização da Tecnologia LoRaWAN com instrumentação eletrônica
              embarcada para mensurar variações climáticas sazonais
              correlacionadas à ovitramps, e Georreferenciamento de ações da
              Vigilancia Sanitária no combate ao Aedes aegypti nas cidades de
              João Monlevade e Ouro Preto.
            </p>
            <p className="px-2 ">Prof. Edgard G. Torres Saravia</p>
            <p className="px-2 ">
              <Link
                className="text-blue-600 underline"
                href="mailto:edgard@ufop.edu.br"
              >
                edgard@ufop.edu.br
              </Link>
            </p>
          </div>
        </div>
      </SimplePageInfo>
    </div>
  );
}

export default index;
