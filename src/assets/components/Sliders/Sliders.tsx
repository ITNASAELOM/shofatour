import classes from "./Sliders.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Bali from "@/assets/images/bali.jpg";
import MyKines from "@/assets/images/mykines.jpg";
import Uludag from "@/assets/images/uludag.jpg";
import Bern from "@/assets/images/bern.jpg";

const Sliders = () => {
  return (
    <>
      <div className={classes["slider"]}>
        <div className="container">
          <div>
            <div className={classes["slider__text"]}>
              <span>WHERE TO GO</span>
              <p>Popular destinations</p>
            </div>
          </div>
          <div className={classes["sliders"]}>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <img src={Bali} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={MyKines} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Uludag} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Bern} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sliders;
