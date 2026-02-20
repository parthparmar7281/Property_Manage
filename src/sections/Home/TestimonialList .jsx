import { TestinomialCard } from "../../components/TestinomialCard";
import Testinomials from "../../static_resource/Testinomials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialList = () => {
  return (
    <div className="section sec-testimonials">
      <div className="container">
      <div className="row mb-5 align-items-center justify-content-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold heading text-primary text-center mb-4 mb-md-0">
              Customer Says
            </h2>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {Testinomials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestinomialCard testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default TestimonialList;
