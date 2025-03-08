import React, { useState, useEffect } from "react";
import "./FlashSales.css"; // Import CSS for styling


const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: "https://via.placeholder.com/150",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: "https://via.placeholder.com/150",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4.2,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: "https://via.placeholder.com/150",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 4.7,
    reviews: 99,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: "https://via.placeholder.com/150",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.3,
    reviews: 99,
  },
];

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flash-sales">
      {/* Flash Sales Header */}
      <div className="flash-sales-header">
        <h2>Today's Flash Sales</h2>
        <div className="countdown">
          <span>{String(timeLeft.days).padStart(2, "0")} : </span>
          <span>{String(timeLeft.hours).padStart(2, "0")} : </span>
          <span>{String(timeLeft.minutes).padStart(2, "0")} : </span>
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Product Cards */}
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <span className="discount">-{product.discount}%</span>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="price">
                ${product.price} <span className="original-price">${product.originalPrice}</span>
              </p>
              <p className="rating">⭐ {product.rating} ({product.reviews})</p>
            </div>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <button className="view-all">View All Products</button>
    </div>
  );
};

export default FlashSales;
