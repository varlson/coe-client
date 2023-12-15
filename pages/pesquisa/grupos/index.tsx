import React from "react";
import SimplePageInfo from "../../../components/partials/SimplePageInfo";

function index() {
  return (
    <div className="w-9/12 m-auto ">
      <div className="title-wrap">
        <p className="title">Grupos de Pesquisa</p>
      </div>

      <SimplePageInfo img="search_group.png" subTitle="Grupo de Pesquisas">
        <div className="mt-2 mb-5 font-Jura">
          <p className="my-1 font-semibold">
            Aplicações de Smart Grids nos Sistemas Elétricos de Potência
            (GASGSEP)
          </p>
          <p className="text-justify font-Jura">
            Este grupo desenvolve trabalhos na área de análise e otimização de
            sistemas elétricos de potência (SEP) em regimes permanente e
            transitório, considerando o contexto das Smart Grids e energias
            renováveis. Além de visar as cidades inteligentes. Dentro destes
            cenarios estuda-se os fenômenos de qualidade da energia e a proteção
            dos sistemas elétricos.
          </p>
        </div>

        <div className="mt-2 mb-5 font-Jura">
          <p className="my-1 font-semibold">
            Modelagem, Identificação, Instrumentação e Controle (MI2C)
          </p>
          <p className="text-justify font-Jura">
            Este grupo desenvolve trabalhos nas seguintes áreas: análise e
            projeto de sistemas de controle avançado; análise, modelagem e
            identificação de sistemas; e filtragem estocástica de sistemas
            dinâmicos.
          </p>
        </div>

        <div className="mt-2 mb-5 font-Jura">
          <p className="my-1 font-semibold">
            Processamento de Sinais, Inteligência Computacional e
            Telecomunicações (GPSICT)
          </p>
          <p className="text-justify font-Jura">
            Este grupo de pesquisa está inseridos na linha de pesquisa de
            Controle e Processamento de Sinais. Os projetos desenvolvidos
            consideram bases de dados reais para propor soluções de
            desenvolvimento de sistemas e aprimoramento das taxas de acerto, com
            simulações de sistemas em tempo real e estratégias avançadas de
            processamento de dados e inteligência computacional, por exemplo, em
            processos de mineração e problemas biomédicos.
          </p>
        </div>
      </SimplePageInfo>
    </div>
  );
}

export default index;
