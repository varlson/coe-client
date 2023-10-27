import React, { useEffect, useState } from "react";
import { INews, IPost, userType } from "../../types/types";
import Spinner from "../ui/Spinner";
import { dataFormater } from "../../services/util";
import { listUser } from "../../services/api";
import Link from "next/link";
type NewsProps = {
  news: IPost;
  isPost: boolean;
};

function NewsCard({ isPost, news }: NewsProps) {
  const [authorName, setAuthorName] = useState("");
  const autor = news?.author;
  const dateformated = dataFormater(news?.createdAt);

  useEffect(() => {
    const getAuthorName = async () => {
      listUser(autor)
        .then((user) => {
          const _user = user as userType;
          setAuthorName(_user.name);
        })
        .catch((error) => {
          setAuthorName("Desconhecido");
        });
    };

    getAuthorName();
  }, []);

  return (
    <div className="font-Jura">
      <p className="bg-basicBlack text-white my-5 p-7 font-bold  rounded text-xl">
        {news.title}
      </p>
      {isPost && (
        <img
          className=" object-cover w-full md:h-96 rounded-md"
          src={news.img}
          alt=""
        />
      )}
      <div className=" text-xs my-2">
        <span>{`${dateformated} por, `}</span>
        <span className="font-bold">
          <em>{authorName}</em>
        </span>
      </div>
      <div className="my-5">{news.body}</div>
      {!isPost && (
        <div className="my-2 flex gap-x-2 items-end">
          <p>Interessados em participar devem acessar o </p>
          <Link href={news.img} target="blank">
            <div className="flex items-end underline">
              <p>edital</p>
              <img
                className="w-7 h-7 object-cover"
                src="/icons/pdf.png"
                alt=""
              />
            </div>
          </Link>
          <p>para mais informações</p>
        </div>
      )}
    </div>
  );
}

export default NewsCard;
