import React from "react";

export const TestinomialCard = ({ testimonial }) => {
  return (
    <div className="testimonial">

      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="img-fluid rounded-circle w-25 mb-4"
      />

      <div className="rate">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="icon-star text-warning"></span>
        ))}
      </div>

      <h3 className="h5 text-primary mb-4">
        {testimonial.name}
      </h3>

      <blockquote>
        <p>“{testimonial.message}”</p>
      </blockquote>

      <p className="text-black-50">
        {testimonial.role}
      </p>

    </div>
  );
};
