import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ item }) => {
  const { img, name, quantity, price } = item;
  return (
    <div className="review-card">
      <div className="review-img">
        <img src={img} alt="" />
      </div>
      <div className="review-body">
        <div className="text">
          <h4>{name}</h4>
          <p>price : ${price}</p>
          <p>Quantity : {quantity}</p>
        </div>
        <div className="button">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
