import React from "react";
import greeksalad from '../Assets/greeksalad.jpg';
import testimonial from '../Assets/testimonial.jpg'
import salad from '../Assets/salad.png'

function Specials() {
  return (
    <div className="specials-container">
      <div className="header-special">
        <h2 className="heading-special">This Week Specials!</h2>
        <button className="button-special">View All</button>
      </div>
      <div className="cards">
        <div className="card">
          <img src={greeksalad} alt="Dish 1" className="image-special" />
          <div className="card-content">
            <h3 className="dish-name">Greek Salad</h3>
            <p className="dish-price">$12.45</p>
            <p className="paragraph-special">
                Little Lemon Restaurant, a family run Mediterranean restaurant located in Chicago. Our talented culinary team creates an enticing menu inspired by a fusion of international flavors, using locally sourced ingredients to ensure the freshest and highest quality dishes.
            </p>
            <h3 className="dish-last">Order a delivery $4</h3>
          </div>
        </div>
        <div className="card">
          <img src={salad} alt="Dish 2" className="image-special" />
          <div className="card-content">
            <h3 className="dish-name">Greek Salad</h3>
            <p className="dish-price">$12.45</p>
            <p className="paragraph-special">
                Little Lemon Restaurant, a family run Mediterranean restaurant located in Chicago. Our talented culinary team creates an enticing menu inspired by a fusion of international flavors, using locally sourced ingredients to ensure the freshest and highest quality dishes.
            </p>
            <h3 className="dish-last">Order a delivery $4</h3>
          </div>
        </div>
        <div className="card">
          <img src={testimonial} alt="Dish 3" className="image-special" />
          <div className="card-content">
            <h3 className="dish-name">Greek Salad</h3>
            <p className="dish-price">$12.45</p>
            <p className="paragraph-special">
                Little Lemon Restaurant, a family run Mediterranean restaurant located in Chicago. Our talented culinary team creates an enticing menu inspired by a fusion of international flavors, using locally sourced ingredients to ensure the freshest and highest quality dishes.
            </p>
            <h3 className="dish-last">Order a delivery $4</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
