import React from "react";
import SideImage from "../assets/SideImage.png";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-75 rounded overflow-hidden">
        <div className="col-md-6 p-0">
          <img
            src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-9890.jpg?w=740"
            alt="Shopping"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>

        <div className="col-md-6 bg-white p-5">
          <h3 className="fw-bold">Create an account</h3>
          <p className="text-muted">Enter your details below</p>

          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-0 border-bottom"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control border-0 border-bottom"
                placeholder="Email or Phone Number"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control border-0 border-bottom"
                placeholder="Password"
              />
            </div>

            <button className="btn btn-danger w-100 py-2 mb-3">
              Create Account
            </button>

            <button className="btn btn-outline-dark w-100 py-2 d-flex align-items-center justify-content-center">
              <FcGoogle />
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
