import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Testimonials from "../static_resource/Testinomials.js";

export const TestinomialCard = () => {
  return (
    <div className="section sec-testimonials">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
              Customer Says
            </h2>
          </div>
        </div>

        <div className="testimonial-slider-wrap">

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {Testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="item">
                  <div className="testimonial">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-circle w-25 mb-4"
                    />

                    {/* ⭐ Dynamic Rating */}
                    <div className="rate">
                      {[...Array(item.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="icon-star text-warning"
                        ></span>
                      ))}
                    </div>

                    <h3 className="h5 text-primary mb-4">
                      {item.name}
                    </h3>

                    <blockquote>
                      <p>“{item.message}”</p>
                    </blockquote>

                    <p className="text-black-50">
                      {item.role}
                    </p>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </div>
  );
};
