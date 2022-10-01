import React, { useEffect, useState } from "react";
import { addToDb, getCartData } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log("products load  complete");
      });
  }, []);

  const cartProducts = getCartData();
  const savedCart = [];

  useEffect(() => {
    for (const id in cartProducts) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = cartProducts[id];
        addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCart.push(addedProduct);
      }
      setCart(savedCart);
    }
  }, [products]);

  const addtoCart = (product) => {
    const newCart = [...cart, product];

    // console.log(newCart);
    setCart(newCart);
    addToDb(product);
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

        <div className="cart-container">
          <div className="cart-main">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
