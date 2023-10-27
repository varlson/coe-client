import React from "react";

function Nde() {
  return (
    <div className="lg:w-9/12  m-auto font-Jura">
      <h3 className="about-title-texts">Sobre o NDE</h3>

      <p className="about-texts">
        O Núcleo Docente Estruturante - NDE foi instituído na Universidade
        Federal de Ouro Preto pela Resolução CEPE nº 4450 de 29/04/2011, em
        atendimento à Resolução CONAES nº 01/2010 com a finalidade de contribuir
        para a qualidade dos Cursos de Graduação.
      </p>

      <p className="about-texts">
        O NDE não possui caráter deliberativo, devendo suas decisões serem
        encaminhadas ao Colegiado.
      </p>

      <p className="about-texts">
        No âmbito do curso de Engenharia de Produção/ICEA, o NDE/EP foi
        reconstituído a partir da indicação do COEP, sendo seu marco inicial a
        Portaria ICEA nº 05 de 09 de junho de 2019.
      </p>

      <p className="about-texts">
        Segundo a Resolução CEPE nº 4450/2011, são atribuições do NDE:
      </p>

      <div className="my-2">
        <span className="about-texts font-bold">“Art. 2º</span>
        <p className="about-texts italic text-justify">
          Nos termos da Resolução CONAES nº 01/2010, cada Núcleo Docente
          Estruturante terá competência acadêmica de acompanhamento e de atuação
          nos processos de concepção, consolidação e contínua atualização do
          projeto pedagógico do curso e, sem prejuízo de outras atribuições
          complementares, deverá:
        </p>

        <ol className="list-disc list-inside font-Jura text-justify ">
          <li className="mb-2">
            <span className="italic mx-1 font-bold">I - </span>
            Contribuir para a consolidação do perfil profissional do egresso do
            curso;
          </li>

          <li className="mb-2">
            <span className="italic mx-1 font-bold">II - </span>
            Zelar pela integração curricular interdisciplinar entre as
            diferentes atividades de ensino constantes no currículo;{" "}
          </li>

          <li className="mb-2">
            <span className="italic mx-1 font-bold">III - </span>
            Indicar formas de incentivo ao desenvolvimento de linhas de pesquisa
            e extensão, oriundas de necessidades da graduação, de exigências do
            mercado de trabalho e afinadas com as políticas públicas relativas à
            área de conhecimento do curso;
          </li>

          <li className="mb-2">
            <span className="italic mx-1 font-bold">IV - </span>
            IV - zelar pelo cumprimento das Diretrizes Curriculares Nacionais
            para os Cursos de Graduação.
            <span className="font-bold font-Jura">"</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Nde;
