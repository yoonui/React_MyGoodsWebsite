import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const GoodsDetails = () => {
  return (
    <div className="w-[100%] flex justify-center">
      <div className="flex my-8">
        <Swiper
          className="w-[350px] h-[350px]"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>GoodsDetails 1</SwiperSlide>
          <SwiperSlide>GoodsDetails 2</SwiperSlide>
        </Swiper>
        <div>
          <div>굿즈 이름</div>
          <div>해당하는 캐릭터</div>
          <div>설명 혹은 가격</div>
        </div>
      </div>
    </div>
  );
};

export default GoodsDetails;
