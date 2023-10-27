import React, { useEffect, useState } from "react";
import { newsData } from "../../test/datas";
import { Cards } from "../ui/Cards";
import LeftSide from "../ui/LeftSide";
import RightSide from "../ui/RightSide";
import Sides from "../ui/RightSideItem";
import { clickHandle } from "../../src/util";
import Slide from "../partials/Slide";
import { GetServerSideProps } from "next";
import { getPosts } from "../../services/api";
import { IPost } from "../../types/types";

interface IndexProps {
  data: IPost[]; // Replace 'any' with the actual type of your data
}
function Index() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const listPosts = async () => {
      const resp = await getPosts();
      const datas: IPost[] = resp.slides;
      setPosts(datas);
    };

    listPosts();
  }, []);

  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-12 slide-area m-0">
        <div className="w-10/12 m-auto p-2">
          <Slide />
        </div>
      </div>
      <div className="hidden lg:block  mt-11">
        <LeftSide />
      </div>
      <div className="p-2 col-span-12 lg:col-span-10  ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-2 p-2">
          {posts.map((postItem: IPost, index: number) => (
            <div key={postItem._id}>
              <Cards post={postItem} />
            </div>
          ))}
        </div>

        {posts.length == 0 && (
          <div className="font-bold  p-2 my-2 text-2xl text-darkRed flex justify-center items-center">
            <p>Ainda não foram adicionados posts</p>
          </div>
        )}
      </div>

      <div className="hidden lg:block  mt-11">
        <RightSide />
      </div>
    </div>
  );
}

export default Index;
