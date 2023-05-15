import React from 'react';
import image from '../Assets/image.jpg'; // Import the image file

function Section() {
    return (
        <div className="section">
            <div className="content">
                <h2 className="heading">Little Lemon</h2>
                <h3 className="subheading">Chicago</h3>
                <p className="paragraph">
                    Welcome to Little Lemon Restaurant, 
                    a hidden gem nestled in the heart of our vibrant city. 
                    With a warm and inviting atmosphere, our cozy eatery offers an unforgettable dining experience. 
                    Our talented culinary team creates an enticing menu inspired by a fusion of international flavors, 
                    using locally sourced ingredients to ensure the freshest and highest quality dishes. 
                    Join us at Little Lemon Restaurant and discover the perfect harmony of flavors, textures, and aromas that will leave you craving for more.
                </p>
                <button type='submit' className="reservation-button">Reserve a Table</button>
            </div>
            <div className="image-container">
                <img src={image} alt="Image" className="image" />
            </div>
        </div>
    );
}

export default Section;
