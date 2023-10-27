import { labsInfoType, menuTogleType } from "../types/types";

export const submenus: menuTogleType[] = [
  {
    label: "Inínio",
    id: "inicio",
    subMenus: [
      {
        label: "Sobre Colegiado",
        link: "/sobre-colegiado",
      },

      {
        label: "Sobre NDE",
        link: "/sobre-nde",
      },

      {
        label: "Sobre NDEE",
        link: "/sobre-ndee",
      },

      {
        label: "COEE em Números",
        link: "/coe-em-numeros",
      },
    ],
  },

  {
    label: "Curso",
    id: "curso",
    subMenus: [
      {
        label: "Graduação",
        link: "/graduacao",
      },

      {
        label: "Matriz Curricular",
        link: "/matriz-curricular",
      },

      {
        label: "Docentes",
        link: "/docentes",
      },

      {
        label: "Ementas",
        link: "/ementas",
      },

      {
        label: "Projeto Pedagógico",
        link: "/projeto-pedagogico",
      },

      {
        label: "Avaliação",
        link: "/avaliacao",
      },
    ],
  },

  {
    label: "Infraestratura",
    id: "infra",
    subMenus: [
      {
        label: "Lab de C. E.",
        link: "/lab-ce",
      },

      {
        label: "Lab de E. A",
        link: "/lab-ea",
      },

      {
        label: "Lab de S.E.I.",
        link: "/lab-sei",
      },

      {
        label: "Lab de R.",
        link: "/lab-r",
      },

      {
        label: "Lab de P. de S.",
        link: "/lab-ps",
      },

      {
        label: "Lab de E. D.",
        link: "/lab-ed",
      },
    ],
  },

  {
    label: "Pesq. e Extensão",
    id: "pesquisa",
    subMenus: [
      {
        label: "Grupos de Pesquisas",
        link: "/grupo-pesquisa",
      },

      {
        label: "Projetos de Pesquisa",
        link: "/projeto-pesquisa",
      },

      {
        label: "Projeto de Extensão",
        link: "/projeto-exensao",
      },
    ],
  },

  {
    label: "Bolsa",
    id: "bolsa",
    subMenus: [
      {
        label: "Pesquisa e IC",
        link: "/pesquisa-ic",
      },

      {
        label: "Extensão",
        link: "bolsa-extensao",
      },

      {
        label: "Institucional",
        link: "/bolsa-institucional",
      },

      {
        label: "Pro-Ativa",
        link: "/proativa",
      },

      {
        label: "Monitoria",
        link: "/monitoria",
      },

      {
        label: "Prace",
        link: "/prace",
      },
    ],
  },
];

export const labs: labsInfoType[] = [
  {
    title: "Laboratório de circuitos elétricos",
    preText:
      "Os alunos aprendem a manusear equipamentos e ferramentas de corrente contínua (CC), primeiramente, e de corrente alternada (CA), na sequência, no Laboratório de Circuitos Elétricos. No que se refere aos circuitos de corrente contínua, são aplicadas as leis gerais, que também são similarmente em termos de circuitos de corrente alternada; tais como transformação estrela triângulo e vice-versa, teorema da transposição e leis de Kirchhoff, dentre outras.",
    posText:
      "Ao final, dever-se-á ser capaz de analisar os circuitos em CC e CA de acordo com os seguintes tópicos: excitação senoidal e fasores; análise em regime permanente; potência em regime permanente; circuitos trifásicos; frequência complexa e funções de rede; resposta em frequência; circuitos acoplados magneticamente e filtros Passivos.",
    img: "/labs/c_eletr.jpg",
    isLeft: true,
  },
  {
    title: "Laboratório de eletrônica analógica",
    preText:
      "O laboratório de eletrônica analógica atende diversas disciplinas práticas do curso de engenharia elétrica e engenharia de computação. A sua principal missão é que os alunos destes cursos possam realizar ensaios e práticas das disciplinas que tenham em sua ementa unidades relacionadas a eletrônica e eletrotécnica. ",
    posText:
      "Para isso, o laboratório conta com diferentes recursos e equipamentos como fontes de alimentação ajustável, osciloscópios, protoboard, multímetros, computadores, diversos componentes eletrônicos, etc. O laboratório possui um técnico que auxilia na execução das aulas práticas e é responsável pela organização do espaço e equipamentos. Além de auxiliar e acompanhar os alunos que necessitem usar o laboratório fora dos horários das aulas. Além do técnico, o laboratório possui um coordenador responsável.",
    img: "/labs/eletr_anal.jpg",
    isLeft: false,
  },
  {
    title: "Laboratório de controle e automação",
    preText:
      "O Laboratório de Controle e Automação foi projetado para lecionar o conteúdo prático das disciplinas do curso de Engenharia Elétrica relacionadas à área de Sistemas de Controle. O Laboratório de Controle e Automação é dividido em três salas, H204, H205 e H206. A sala H204 pode ser utilizada para montagens de experimentos, de kits móveis e para a realização de experimentos utilizando o braço robótico (Arm Robot Trainner ARM-7220-4).",
    posText:
      "Na sala H205 podem ser realizados experimentos utilizando plataformas de simulação de uma linha de produção (Planta Automation trainner ED-4031). Na sala H206 podem ser realizados experimentos utilizando plataformas de simulações de automatização de um ambiente industrial (PLC Exsto XC 103 e Exsto XC 201), assim como também a Planta Didática da Smar com Tecnologia Foundation Fieldbus.",
    img: "/labs/cont_autom.jpg",
    isLeft: true,
  },

  {
    title: "Laboratório de sistemas elétricos industriais",
    preText:
      "Laboratório destinado às práticas das máquinas elétricas estacionárias (transformadores) e as máquinas elétricas girantes (motores e geradores). Também se destina a este laboratório as práticas associadas às interfaces eletrônicas de potências aplicadas aos sistemas elétricos de potência (SEP) como retificadores, inversores e compensadores estáticos. ",
    posText:
      " As medidas elétricas em corrente alternada, trifásicas bem como medidas de potência e correção do fator de potência e práticas para a Qualidade de Energia  (QEE) também são  experimentadas neste espaço.",
    isLeft: false,
    img: "/labs/sis_eletr.jpg",
  },

  {
    title: "Laboratório de radiofrequência",
    preText:
      "O Laboratório de Telecomunicações - Radiofrequências é destinado ao desenvolvimento de atividades práticas das seguintes disciplinas da área de Telecomunicações lecionadas para os cursos de Engenharia Elétrica e Engenharia de Computação: Fundamentos de Comunicações, Propagação de Ondas de Rádio e Antenas.",
    posText:
      "O laboratório é equipado com geradores de sinais AM/FM, analisadores de espectro, multímetros de alta precisão, kit didático de antenas e conta ainda com um gateway para comunicação LoRa. O laboratório também é utilizado para o desenvolvimento de projetos de final de curso (TCC), atividades de extensão relacionadas à área de Telecomunicações e Projeto Integrador.",
    isLeft: true,
    img: "/labs/rad_freq.jpg",
  },

  {
    title: " Laboratório de processamento de sinais",
    preText:
      "O Laboratório de Telecomunicações – Processamento Digital de Sinais é direcionado principalmente ao desenvolvimento de atividades de ensino dos alunos de graduação dos cursos de Engenharia Elétrica e Engenharia de Computação durante a realização das aulas práticas das disciplinas de Sinais e Sistemas, Fundamentos de Comunicação, Processamento Digital de Sinais e das eletivas da ênfase de telecomunicações do curso.",
    posText:
      " Também é utilizado para desenvolvimento de trabalho final de curso, iniciação científica, pesquisas e atividades de extensão nas áreas de telecomunicações, processamento de sinais e aprendizado de máquina.Trata-se de um espaço equipado com computadores, osciloscópios, geradores de função, placas de aquisição de dados da National Instruments, um ambiente de câmara acústica e kits para aquisição de sinais de fala, vídeo, biométricos, entre outros.",
    isLeft: true,
    img: "/labs/proc_sinais.jpg",
  },
];

export const gradutationText =
  "Com início no segundo semestre de 2009, o curso com modalidade de bacharelado fica localizado no Instituto de Ciências Exatas e Aplicadas (ICEA). O curso tem cinco anos de duração, nos turnos vespertino e noturno. Visa à formação de profissionais com estudos teóricos baseados na eletricidade, no cálculo, na informática e na eletrônica.\nO bacharel em Engenharia Elétrica estará apto a atuar em áreas industriais, desenvolvendo projetos, gerenciando sistemas elétricos e sistemas de automação. Há também a possibilidade de trabalhar em vertentes mais criativas e críticas, aliando questões sociais ligadas à área, como contexto social, político e ambiental, questionados na graduação.\n Proporcionando mais liberdade de escolha de interesses do aluno, o curso oferece três opções de ênfase: Sistemas Elétricos, Sistemas de Controle e Telecomunicações. A formação sólida em tecnologia e ciência não é o único objetivo do curso. Graduar profissionais empreendedores, dinâmicos e criativos também é sua meta. O curso capacita o aluno a ser um profissional capaz de atuar em um mercado inconstante, que precisa de dinamismo e rápida adaptação.";
