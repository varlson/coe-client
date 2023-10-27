import React from "react";
import TableRow from "../../components/ui/TableRow";

function CoemEmNumeros() {
  return (
    <div className="font-Jura lg:w-9/12 m-auto">
      <p className="my-3 px-2 py-3 text-2xl bg-basicRed text-white text-center">
        COEE EM NUMEROS
      </p>

      <div className="my-2">
        <p className="my-3 p-2 text-2xl bg-darkRed text-white ">
          Quantitavos de Mátricula entre 2009-2021
        </p>

        <div className="shadow  p-2">
          <img src="/images/barGraph.png" alt="" className="w-full" />
        </div>
      </div>

      <div className="my-2">
        <p className="my-3 p-2 text-2xl bg-darkRed text-white ">
          Quantitavos de Diplomados entre 2014-2021
        </p>

        <div className="shadow  p-2">
          <img src="/images/2graph.png" alt="" className="w-full" />
        </div>
      </div>

      <div className="my-2">
        <p className="my-3 p-2 text-2xl bg-darkRed text-white ">
          Média por Diferentes Modos de Admissão entre 2000-2021
        </p>

        <div className="shadow  p-2">
          <img src="/images/pizza_graph.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default CoemEmNumeros;
