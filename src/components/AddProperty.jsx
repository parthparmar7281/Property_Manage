import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { propertyApi } from "../services/propertyService";
import Breadcrumb from "./Breadcrumb";
import "bootstrap/dist/css/bootstrap.min.css";

const AddProperty = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  useEffect(() => {
    if (!user || user.role !== "Seller") {
      alert("Access Denied: Only users with the Seller role can add properties.");
      navigate("/");
    }
  }, [user, navigate]);
  const [formData, setFormData] = useState({
    coverImage: "",
    title: "",
    description: "",
    propertyType: "",
    status: "",
    price: "",
    areaSqFt: "",
    bedrooms: "",
    bathrooms: "",
    furnishing: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    sellerId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        coverImage: formData.coverImage.trim() || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
        title: formData.title.trim() || "",
        description: formData.description.trim() || "",
        propertyType: formData.propertyType || "Apartment",
        status: formData.status || "Available",
        price: parseFloat(formData.price) || 0,
        areaSqFt: parseFloat(formData.areaSqFt) || 0,
        bedrooms: parseInt(formData.bedrooms) || 0,
        bathrooms: parseInt(formData.bathrooms) || 0,
        furnishing: formData.furnishing || "Unfurnished",
        address: formData.address.trim() || "",
        city: formData.city.trim() || "",
        state: formData.state.trim() || "",
        pincode: formData.pincode.trim() || "",
        sellerId: user?.userId || 1
      };

      const response = await propertyApi.addProperty(payload);

      alert("✅ Property Added Successfully");
      console.log("Success:", response.data);

      setFormData({
        coverImage: "",
        title: "",
        description: "",
        propertyType: "",
        status: "",
        price: "",
        areaSqFt: "",
        bedrooms: "",
        bathrooms: "",
        furnishing: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        sellerId: ""
      });

      navigate("/property");
    } catch (error) {
      console.error("Error adding property:", error);
      alert(
        "❌ Error adding property: " +
          (error.response?.data?.message || error.message || "Unknown error")
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Breadcrumb title="Add New Property" bgImage="/images/hero_bg_1.jpg" />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="card-header bg-primary text-white text-center py-4">
                <h3 className="mb-0 fw-bold">Property Information Form</h3>
                <p className="mb-0 text-white-50 small">Fill in the details to list your property</p>
              </div>
              <div className="card-body p-5 bg-light">
                <form onSubmit={handleSubmit}>
                  {/* Section 1: Basic Details */}
                  <h5 className="text-primary border-bottom pb-2 mb-4">
                    <i className="bi bi-info-circle-fill me-2"></i>Basic Details
                  </h5>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Property Title <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-building"></i></span>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="e.g. Luxury 3 BHK Apartment"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Property Type <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-house-door"></i></span>
                        <select
                          className="form-select"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Villa">Villa</option>
                          <option value="House">House</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Listing Status <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-tag"></i></span>
                        <select
                          className="form-select"
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Status</option>
                          <option value="Available">Available</option>
                          <option value="Sold">Sold</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Furnishing Status <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-door-closed"></i></span>
                        <select
                          className="form-select"
                          name="furnishing"
                          value={formData.furnishing}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Furnishing</option>
                          <option value="Furnished">Furnished</option>
                          <option value="Semi-Furnished">Semi-Furnished</option>
                          <option value="Unfurnished">Unfurnished</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the property features, amenities, landmarks nearby, etc..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Section 2: Pricing & Specifications */}
                  <h5 className="text-primary border-bottom pb-2 mb-4">
                    <i className="bi bi-currency-dollar me-2"></i>Pricing & Specs
                  </h5>
                  <div className="row g-3 mb-4">
                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Price (INR) <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="Price"
                          min="0"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Area (SqFt) <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-textarea-resize"></i></span>
                        <input
                          type="number"
                          className="form-control"
                          name="areaSqFt"
                          value={formData.areaSqFt}
                          onChange={handleChange}
                          placeholder="Area"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Bedrooms <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-door-open"></i></span>
                        <input
                          type="number"
                          className="form-control"
                          name="bedrooms"
                          value={formData.bedrooms}
                          onChange={handleChange}
                          placeholder="Beds"
                          min="0"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Bathrooms <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-droplet"></i></span>
                        <input
                          type="number"
                          className="form-control"
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleChange}
                          placeholder="Baths"
                          min="0"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Location Details */}
                  <h5 className="text-primary border-bottom pb-2 mb-4">
                    <i className="bi bi-geo-alt-fill me-2"></i>Location Details
                  </h5>
                  <div className="row g-3 mb-4">
                    <div className="col-12">
                      <label className="form-label fw-semibold">Address <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-map"></i></span>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Street Address"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">City <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">State <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Pincode <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        required
                      />
                    </div>
                  </div>

                  {/* Section 4: Media & Seller info */}
                  <h5 className="text-primary border-bottom pb-2 mb-4">
                    <i className="bi bi-image me-2"></i>Media & Ownership
                  </h5>
                  <div className="row g-3 mb-5">
                    <div className="col-md-8">
                      <label className="form-label fw-semibold">Cover Image URL</label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-link-45deg"></i></span>
                        <input
                          type="url"
                          className="form-control"
                          name="coverImage"
                          value={formData.coverImage}
                          onChange={handleChange}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Seller ID <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
                        <input
                          type="number"
                          className="form-control"
                          name="sellerId"
                          value={formData.sellerId}
                          onChange={handleChange}
                          placeholder="ID"
                          min="1"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Action Buttons */}
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-outline-secondary px-4 py-2"
                      onClick={() => navigate("/property")}
                      disabled={submitting}
                    >
                      <i className="bi bi-x-circle me-2"></i>Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-2 fw-bold shadow-sm"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-check-circle me-2"></i>Add Property
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;