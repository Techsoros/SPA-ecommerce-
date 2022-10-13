import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const products = useLoaderData();
  return (
    <div className="container">
      <h2>I am Order component</h2>
      <p>Total {products.length} Data loaded </p>
    </div>
  );
};

export default Order;
