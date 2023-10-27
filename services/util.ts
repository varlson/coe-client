import {
  ExpandCurso,
  ExpandInfra,
  ExpandInicio,
  ExpandPesquisa,
  ExpandBolsa,
} from "../components/ui/Ui";

export function subNavSwitcher(id: string) {
  let component;
  switch (id) {
    case "initial": {
      component = ExpandInicio;
    }

    case "curso": {
      component = ExpandCurso;
    }

    case "infra": {
      component = ExpandInfra;
    }

    case "pesquisa": {
      component = ExpandPesquisa;
    }

    case "bolsa": {
      component = ExpandBolsa;
    }
  }

  return component;
}

export const IncialValue: any = {
  inicio: false,
  curso: false,
  infra: false,
  pesquisa: false,
  bolsa: false,
};

const thereIsOpen = (hideElement: any) => {};

export const dataFormater = (date: string) => {
  const data = new Date(date);
  const opcoes = { day: "2-digit", month: "2-digit", year: "numeric" };
  const dataFormatada = data.toLocaleDateString("pt-BR", opcoes as never);

  return dataFormatada;
};
