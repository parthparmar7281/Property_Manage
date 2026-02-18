import React from "react";
import services from "../static_resource/services";

export const ServiceCard = () => {
  return (
    <section className="features-1">
      <div className="container">
        <div className="row">

          {services.map((service) => (
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={service.id}
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
          ))}

        </div>
      </div>
    </section>
  );
};
