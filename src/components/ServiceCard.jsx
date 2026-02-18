import React from "react";

export const ServiceCard = ({ service }) => {
  return (
    <div
      className="col-6 col-lg-3"
      data-aos="fade-up"
      data-aos-delay={service.delay}
    >
      <div className="box-feature">
        <span className={service.icon}></span>

        <h3 className="mb-3">{service.title}</h3>

        <p>{service.description}</p>

        <p>
          <a href="#" className="learn-more">
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
};
