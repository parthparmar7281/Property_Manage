import React from "react";
import aboutFeatures from "../static_resource/aboutFeatures";

export const AboutCard = () => {
  const about = aboutFeatures[0]; // first section

  return (
 <div className="section section-4 bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-5">
            <h2 className="font-weight-bold heading text-primary mb-4">
              Let's find home that's perfect for you
            </h2>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim pariatur similique debitis vel nisi qui reprehenderit.
            </p>
          </div>
        </div>      
        
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
      <div className="row section-counter mt-5">
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">3298</span></span>
              <span className="caption text-black-50"># of Buy Properties</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">2181</span></span>
              <span className="caption text-black-50"># of Sell Properties</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">9316</span></span>
              <span className="caption text-black-50"># of All Properties</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">7191</span></span>
              <span className="caption text-black-50"># of Agents</span>
            </div>
          </div>
        </div>
    </div>
    </div>
    
  );
};
