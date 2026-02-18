import React from "react";
import services from "../../static_resource/services";
import { Link } from "react-router-dom";
import { ServiceCard } from "../../components/ServiceCard";

export const ServicesSection = ({ title, limit, showButton }) => {
  const displayServices = limit
    ? services.slice(0, limit)
    : services;

  return (
    <section className="features-1">
      <div className="container">

        {title && <h2 className="mb-4">{title}</h2>}

        <div className="row">
          {displayServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {showButton && (
          <div className="text-center mt-4">
            <Link to="/service" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
