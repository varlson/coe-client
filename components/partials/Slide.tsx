import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";
import SlideItem from "./SlideItem";
import { useEffect, useState } from "react";
import { IPost } from "../../types/types";
import { getSlides } from "../../services/api";

export default function Slide() {
  useEffect(() => {
    const listSlides = async () => {
      const resp = await getSlides();
      const _slides: IPost[] = resp.slides;
      setSlides(_slides);
    };

    listSlides();
  }, []);

  const [slides, setSlides] = useState<IPost[]>([]);

  if (!slides.length) {
    return (
      <div className="my-3">
        <p className="text-center text-basicRed text-2xl">
          Slides não foram adicionados ainda
        </p>
      </div>
    );
  }

  return (
    <div className="bg shadow-xl">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-[calc(100vh-50vh)] md:h-[calc(100vh-45vh)] lg:h-[calc(100vh-35vh)]  grid p-2"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slideItem) => (
          <SwiperSlide key={slideItem._id} className=" text-center ">
            <div className="">
              <SlideItem slide={slideItem} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// export default function Slide() {
//   const [slides, setSlides] = useState<IPost[]>([]);

//   return (
//     <div className="bg shadow-xl">
//       <Swiper
//         navigation={true}
//         modules={[Navigation, Autoplay]}
//         className="h-[calc(100vh-50vh)]s md:h-[calc(100vh-45vh)] lg:h-[calc(100vh-35vh)]  grid p-2"
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//       >
//         {slides && {slides.map((slideItem:IPost, index:number) => (
//           <SwiperSlide key={slideItem.id} className=" text-center ">
//             <div className="">
//               <SlideItem slide={slideItem} />
//             </div>
//           </SwiperSlide>
//         ))}}
//       </Swiper>
//     </div>
//   );
// }
