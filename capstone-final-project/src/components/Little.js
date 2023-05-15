import React from 'react';
import Little1 from '../Assets/Little1.jpg'; // Import the image file
import Little2 from '../Assets/Little2.jpg'; // Import the image file

function Little() {
    return (
        <div className="section-little">
            <div className="content-little">
                <h2 className="heading-little">Little Lemon</h2>
                <h3 className="subheading-little">Chicago</h3>
                <p className="paragraph-little">
                    Little Lemon Restaurant, a family run Mediterranean restaurant located inChicago, Illinois. Please come and enjoy our wide selection of Chicago.
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                    Our talented culinary team creates an enticing menu inspired by a fusion of international flavors, using locally sourced ingredients to ensure the freshest and highest quality dishes.
                </p>
            </div>
            <div className="image-container">
                <img src={Little2} alt="Image" className="image-little1" />
            </div>
            <div className="image-container">
                <img src={Little1} alt="Image" className="image-little2" />
            </div>
        </div>
    );
}

export default Little;
