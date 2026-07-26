import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import Property from "../static_resource/Property";
import { propertyApi } from "../services/propertyService";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await propertyApi.getAllProperties();
       if (response?.data?.length > 0) {
            setProperties(response.data);
        } else {
            setProperties(Property);
        }
      } catch (error) {
        console.error("Failed to fetch properties from backend:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading">
              Popular Properties
            </h2>
          </div>

          <div className="col-lg-6 text-lg-end property_btn">
            <p>
              <Link
                to="/property"
                className="btn btn-primary text-white py-3 px-4"
              >
                View All properties
              </Link>
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
          {properties.map((item) => (
            <SwiperSlide key={item.propertyId ?? item.id}>
              <PropertyCard property={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PropertyList;
