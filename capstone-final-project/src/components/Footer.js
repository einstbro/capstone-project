import React from 'react';
import resturent from '../Assets/resturent.jpg';

function Footer() {
    return (
        <div className="footer">
            <div className="column">
                <img src={resturent} alt="resturent" className="resturent" />
            </div>
            <div className="column">
                <h3>Navigation Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="column">
                <h3>Contact Us</h3>
                <p>123 Street, City, Country</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
            <div className="column">
                <h3>Social Media</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
