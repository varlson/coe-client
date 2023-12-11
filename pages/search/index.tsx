"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { searchQuery } from "../../services/api";
import { IPost } from "../../types/types";
import Link from "next/link";
import { dataFormater } from "../../services/util";
import Search from "./Search";

function page() {
  const [height, setHeight] = useState(0);
  const [searchQueryItems, setSearchQueryItems] = useState<IPost[]>([]);
  const [errorHandler, setErrorHandler] = useState("");
  const [query, setQuery] = useState("");
  const [start, setStart] = useState(false);
  const searchSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchQuery(query as string)
      .then((resp) => {
        setSearchQueryItems(resp as IPost[]);
        if (resp.length >= 1) {
          setStart(false);
        } else {
          setStart(true);
        }
        console.log("search query");
        console.log(resp);
        console.log(resp.length);
      })
      .catch((error: any) => {
        console.log("search query");
        console.log(error);
        setErrorHandler(error);
      });
  };

  useEffect(() => {
    const header = document.getElementById("header") as HTMLDivElement;
    const footer = document.getElementById("footer") as HTMLDivElement;
    const search = document.getElementById("search") as HTMLDivElement;
    const headerFooter = header.clientHeight + footer.clientHeight;
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    search.style.minHeight = `${viewportHeight - headerFooter}px`;

    // searchHandler();
  }, []);

  return (
    <div className="bg-slate-300">
      <div id="search" className="grid smy-5 w-9/12 m-auto p-2 ">
        <form
          action=""
          className="flex self-center justify-self-center  bg-white rounded-md shadow-md"
          onSubmit={searchSubmitHandler}
        >
          <input
            className="m-1 focus:border-none focus:outline-none h-9 px-5 w-96"
            type="text"
            name="query"
            placeholder="Digite palavras chaves ou autor do post ... "
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="h-10 " type="submit">
            <img
              className="  h-full self-center"
              src="/icons/red-search.png"
              alt=""
            />
          </button>
        </form>
        <div className="mt-10 mb-5">
          {searchQueryItems.length == 0 && start ? (
            <div>
              <p className="text-2xl text-basicRed text-center">
                Sem resultados
              </p>
            </div>
          ) : (
            <div className="my-2 ">
              {searchQueryItems.map((item, index) => (
                <div className="my-3">
                  <Search item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
