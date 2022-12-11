import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import React, { useEffect } from "react";
import { Post } from "../../typings";
import ContainerCard from "../cards/ContainerCard";
import "swiper/css/pagination";

interface Prop {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  onSlideChange?: any;
  data: Array<Post>;
}
const CustomSwiper = ({
  children,
  spaceBetween = 0,
  slidesPerView = 1,
  data,
}: Prop) => {
  useEffect(() => {
    console.log(data);
  });
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={true}
      modules={[Pagination,Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    
    >
      {data.map((post, index) => {
        return (
          <SwiperSlide key={index}>
            <ContainerCard {...post} />
          </SwiperSlide>
        );
      })}
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
