import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import banner4 from "../../../assets/banner/banner4.png";

const slides = [
  {
    img: banner1,
    title: "Fast & Secure Parcel Delivery",
    desc: "Delivering happiness with speed and safety across the country.",
  },
  {
    img: banner2,
    title: "Nationwide Coverage Service",
    desc: "We deliver to every district with trusted logistics network.",
  },
  {
    img: banner3,
    title: "Door to Door Pickup",
    desc: "Hassle-free pickup from your home or office.",
  },
  {
    img: banner4,
    title: "Become a Delivery Partner",
    desc: "Join our growing rider network and earn easily.",
  },
];

const Banner = () => {
  return (
    <div className="bg-base-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={4000}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-h-[80vh] flex items-center">
              
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

                {/* Image (Mobile top, Desktop right) */}
                <div className="flex justify-center w-full lg:w-auto order-1 lg:order-2">
                  <img
                    src={slide.img}
                    alt="Banner"
                    className="w-[260px] sm:w-[350px] md:w-[450px] lg:w-[550px]"
                  />
                </div>

                {/* Text */}
                <div className="max-w-xl text-center lg:text-left order-2 lg:order-1">
                  <h1 className="text-4xl md:text-6xl font-bold text-base-content leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-base-content/70 text-lg">
                    {slide.desc}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="btn btn-primary px-6">
                      Get Started
                    </button>

                    <button className="btn btn-outline btn-primary px-6">
                      Track Parcel
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Carousel>

      </div>
    </div>
  );
};

export default Banner;
