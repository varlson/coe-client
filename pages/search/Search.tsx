"use client";
import React, { useEffect, useState } from "react";
import { IPost, userType } from "../../types/types";
import Link from "next/link";
import Spinner from "../../components/ui/Spinner";
import { listUser } from "../../services/api";
import { dataFormater } from "../../services/util";

function Search({ item }: { item: IPost }) {
  const [isLoading, setIsLoading] = useState(true);
  const [authorName, setAuthorName] = useState("Desconhecido");
  useEffect(() => {
    const getAuthorName = async () => {
      listUser(item.author)
        .then((user) => {
          const _user = user as userType;
          setAuthorName(_user.name);
          setIsLoading(false);
        })
        .catch((error) => {
          setAuthorName("Desconhecido");
          setIsLoading(false);
        });
    };

    getAuthorName();
  }, []);

  if (isLoading)
    return (
      <div className="w-9/12m-auto flex items-start justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="divide-y-2 bg-white shadow-md p-2 rounded font-Jura">
      <Link href={`news/${item._id}`}>
        <p className=" underline underline-offset-4 text-blue-400 font-semibold">
          {item.title}
        </p>
        <p className="font-ligth text-sm">{item.resumo}</p>
        <div className="font- font-medium text-xs">
          <p>{`Por ${authorName} - ${dataFormater(item.createdAt)}`}</p>
        </div>
      </Link>
    </div>
  );
}

export default Search;
