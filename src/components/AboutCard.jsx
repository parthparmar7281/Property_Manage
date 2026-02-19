import React from "react";

export const AboutCard = ({ about }) => {
  return (
    <div className="row justify-content-between mb-5">

      <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
        <div className="img-about dots">
          <img
            src={about.image}
            alt="About"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="col-lg-4">
        {about.features.map((item, index) => (
          <div className="d-flex feature-h" key={index}>
            <span className="wrap-icon me-3">
              <span className={item.icon}></span>
            </span>

            <div className="feature-text">
              <h3 className="heading">{item.title}</h3>
              <p className="text-black-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
