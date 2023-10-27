import Link from "next/link";
import React from "react";

function Ndee() {
  return (
    <div className="lg:w-9/12  m-auto font-Jura">
      <h3 className="about-title-texts">Membros de NDE</h3>
      <div className="my-2">
        Acesse{" "}
        <span className="underline text-blue-600">
          <Link href="https://docs.google.com/spreadsheets/d/1rYkWVPnZk7eQMFOf9SNnnHe0yBOSE8m8/edit#gid=372138676">
            esse link
          </Link>
        </span>{" "}
        para conhecer os membros do Núcleo Docente Estruturante da Engenharia
        Elétrica
      </div>
    </div>
  );
}

export default Ndee;
