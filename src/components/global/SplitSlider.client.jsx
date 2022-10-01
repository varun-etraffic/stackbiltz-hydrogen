import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

export function SplitSlider() {
  return ( 
    <>
      <Swiper
        className={`swiper-split-slider max-h-screen`}
        direction={"vertical"}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        mousewheel={true}
      >
          <SwiperSlide>
            <div className="swiper-half-l"></div>
            <div className="swiper-half-r"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-half-l"></div>
            <div className="swiper-half-r"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-half-l"></div>
            <div className="swiper-half-r"></div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}