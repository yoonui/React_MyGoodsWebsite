import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const GoodsDetailsPage = () => {
  return (
    <div className="flex justify-center mt-10 mb-16">
      <div className="flex my-10 w-[60%]">
        <div>
          <Swiper
            className="w-[500px] h-[500px]"
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
        </div>
        <div className="w-[100%] ml-10">
          <div className="text-2xl font-Kim700">굿즈 이름</div>
          <div className="border-[2px] border-black my-2"></div>
          <div className="my-2 text-footer font-Kim300">해당하는 캐릭터</div>
          <div className="my-2 font-Kim400">설명 혹은 가격</div>
          <button className="w-[100%] font-bold tracking-wider text-white bg-secondary-color hover:bg-secondary-color-bold py-3 text-center mt-6">
            찜하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsDetailsPage;
