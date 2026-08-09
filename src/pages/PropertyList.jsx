import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import { propertyApi } from "../services/propertyService";
import { useAuth } from "../context/AuthContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const { user } = useAuth();

  const isSeller = user && user.role === "Seller";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const sellerIdFilter = isSeller ? user.userId : null;
        const response = await propertyApi.getAllProperties(sellerIdFilter);
        if (response?.data) {
          setProperties(response.data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.error("Failed to fetch properties from backend:", error);
        setProperties([]);
      }
    };
    fetchProperties();
  }, [user, isSeller]);

  const displayedProperties = properties;

  const shouldLoop = displayedProperties.length >= 3;

  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading">
              {isSeller ? "My Properties" : "Popular Properties"}
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

        {displayedProperties.length === 0 ? (
          <div className="text-center my-5 py-5 border rounded-4 bg-white shadow-sm">
            <i className="bi bi-building-dash text-muted" style={{ fontSize: "3rem" }}></i>
            <h4 className="mt-3 text-secondary fw-semibold">No Properties Found</h4>
            <p className="text-muted">You haven't listed any properties yet.</p>
            <Link to="/addProperty" className="btn btn-primary mt-2 text-white">
              Add Your First Property
            </Link>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={shouldLoop}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {displayedProperties.map((item) => (
              <SwiperSlide key={item.propertyId ?? item.id}>
                <PropertyCard property={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default PropertyList;

