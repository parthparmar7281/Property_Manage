import React from 'react'

export const CounterProperty = () => {
  return (
     <div className="sections-counter section-4 mt-4">
      <div className="container">
        <div className="row section-counter">
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
          )
}
