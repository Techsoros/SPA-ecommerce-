import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addtoCart = (product) => {
    const newCart = [...cart, product];

    console.log(newCart);
    setCart(newCart);
  };
  return (
    <div className="">
      <div className="shop-container">
        <div className="product-container container">
          {products.map((product) => (
            <Product
              key={product.id}
              details={product}
              addfunction={addtoCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container" style={{ position: "relative" }}>
          <div className="" style={{ position: "fixed" }}>
            <h2>Order-Summary</h2>
            <p>
              Total adeed item : <span className="total">{cart.length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
