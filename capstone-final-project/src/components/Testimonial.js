import React from "react";
import testimonial from '../Assets/testimonial.jpg'

function Testimonial() {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonial-grid">
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-rating">Rating</p>
                <div class="testimonial">
                    <img src={testimonial} alt="Testimonial 1" className="testimonial-image" />
                    <p className="testimonial-name">Name</p>
                </div>
            <p className="testimonial-name">Little Lemon Rest.</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-rating">Rating</p>
                <div class="testimonial">
                    <img src={testimonial} alt="Testimonial 1" className="testimonial-image" />
                    <p className="testimonial-name">Name</p>
                </div>
            <p className="testimonial-name">Little Lemon Rest.</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-rating">Rating</p>
                <div class="testimonial">
                    <img src={testimonial} alt="Testimonial 1" className="testimonial-image" />
                    <p className="testimonial-name">Name</p>
                </div>
            <p className="testimonial-name">Little Lemon Rest.</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="testimonial-content">
            <p className="testimonial-rating">Rating</p>
                <div class="testimonial">
                    <img src={testimonial} alt="Testimonial 1" className="testimonial-image" />
                    <p className="testimonial-name">Name</p>
                </div>
            <p className="testimonial-name">Little Lemon Rest.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
