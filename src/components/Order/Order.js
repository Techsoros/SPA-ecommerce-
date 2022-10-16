import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const { orderedProducts } = useLoaderData();
  const [cart, setCart] = useState(orderedProducts);
  return (
    <div className="shop-container">
      <div className="container" data-aos="fade-down" data-aos-delay="500">
        {cart.map((item) => (
          <ReviewItem item={item} key={item.id}></ReviewItem>
        ))}
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="cart-container "
      >
        <div className="cart-main">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
