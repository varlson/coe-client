import React, { useEffect, useState } from "react";
import { getSlides } from "../../services/api";
import Slide from "../admin/Slide";
import { newsData } from "../../test/datas";
import Icons from "../ui/Icons";
import Link from "next/link";

function SlideManager() {
  const dados = newsData.slice(0, 4);
  const [slide, setSlide] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isLoaded) {
      getSlides()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });

      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex ">
        {dados.length <= 4 ? (
          <Icons size="h-16" link="/adm/slides/add" icon="/icons/add.png" />
        ) : (
          <Icons size="h-16" link="" icon="/icons/add_disable.png" />
        )}
      </div>
      <div className="my-1 grid gap-5 grid-cols-3">
        {dados.map((item, index) => (
          <Slide title={item.title} img_url={item.img_url} />
        ))}
      </div>
    </div>
  );
}

export default SlideManager;
