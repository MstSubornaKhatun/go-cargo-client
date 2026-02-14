import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import customer from '../../../assets/img/customer-top.png'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Awlad Hossain",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back and spine, encouraging better posture throughout the day.",
  },
  {
    id: 2,
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back and spine.",
  },
  {
    id: 3,
    name: "Rasel Ahmed",
    role: "CTO",
    text: "Encouraging better posture throughout the day with reliable product quality.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Top Icon */}
        <div className="mb-6 text-5xl"><img src={customer} className="mx-auto" alt="customer" /></div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What our customers are saying
        </h2>

        <p className="max-w-xl mx-auto text-gray-500 mb-12">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`p-8 rounded-2xl shadow-lg transition duration-300 ${
                    isActive
                      ? "bg-white scale-100 opacity-100"
                      : "bg-white/60 scale-90 opacity-60"
                  }`}
                >
                  <p className="mb-6 text-gray-600">“{item.text}”</p>

                  <div className="flex items-center gap-3 justify-center">
                    <div className="w-10 h-10 bg-primary rounded-full"></div>
                    <div className="text-left">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Testimonials;
