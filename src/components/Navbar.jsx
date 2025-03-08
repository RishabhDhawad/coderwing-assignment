import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        {/* Brand Name */}
        <span className="navbar-brand fw-bold">Exclusive</span>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold text-decoration-underline" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="What are you looking for?"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark" type="submit">
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
