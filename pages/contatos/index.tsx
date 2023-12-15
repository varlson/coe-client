import React from "react";
import NavbarItem from "../../components/ui/NavbarItem";
import Link from "next/link";
import VideoPlayer from "../../components/ui/VideoPlayer";
import { videos } from "../../constants/constants";

function index() {
  return (
    <div className="w-9/12 m-auto ">
      <div className="title-wrap ">
        <p className="title">Contatos</p>
      </div>
      <NavbarItem>
        <div className="my-2">
          <p className="underline underline-offset-2 font-semibold">
            Secretaria do Colegiado da Engenharia Elétrica:
          </p>
          <p>
            <span className="font-semibold mr-2">Endereço:</span>
            Rua 36, 115 - Loanda, João Monlevade - MG, 35931-008 - Sala A109
          </p>
          <p>
            <span className="font-semibold mr-2 ">Secretária:</span>
            Naira Mota Araújo
          </p>
        </div>

        <div className="my-2 font-Jura">
          <p className="underline underline-offset-2 font-semibold">
            Atendimento remoto:
          </p>
          <div>
            <ul className="ml-6 list-disc">
              <li>Segunda a sexta-feira, das 8h às 12h</li>
              <li>Segunda a sexta-feira, das 8h às 12h</li>
              <li>Segunda e sexta-feira: 13h às 17h</li>
              <li>
                E-mail e chat:{" "}
                <span className="text-blue-600 underline">
                  <Link href="mailto:coee@ufop.edu.br">coee@ufop.edu.br</Link>
                </span>
              </li>
              <li className="">
                <Link
                  className="text-blue-600 underline"
                  href="https://wa.me/553138080833"
                >
                  Whatsapp: 31 3808-0833
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-2 font-Jura">
          <p className="underline underline-offset-2 font-semibold">
            Atendimento Presencial:
          </p>
          <div>
            <ul className="ml-6 list-disc">
              <li>Terça a quinta-feira, das 13h às 17h</li>
              <li>
                E-mail e chat:{" "}
                <span className="text-blue-600 underline">
                  <Link href="mailto:coee@ufop.edu.br">coee@ufop.edu.br</Link>
                </span>
              </li>
              <li>Telefone: 31 3808-0833</li>
            </ul>
          </div>
        </div>

        <div className="my-2 font-Jura">
          <p className="underline underline-offset-2 font-semibold">
            Coordenação do COEE
          </p>
          <div className="flex gap-x-2">
            <p>Coordenador: Prof. Renan Fernandes Bastos </p>
            <Link
              className="underline text-blue-600"
              href="mailto:renan.bastos@ufop.edu.br"
            >
              renan.bastos@ufop.edu.br
            </Link>
          </div>
        </div>
      </NavbarItem>

      <div className="my-2">
        <VideoPlayer video={videos.contact} />
      </div>
    </div>
  );
}

export default index;
