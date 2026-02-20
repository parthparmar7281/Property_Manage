import React from "react";
import "./ContactForm.css";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted ✅");
  };

  return (
    <section className="contact-wrapper">
        <div className="contact-container"
        style={{
            backgroundImage: "url('/images/img_11.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
              

                {/* LEFT SIDE */}
                <div className="contact-left">
          <span className="contact-badge">Contact Us</span>

          <h1 className="contact-title">
            You Have Questions,<br />We Have Answers
          </h1>

          <p className="contact-desc">
            Our team is ready to assist you with every detail.
            Send us a message and we’ll get back to you soon.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <div className="info-icon">
                <span className="icon-envelope"></span>
              </div>
              <div>
                <h4>Email</h4>
                <p>support@example.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                   <span className="icon-room"></span>
              </div>
              <div>
                <h4>Location</h4>
                <p>123 Serenity Bay Road</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                 <span className="icon-phone"></span>
              </div>
              <div>
                <h4>Contact</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-card">
          <h2>Tell Us What You Need</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" required />
              <label>First Name</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input type="text" required />
              <label>Subject</label>
            </div>

            <div className="input-group textarea">
              <textarea rows="4" required></textarea>
              <label>Message</label>
            </div>

            <button className="submit-btn">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}