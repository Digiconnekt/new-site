import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Image } from "react-bootstrap";
import { aboutSlider } from "../data";

const index = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {aboutSlider.map((elem, i) => (
          <SwiperSlide key={i}>
            <Image src={elem.img} alt={elem.alt} fluid />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default index;
