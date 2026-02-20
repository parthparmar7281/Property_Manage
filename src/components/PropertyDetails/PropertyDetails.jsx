import React from "react";
import "./PropertyDetails.css";
import propertyDetails from "../../static_resource/propertyDetails";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
const PropertyDetail = () => {
    const {id}= useParams();
    const property = propertyDetails.find(p => p.id === Number(id));
    if (!property) return <h2>Property Not Found</h2>;

  return (
    <div>
    <Breadcrumb
        title={property.title}
        bgImage="images/hero_bg_3.jpg" 
      />    
      <div className="pd-container">
      <div className="pd-gallery">
        <img src="/images/img_10.jpg" alt="" />
      </div>

      <div className="pd-grid">
        <div className="pd-left">
          <h1 className="pd-title">{property.title}</h1>
          <p className="pd-location">
            {property.city}, {property.state}
          </p>
          <div className="pd-highlights">
            <div className="highlight">
              <h3>{property.bedrooms}</h3>
              <span>Bedrooms</span>
            </div>
            <div className="highlight">
              <h3>{property.bathrooms}</h3>
              <span>Bathrooms</span>
            </div>
            <div className="highlight">
              <h3>{property.area}</h3>
              <span>Sq.ft</span>
            </div>
            <div className="highlight">
              <h3>{property.propertyType}</h3>
              <span>Type</span>
            </div>
          </div>
          <section className="pd-section">
            <h2>Description</h2>
            <p>{property.description}</p>
          </section>
          <section className="pd-section">
            <h2>Amenities</h2>
            <div className="amenities">
              <span>🏊 Swimming Pool</span>
              <span>🚗 Parking</span>
              <span>🏋 Gym</span>
              <span>🛗 Lift</span>
              <span>🔒 Security</span>
            </div>
          </section>
          <section className="pd-section">
            <h2>Location</h2>
            <p>
              {property.address}, {property.city},
              {property.state}, {property.country} - {property.pincode}
            </p>
          </section>

        </div>
        <div className="pd-sidebar">
          <div className="price-card">
            <h2>₹ {property.price}</h2>
            <button className="primary-btn">Schedule Visit</button>
            <button className="outline-btn">Contact Agent</button>
          </div>
          <div className="agent-card">
            <img src="/images/person_1-min.jpg" alt="" />
            <h4>Rahul Sharma</h4>
            <p>Property Consultant</p>
            <button className="primary-btn">Call Now</button>
          </div>

        </div>
      </div>
      <div className="similar">
        <h2>Similar Properties</h2>
        <div className="similar-grid">
          <div className="similar-card">Property 1</div>
          <div className="similar-card">Property 2</div>
          <div className="similar-card">Property 3</div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default PropertyDetail;