import React, { useEffect, useState } from "react";
import RightSideItem from "./RightSideItem";
import { clickHandle } from "../../src/util";
import { listPosts } from "../../services/api";
import { IPost } from "../../types/types";

function RightSide() {
  const [notices, setNotices] = useState<IPost[]>([]);
  useEffect(() => {
    const listNotices = async () => {
      listPosts(3)
        .then((posts) => {
          // console.log("notices from rigthside");
          // console.log(notices);
          setNotices(posts as IPost[]);
        })
        .catch((error) => {});
    };
    listNotices();
  }, []);

  // useEffect(() => {
  //   console.log("notices from rigthside");
  //   console.log(notices);
  // }, [notices]);

  return (
    <div className="font-Jura text-sm p-1">
      <RightSideItem
        icon="expand_arrow.png"
        clickHandle={clickHandle}
        label="Editais"
        contentName="editais"
        subMenus={notices}
      />

      {/* <RightSideItem
        contentName="tcc"
        icon="Chevron.png"
        clickHandle={clickHandle}
        label="TCCs"
        subMenus={[
          { label: "Edital-1", link: "/edital-1" },
          { label: "Edital-2", link: "/edital-2" },
          { label: "Edital-3", link: "/edital-3" },
          { label: "Edital-4", link: "/edital-4" },
        ]}
      />

      <RightSideItem
        contentName="resolution"
        icon="Chevron.png"
        clickHandle={clickHandle}
        label="Resoluções"
        subMenus={[
          { label: "Edital-1", link: "/edital-1" },
          { label: "Edital-2", link: "/edital-2" },
          { label: "Edital-3", link: "/edital-3" },
          { label: "Edital-4", link: "/edital-4" },
        ]}
      />

      <RightSideItem
        contentName="atv"
        icon="Chevron.png"
        clickHandle={clickHandle}
        label="ATVs"
        subMenus={[
          { label: "Edital-1", link: "/edital-1" },
          { label: "Edital-2", link: "/edital-2" },
          { label: "Edital-3", link: "/edital-3" },
          { label: "Edital-4", link: "/edital-4" },
        ]}
      /> */}
    </div>
  );
}

export default RightSide;
