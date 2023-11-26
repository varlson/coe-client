import React from "react";
import VideoPlayer from "../ui/VideoPlayer";
import { videos } from "../../constants/constants";

function Colegiate() {
  return (
    <div className="lg:w-9/12 m-auto font-Jura">
      <h3 className="about-title-texts">Sobre o Colegiado</h3>
      <div className="text-justify">
        <p className="about-texts">
          O Estatuto da Universidade Federal de Ouro Preto – UFOP, dispõe sobre
          a finalidade, composição e competências dos Colegiados de Curso,
          expressos nos artigos 23, 24 e 25, Capítulo I, Título VI.
        </p>

        <p className="about-texts">
          Já o regimento regulamenta o funcionamento dos Órgãos Colegiados,
          expressos nos artigo 2º até o 14, Capítulo I, Título II, aplicando-se
          aos colegiados de curso o que couber, uma vez que os órgãos colegiados
          desta universidade tem finalidade, composição e competências
          distintas.
        </p>
      </div>

      <div className="my-2 w-full">
        <VideoPlayer video={videos.about_colegiate} />
      </div>
    </div>
  );
}

export default Colegiate;
