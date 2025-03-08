import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import QRCode from "react-qr-code";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="fw-bold text-white">Exclusive</h5>
            <p className="mb-1 text-white">Subscribe</p>
            <p className="text-white">Get 10% off your first order</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control bg-dark text-white"
                placeholder="Enter your email"
              />
              <button className="btn btn-outline-light">➤</button>
            </div>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold text-white">Support</h5>
            <p className="text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-white">exclusive@gmail.com</p>
            <p className="text-white">+88015-88888-9999</p>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold text-white">Account</h5>
            <ul className="list-unstyled text-white">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold text-white">Quick Link</h5>
            <ul className="list-unstyled text-white">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold text-white">Download App</h5>
            <p className="text-white">Save $3 with App New User Only</p>
            <div className="d-flex justify-content-center mt-4">
              <FaFacebookF className="me-3 text-white" size={20} />
              <FaTwitter className="me-3 text-white" size={20} />
              <FaInstagram className="me-3 text-white" size={20} />
              <FaLinkedin className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
