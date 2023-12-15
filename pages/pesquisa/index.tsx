import React from "react";
import SimplePageInfo from "../../components/partials/SimplePageInfo";

function index() {
  return (
    <div className="w-9/12 m-auto p-2">
      <div className="title-wrap">
        <p className="title">Projetos de Pesquisas</p>
      </div>

      <SimplePageInfo
        img="cientific_search.png"
        subTitle="Projetos de Pesquisas"
      >
        <div className="font-Jura">
          <p>Projetos de pesquisas</p>
        </div>
      </SimplePageInfo>
    </div>
  );
}

export default index;
