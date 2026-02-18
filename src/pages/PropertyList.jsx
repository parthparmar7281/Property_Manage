import PropertyCard from "../components/PropertyCard";
import Property from "../static_resource/Property";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const PropertyList = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading">
              Popular Properties
            </h2>
          </div>

          <div className="col-lg-6 text-lg-end">
            <p>
              <a
                href="#"
                target="_blank"
                className="btn btn-primary text-white py-3 px-4"
              >
                View all properties
              </a>
            </p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {Property.map((item) => (
            <SwiperSlide key={item.id}>
              <PropertyCard property={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PropertyList;
