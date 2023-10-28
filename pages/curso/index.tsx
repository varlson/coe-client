import React from "react";
import { gradutationText } from "../../constants/constants";

function index() {
  return (
    <div className="w-9/12 m-auto px-2 font-Jura">
      <div className="bg-darkRed p-2 rounded my-2">
        <p className="text-xl text-white">Graduação</p>
      </div>

      <div className="my-2 text-justify">
        {gradutationText.split("\n").map((text, index) => (
          <p className="my-2 font-Jura" key={index}>
            {text}
          </p>
        ))}
      </div>

      <div className="my-2 font-Jura">
        <p className="font-bold text-xl">Áreas de atuação:</p>
        <p className="text-justify my-1">
          A aplicação de toda a teoria e prática adquiridas ao longo da
          graduação capacita o graduado a desenvolver dispositivos
          eletroeletrônicos que solucionam problemas em diversas áreas. O
          engenheiro elétricista está apto a projetar, desenvolver e gerenciar
          sistemas elétricos, de automação e telecomunicação. Poderá também
          aplicar conceitos do curso em outras áreas de conhecimento, como
          continuação de estudos em cursos de pós-graduação para exercer
          carreira na área de ensino e pesquisa.
        </p>
      </div>

      <table className="border-collapse border border-slate-400 w-full p-2 my-3">
        <thead>
          <tr>
            <th className="p-2 border border-slate-300">Modalidade</th>
            <th className="p-2 border border-slate-300">Duração</th>
            <th className="p-2 border border-slate-300">Vagas</th>
            <th className="p-2 border border-slate-300">Turnos</th>
            <th className="p-2 border border-slate-300">Campus</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-2 border border-slate-300 ...">Bacharelado</td>
            <td className="p-2 border border-slate-300 ...">10 semestres</td>
            <td className="p-2 border border-slate-300 ...">40</td>
            <td className="p-2 border border-slate-300 ...">
              Vespertino e noturno
            </td>
            <td className="p-2 border border-slate-300 ...">
              João Monlevade/MG
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default index;
