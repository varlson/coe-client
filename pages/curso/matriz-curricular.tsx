import Link from "next/link";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import SimplePageInfo from "../../components/partials/SimplePageInfo";

function index() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="w-9/12 m-auto px-2 font-Jura">
      <div className="title-wrap">
        <p className="title">Matriz curricular</p>
      </div>
      <SimplePageInfo img="timetable.png" subTitle="Matriz Curricular">
        <div className="my-2">
          <p>
            Acesse{" "}
            <span className="text-basicRed underline ">
              <Link
                target="blank"
                href="https://drive.google.com/drive/u/1/folders/1LuVBmyiDNib__B-bV4F6dTpi_JRhNQJ7"
              >
                aqui
              </Link>
            </span>{" "}
            a matriz curricular vigente e os programas das disciplinas do curso.
          </p>
        </div>

        <div className="my-1">
          <p className="my-1">
            <span className="text-basicRed underline">
              <Link href="" target="blank">
                Disciplinas do curso
              </Link>
            </span>
            - Antes de 2023/2
          </p>
          <p className="my-1 text-basicRed underline">
            <Link href="" target="blank">
              Fluxograma das Disciplinas do Curso
            </Link>
          </p>
        </div>
      </SimplePageInfo>
    </div>
  );
}

export default index;
