import React, { useState, useEffect } from "react";
import "./PropertyDetails.css";
import propertyDetails from "../../static_resource/propertyDetails";
import Property from "../../static_resource/Property";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import { propertyApi } from "../../services/propertyService";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndMatchProperty = async () => {
      setLoading(true);
      try {
        const response = await propertyApi.getAllProperties();
        if (response && response.data) {
          const matched = response.data.find(
            (p) => String(p.propertyId ?? p.id) === String(id)
          );
          if (matched) {
            setProperty(matched);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Error fetching property from API, falling back to static resources:", err);
      }

      // Fallback checking local static property lists
      const localDetail = propertyDetails.find((p) => String(p.id) === String(id));
      if (localDetail) {
        setProperty(localDetail);
      } else {
        const localProp = Property.find((p) => String(p.id) === String(id));
        if (localProp) {
          setProperty(localProp);
        }
      }
      setLoading(false);
    };

    fetchAndMatchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading property...</span>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center my-5 py-5">
        <h2>Property Not Found</h2>
      </div>
    );
  }

  const displayTitle = property.title || "Untitled Property";
  const displayCity = property.city || property.location || "";
  const displayState = property.state || "";
  const displayCountry = property.country || "India";
  const displayBedrooms = property.bedrooms ?? property.beds ?? 0;
  const displayBathrooms = property.bathrooms ?? property.rooms ?? 0;
  const displayArea = property.area ?? property.areaSqFt ?? 0;
  const displayPrice = property.price?.toLocaleString?.() ?? "0";
  const displayDescription = property.description || "No description available.";
  const displayAddress = property.address || property.street || "";
  const displayPincode = property.pincode || "";
  const displayImage = property.coverImage || property.img || "/images/img_10.jpg";

  return (
    <div>
      <Breadcrumb
        title={displayTitle}
        bgImage="/images/hero_bg_3.jpg" 
      />    
      <div className="pd-container">
        <div className="pd-gallery">
          <img src={displayImage} alt={displayTitle} className="img-fluid rounded" style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }} />
        </div>

        <div className="pd-grid">
          <div className="pd-left">
            <h1 className="pd-title">{displayTitle}</h1>
            <p className="pd-location">
              {displayCity && displayState ? `${displayCity}, ${displayState}` : (displayCity || displayState || displayCountry)}
            </p>
            <div className="pd-highlights">
              <div className="highlight">
                <h3>{displayBedrooms}</h3>
                <span>Bedrooms</span>
              </div>
              <div className="highlight">
                <h3>{displayBathrooms}</h3>
                <span>Bathrooms</span>
              </div>
              <div className="highlight">
                <h3>{displayArea}</h3>
                <span>Sq.ft</span>
              </div>
              <div className="highlight">
                <h3>{property.propertyType || "N/A"}</h3>
                <span>Type</span>
              </div>
            </div>
            <section className="pd-section">
              <h2>Description</h2>
              <p>{displayDescription}</p>
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
                {displayAddress ? `${displayAddress}, ` : ""}{displayCity ? `${displayCity}, ` : ""}{displayState ? `${displayState}, ` : ""}{displayCountry}{displayPincode ? ` - ${displayPincode}` : ""}
              </p>
            </section>
          </div>
          <div className="pd-sidebar">
            <div className="price-card">
              <h2>₹ {displayPrice}</h2>
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