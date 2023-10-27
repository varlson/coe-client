import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { newsData } from "../../test/datas";
import { INews, IPost } from "../../types/types";
import { filter } from "../../src/util";
import NewsCard from "../../components/partials/NewsCard";
import Spinner from "../../components/ui/Spinner";
import { getPostItem } from "../../services/api";

function News({ data }) {
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState<INews | string>("");

  useEffect(() => {
    const getOneItem = async (id: string) => {
      const resp = await getPostItem(id);
      const onePost: IPost = resp.post;
      console.log("one");
      console.log(onePost);
      setPost(onePost);
    };
    if (id) {
      console.log("slug", id);
      getOneItem(id);
    }
  }, [id]);

  if (isLoading)
    return (
      <div className="m-auto w-9/12 flex justify-center">
        <Spinner />
      </div>
    );
  return (
    <div className="m-auto md:w-9/12 text-justify p-2 md:p-0">
      {" "}
      <NewsCard news={post} />
    </div>
  );
}

export default News;
