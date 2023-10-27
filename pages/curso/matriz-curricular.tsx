import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

function index() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="w-9/12 m-auto px-2 font-Jura">
      <div className="bg-darkRed p-2 rounded my-2">
        <p className="text-xl text-white">Matriz curricular</p>
      </div>

      <div>
        <h1>PDF Viewer</h1>
        <Document
          file="your-pdf-file.pdf" // Substitua com o caminho para o seu arquivo PDF
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Página {pageNumber} de {numPages}
        </p>
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          Anterior
        </button>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default index;
