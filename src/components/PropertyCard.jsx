import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {

  return (
    <div className="property-item">
      <a href="#" className="img">
        <img
          src={property?.img}
          alt={property?.title}
          className="img-fluid"
        />
      </a>

      <div className="property-content">
        <div className="price mb-2">
          <span>
            ${property?.price?.toLocaleString?.() ?? "0"}
          </span>
        </div>

        <div>
          <span className="d-block mb-2 text-black-50">
            {property?.street}
          </span>

          <span className="city d-block mb-3">
            {property?.location}, {property?.country}
          </span>

          <div className="specs d-flex mb-4">
            <span className="d-flex align-items-center me-3">
              <span className="icon-bed me-2"></span>
              <span className="caption">
                {property?.beds ?? 0} beds
              </span>
            </span>

            <span className="d-flex align-items-center">
              <span className="icon-bath me-2"></span>
              <span className="caption">
                {property?.rooms ?? 0} rooms
              </span>
            </span>
          </div>

          <Link to={`/property/${property.id}`} className="btn btn-primary py-2 px-3">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
