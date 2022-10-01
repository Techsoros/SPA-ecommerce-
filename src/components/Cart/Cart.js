import React from "react";
import img from "../../images/favicon.ico";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let tax = 0;
  let grandTotal = 0;
  let quantity = 0;

  for (let addedProduct of cart) {
    quantity += addedProduct.quantity;
    totalPrice += addedProduct.price * addedProduct.quantity;
    totalShipping += addedProduct.shipping * addedProduct.quantity;
  }
  tax = totalPrice * 0.15;
  grandTotal = totalPrice + totalShipping + tax;

  return (
    <div>
      <div className="logo">
        <img src={img} alt="" style={{ maxWidth: "100px" }} />
      </div>
      <h2>Order-Summary</h2>
      <p>
        <span className="total">{quantity} </span>Items Added
      </p>
      <hr />
      <p>
        Total Price : <span className="total">${totalPrice} </span>
      </p>
      <hr />
      <p>
        Total Shipping charge : <span className="total">${totalShipping} </span>
      </p>
      <hr />
      <p>
        Total Tax : <span className="total">${tax.toFixed(2)} </span>
      </p>
      <hr />
      <h3>
        Grand total : <span className="total">${grandTotal.toFixed(2)} </span>
      </h3>
    </div>
  );
};

export default Cart;
