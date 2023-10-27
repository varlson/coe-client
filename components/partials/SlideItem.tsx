import React, { useState } from "react";
import { IPost, SlideProps } from "../../types/types";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import ImageLoader from "../ui/ImageLoader";

function SlideItem({ slide }: { slide: IPost }) {
  const [imageLoading, setImageLoading] = useState(true);
  const loadingHandler = () => {
    setImageLoading(false);
  };
  return (
    <div>
      <Link href={`/news/${slide._id}`}>
        <SwiperSlide className=" relative">
          <div className=" hidden lg:block absolute lg-title-item w-full">
            <div className="flex h-full">
              <p className="bg-slide-title self-end w-9/12 mx-auto p-3 rounded text-white">
                {slide.title}
              </p>
            </div>
          </div>
          <div className=" lg:hidden flex bottom-2 md:bottom-10 p-3 slide-title">
            <div className="rounded md:py-4 py-2 w-full md:w-9/12 m-auto bg-slide-title">
              <p>{slide.title}</p>
            </div>
          </div>
          <img
            onLoad={loadingHandler}
            className="w-full object-fill slideHeigth rounded"
            src={slide.img}
            alt=""
          />
          {imageLoading && (
            <div className="flex items-center justify-center h-76">
              <ImageLoader />
            </div>
          )}
        </SwiperSlide>
      </Link>
    </div>
  );
}

export default SlideItem;
