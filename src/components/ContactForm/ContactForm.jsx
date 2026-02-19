import React, { useState } from "react";
import "./ContactForm.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // later connect API here
    alert("Message Sent Successfully ✅");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>Let's Talk 👋</h2>
            <p>
              Have a question or project in mind? Fill the form and our team
              will get back to you soon.
            </p>

            <div className="contact-details">
              <p><strong>Email:</strong> hello@example.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Location:</strong> Mumbai, India</p>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label>Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email Address</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <label>Subject</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="contact-btn">
              Send Message →
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
