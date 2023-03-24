import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainPage = () => {
  return (
    <div>
      <Swiper
        className="my-4 h-80"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-between m-20">
        <div className="border-[3px] border-main-color w-[380px] h-[380px]">
          이미지1
        </div>
        <div className="border-[3px] border-main-color w-[380px] h-[380px]">
          이미지2
        </div>
        <div className="border-[3px] border-main-color w-[380px] h-[380px]">
          이미지3
        </div>
      </div>
    </div>
  );
};

export default MainPage;
