import Button from "./Button";

// @flow
type CardProps = {
  title: string;
  resume: string;
  date: string;
  img: string;
};
import { INews, IPost } from "../../types/types";
import { splitter } from "../../src/util";
import Link from "next/link";
import { dataFormater } from "../../services/util";
export function Cards({ post }: { post: IPost }) {
  return (
    <div className=" font-Jura border p-2 shadow m-2 flex flex-col ">
      <div>
        <img
          className="object-fill  h-48 w-80 rounded "
          src={post.img}
          alt=""
        />
      </div>

      <div className="mb-1 ">
        <p className="titile-height text-sm font-semibold">{post.title}</p>
      </div>

      <div className="">
        <p className="body-height font-thin text-justify text-sm p-1 my-2">
          {splitter(post.body)}
        </p>
      </div>

      <div className="text-gray-500 flex items-end justify-between">
        <p className="m-1  text-xs">{dataFormater(post.createdAt)}</p>
        <Link href={`news/${post._id}`}>
          <Button label="Ver mais" />
        </Link>
      </div>
    </div>
  );
}
