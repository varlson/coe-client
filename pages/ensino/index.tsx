import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import VideoPlayer from "../../components/ui/VideoPlayer";
import { videos } from "../../constants/constants";
import Button from "../../components/ui/Button";
import FuncButton from "../../components/ui/FuncButton";

function page() {
  const open = { status: true, arrow: "here-opened.png" };
  const close = { status: false, arrow: "here-closed.png" };
  const [quetions, setQuetions] = useState({
    catalog: close,
    relation: close,
  });
  const openClose = (e: MouseEvent<HTMLParagraphElement>) => {
    const catalogId = (e.target as HTMLParagraphElement).id;

    const catalocDiv = document.querySelector(
      `[data-id="${catalogId}"]`
    ) as HTMLPreElement;

    if (
      catalocDiv.style.maxHeight == "" ||
      catalocDiv.style.maxHeight == undefined ||
      catalocDiv.style.maxHeight == null
    ) {
      catalocDiv.style.maxHeight = catalocDiv.scrollHeight + "px";
      setQuetions((prev) => ({ ...prev, [catalogId]: open }));
    } else {
      catalocDiv.style.maxHeight = "";
      setQuetions((prev) => ({ ...prev, [catalogId]: close }));
    }
  };

  return (
    <div className="md:w-9/12 m-auto p-2 testess ">
      <div className="bg-darkRed p-2 rounded my-2">
        <p className="text-xl text-white">Ensino</p>
      </div>

      <div className="my-3 flex gap-5">
        <FuncButton button={{ label: "Sobre TCC", link: "#tcc" }} />
        <FuncButton
          button={{ label: "Estágio Curricular", link: "#est_curricular" }}
        />
        <FuncButton button={{ label: "Conc. da Ênfase", link: "#enfase" }} />
      </div>

      <fieldset
        id="tcc"
        className="rounded border border-dotted border-slate-600 p-3 font-Jura"
      >
        <legend className="p-2 flex gap-x-5">
          <img className="self-start w-8 " src="/icons/tcc.png" alt="" />
          <p className="font-bold self-end">Sobre TCC</p>
        </legend>

        <p className="p-2 ">
          O TCC é o trabalho de final de curso que deve obrigatoriamente ser
          desenvolvido por todos os alunos do curso de Engenharia Elétrica sob
          supervisor de um professor.
        </p>

        <div className="p-2">
          <p className="font-bold">Resulução</p>
          <p className="m-1 font-light">
            Resolução Nº <span className="font-bold">28/2022</span> Aprova as
            normas relativas à elaboração de trabalho de conclusão do curso de
            Engenharia Elétrica do Instituto de Ciências Exatas e Aplicadas da
            Universidade Federal de Ouro Preto.
          </p>
          <p className="m-1">
            Acesse a resolução{" "}
            <Link
              className="text-blue-500"
              target="blank"
              href="https://drive.google.com/file/d/1I2pPG0gLaZ8Pz0opREXVVQwazfm4V1KK/view"
            >
              aqui.
            </Link>
          </p>
        </div>

        <div className="my-2 grid grid-cols-2">
          <div className=" p-4 shadow-md rounded">
            <div className="flex">
              <div
                onClick={openClose}
                id="catalog"
                className="font-semibold cursor-pointer"
              >
                Como solicitar a ficha catalográfica no Sisbin
              </div>
              <img
                className="w-6"
                src={`/icons/${quetions.catalog.arrow}`}
                alt=""
              />
            </div>
            <p data-id="catalog" className="text-justify open-close my-1">
              É um documento com todas as informações bibliográficas de um
              livro, dissertação, tese ou monografia. Ela serve para
              identificação técnica da obra e é feita por um bibliotecário.
              Acesse o tutorial{" "}
              <Link
                target="blank"
                className="text-blue-500"
                href="https://drive.google.com/file/d/1QJKRs5rrWTuR4KXLPBqUD1-fsIHda7NS/view"
              >
                aqui
              </Link>
            </p>
          </div>

          <div className=" p-4 shadow-md rounded">
            <div className="flex">
              <div
                onClick={openClose}
                id="relation"
                className="font-semibold cursor-pointer"
              >
                Relação dos trabalhos em desenvolvimento
              </div>
              <img
                className="w-6 self-center"
                src={`/icons/${quetions.relation.arrow}`}
                alt=""
              />
            </div>
            <p data-id="relation" className="text-justify open-close my-1">
              Pode-se acompanhar os TCCs em curso clicando{" "}
              <Link
                className="text-blue-500"
                target="blank"
                href="https://docs.google.com/spreadsheets/d/1xeZQ1EliKp7gJWX68sDd3BM7uJUqeUYNDetu59Q7azA"
              >
                aqui
              </Link>
            </p>
          </div>
        </div>

        <div className="my-2">
          <VideoPlayer video={videos.about_tcc} />
        </div>
      </fieldset>

      <fieldset
        id="est_curricular"
        className="rounded p-2 my-2 border border-slate-600 border-dotted"
      >
        <legend className="p-2 flex gap-x-5">
          <img className="self-start w-8 " src="/icons/interning.png" alt="" />
          <p className="font-bold self-end">Estágio Curricular</p>
        </legend>

        <p className="my-2 font-light text-justify">
          <span className="font-bold">Art. 1º - </span> Alterar o § 2º do Art.
          2º que passa a vigorar com o seguinte texto: "O estágio curricular
          supervisionado não obrigatório poderá ser realizado após o discente
          ter obtido aprovação nas disciplinas ELT552 (Circuitos Elétricos I),
          ELT341 (Princípios de Eletrônica Digital) e CSI030 (Programação de
          Computadores), além de possuir coeficiente de rendimento semestral
          igual ou superior a 3,0 no semestre letivo imediatamente anterior ao
          que está sendo requisitado o pleito".
        </p>
        <p>
          Confira a resolução COEE nº 46
          <Link
            className="text-blue-500 mx-1"
            href="https://drive.google.com/file/d/1gJtfl-QX4CfOEoiBIzmbzSlKT3ldEDTM/view"
          >
            aqui
          </Link>
        </p>
        <p>
          <Link className="text-blue-500" href="" target="blank">
            Anexos editáveis
          </Link>
          - clicar em Arquivo, Fazer download, Microsoft Word (.docx)
        </p>

        <div className="my-5">
          <VideoPlayer video={videos.about_interning} />
          <div className="my-2 flex gap-x-2">
            <p className="">
              Coordenador de estágio: Prof. Felipe Eduardo Moreira Cota -
            </p>
            <p className="text-blue-500 underline"> felipecot@ufop.edu.br </p>
          </div>
        </div>
      </fieldset>

      <fieldset
        id="enfase"
        className="rounded p-2 my-2 border border-slate-600 border-dotted"
      >
        <legend className="p-2 flex gap-x-5">
          <img className="self-start w-8 " src="/icons/interning.png" alt="" />
          <p className="font-bold self-end">Concessão da Ênfase</p>
        </legend>

        <p className="my-2 font-light text-justify">
          O Colegiado do Curso de Engenharia Elétrica – COEE – do Departamento
          de Engenharia Elétrica do Campus de João Monlevade, da Universidade
          Federal de Ouro Preto, no uso de suas atribuições legais, considerando
          as disposições constantes da{" "}
          <span className="font-semibold underline ">
            {" "}
            Resolução 1010 de 22 de Agosto 2007 do CONFEA e a resolução CEPE
            3.620 da UFOP
          </span>
          , resolve estabelecer as normas relativas à Concessão da Ênfase para o
          Curso de Engenharia Elétrica, confira a resolução no link a seguir.
        </p>
        <p>
          Confira a Resolução nº 008 .
          <Link
            className="text-blue-500 mx-1"
            href="https://drive.google.com/open?id=1fKmYHPjsvf_vOnb2aEl597DC83gbRKC6"
          >
            aqui
          </Link>
        </p>

        <div className="my-5">
          <VideoPlayer video={videos.enphasy} />
        </div>
      </fieldset>
    </div>
  );
}

export default page;
