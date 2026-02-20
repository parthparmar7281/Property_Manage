import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropertyDetail from "./PropertyDetails/PropertyDetails";

const Breadcrumb = ({ title, bgImage }) => {
  const location = useLocation();
  const isProperty = location.pathname.includes("property");
  return (
    <div
      className="hero page-inner overlay"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 text-center mt-5">
            <h1 className="heading" data-aos="fade-up">
              {title}
            </h1>

            <nav
              aria-label="breadcrumb"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ol className="breadcrumb text-center justify-content-center">

                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                {isProperty &&
                <li className="breadcrumb-item">
                  <Link to="/">Property</Link>
                </li>  
                }

                <li
                  className="breadcrumb-item active text-white-50"
                  aria-current="page"
                >
                  {title}
                </li>

              </ol>
            </nav>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
