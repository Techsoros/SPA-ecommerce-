import React from "react";
import "./Product.css";

const Product = (props) => {
  const { details, addfunction } = props;
  //   console.log(props);
  const { name, seller, price, ratings, img } = details;

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-card-body">
        <h6 className="product-title">{name}</h6>
        <p className="product-price"> Price : ${price}</p>
      </div>
      <div className="manufacturer">
        <p>
          <small>manufacturer : {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings} star</small>
        </p>
      </div>
      <div className="card-footer">
        <button className="add-cart-btn" onClick={() => addfunction(details)}>
          Add to Cart <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
