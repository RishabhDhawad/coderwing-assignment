import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    
    </Router>
    
  );
};

export default App;
