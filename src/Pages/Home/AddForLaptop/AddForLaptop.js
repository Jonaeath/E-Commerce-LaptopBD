import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./AddForLaptop.css";
import { Navigation } from "swiper/modules";
import slide01 from "../../../Asset/Image/macbook01.jpeg";
import slide02 from "../../../Asset/Image/dell06.jpeg";
import slide03 from "../../../Asset/Image/hp01.webp";
import slide04 from "../../../Asset/Image/slide04.jpeg";
import CommonButton from "../../../Component/CommonButtom/CommonButton";

const AddForLaptop = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="hero pl-10 pr-10 min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={slide04}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">Second-Hand Laptop!</h1>
                <p className="py-8">
                  One of the most significant benefits of buying a second-hand
                  laptop is its substantial cost savings. Compared to purchasing
                  a new laptop, which can often come with a hefty price tag,
                  buying a used device can save you a significant amount of
                  money.
                </p>
                <CommonButton>Shop Now</CommonButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero pl-10 pr-10 min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={slide03}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">HP!</h1>
                <p className="py-6">
                  The components used in HP laptops are designed to last, so you
                  can be sure that your laptop will be able to keep up with your
                  needs over time. Additionally, HP laptops come with a variety
                  of features such as long battery life, fast processors, and
                  plenty of storage space.
                </p>
                <CommonButton>Shop Now</CommonButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero pl-10 pr-10 min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={slide01}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">MacBook!</h1>
                <p className="py-6">
                  The OS on a Mac computer is highly intuitive and
                  user-friendly, with a sleek design that makes navigation
                  simple. Mac computers often run applications more smoothly
                  than Windows PCs since Apple designs its hardware and
                  operating system, creating a smooth user experience through
                  perfect integration.
                </p>
                <CommonButton>Shop Now</CommonButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero pl-10 pr-10 min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={slide02}
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">DELL!</h1>
                <p className="py-6">
                  Moreover, the quality of Dell laptops is strong due to faster
                  chipsets and more RAM than some of the less expensive rivals.
                  Overall, they are an excellent option for low-end laptops
                  because a number of their models are designed to provide
                  optimum performance at the lowest possible price.
                </p>
                <CommonButton>Shop Now</CommonButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AddForLaptop;
