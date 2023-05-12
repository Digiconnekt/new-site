import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import { Container } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              height: "65vh",
              backgroundImage:
                "url('https://icdn.tradew.com/file/201807/1573002/jpg/7639477.jpg?x-oss-process=image/format,webp')",
              backgroundRepeat: "no-repeat",
              color: "#ffffff",
            }}
          >
            <Container className="d-flex flex-column justify-content-center h-100">
              <div className="w-75">
                <h1>
                  The Most Comprehensive Provider Of Electronic Shelf Labels
                  Solutions In The World
                </h1>
                <h3 className="mt-3">RF Bluetooth 2.4G NFC Solution</h3>
                <ul className="d-flex gap-3 list-inline mt-4">
                  <li>
                    <a href="#" className="fs-2" style={{ color: "#ffffff" }}>
                      <i className="fa-solid fa-wifi"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fs-2" style={{ color: "#ffffff" }}>
                      <i className="fa-brands fa-bluetooth-b"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "65vh",
              backgroundImage:
                "url('https://icdn.tradew.com/file/201807/1573002/jpg/7639543.jpg?x-oss-process=image/format,webp')",
              backgroundRepeat: "no-repeat",
              color: "#ffffff",
            }}
          >
            <Container className="d-flex flex-column justify-content-center h-100">
              <div className="w-75">
                <h1>
                  The Most Comprehensive Provider Of Electronic Shelf Labels
                  Solutions In The World
                </h1>
                <h3 className="mt-3">RF Bluetooth 2.4G NFC Solution</h3>
                <ul className="d-flex gap-3 list-inline mt-4">
                  <li>
                    <a href="#" className="fs-2" style={{ color: "#ffffff" }}>
                      <i className="fa-solid fa-wifi"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fs-2" style={{ color: "#ffffff" }}>
                      <i className="fa-brands fa-bluetooth-b"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "65vh",
              backgroundImage:
                "url('https://icdn.tradew.com/file/201807/1573002/jpg/7669190.jpg?x-oss-process=image/format,webp')",
              backgroundRepeat: "no-repeat",
              color: "#ffffff",
            }}
          >
            <Container className="d-flex flex-column justify-content-center h-100">
              <div className="w-75">
                <h1>
                  The Most Comprehensive Provider Of Electronic Shelf Labels
                  Solutions In The World
                </h1>
                <h3 className="mt-3">RF Bluetooth 2.4G NFC Solution</h3>
                <ul className="d-flex gap-3 list-inline mt-4">
                  <li>
                    <a href="#" className="fs-2" style={{ color: "#ffffff" }}>
                      <i className="fa-solid fa-wifi"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fs-2" style={{ color: "#ffffff" }}>
                      <i className="fa-brands fa-bluetooth-b"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
