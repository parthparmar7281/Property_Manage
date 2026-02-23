import React from "react";

export const AboutCard = ({ about, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <div className="row justify-content-between align-items-center " style={{marginBottom:"80px"}}>
      <div
        className={`col-lg-7 mb-5 mb-lg-0 ${
          isReverse ? "order-lg-1" : "order-lg-2"
        }`}
      >
        <div className="img-about dots">
          <img
            src={about.image}
            alt="About"
            className="img-fluid"
          />
        </div>
      </div>

      <div
        className={`col-lg-4 ${
          isReverse ? "order-lg-2" : "order-lg-1"
        }`}
      >
        {about.features.map((item, i) => (
          <div className="d-flex feature-h" key={i}>
            <span className="wrap-icon me-3">
              <span className={item.icon}></span>
            </span>

            <div className="feature-text">
              <h3 className="heading">{item.title}</h3>
              <p className="text-black-50">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};