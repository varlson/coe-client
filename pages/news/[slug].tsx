import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPostItem } from "../../services/api";
import PageLoader from "../../components/ui/PageLoader";
import { IPost } from "../../types/types";
import NewsCard from "../../components/partials/NewsCard";

const getDatas = async (id: string) => {
  const fetchOptions = {
    method: "GET",
  };
  const url = "http://localhost:3222/api/posts/" + id;
  const resp = await fetch(url, fetchOptions);
  const post = await resp.json();
  return post;
};

function page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clickedPost, setClickedPost] = useState<IPost>();
  const [isPost, setIsPost] = useState(true);
  const { query } = useRouter();
  const slug = query.slug;
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDatas(query.slug as string);
      const data: IPost = resp.post;
      setIsPost(data.postType == 3 ? false : true);
      setClickedPost(data);
      setIsLoading(false);
    };
    if (query.slug) {
      fetchData();
    }
  }, [query.slug]);

  if (isLoading)
    return (
      <div className="flex iems-center justify-center">
        <PageLoader color="" />
      </div>
    );

  return (
    <div className="m-auto md:w-9/12 text-justify p-2 md:p-0">
      <NewsCard isPost={isPost} news={clickedPost as IPost} />
    </div>
  );
}

export default page;
