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

  const previousStoredCart = getCartData();
  const previousaddedProducts = [];
  useEffect(() => {
    for (let id in previousStoredCart) {
      const previousaddedProduct = products.find(
        (product) => product.id === id
      );
      if (previousaddedProduct) {
        const quantity = previousStoredCart[id];
        previousaddedProduct.quantity = quantity;
        previousaddedProducts.push(previousaddedProduct);
        console.log(previousaddedProduct);
      }
    }

    setCart(previousaddedProducts);
  }, [products]);

  const addtoCart = (selectedProduct) => {
    let newCart = [];
    let isExist = cart.find((product) => product.id === selectedProduct.id);
    if (isExist) {
      //   //     way 1 :: just increase  the quantity  set newCartvalue selectedProduct.quantity += 1;
      //   selectedProduct.quantity += 1;
      //   newCart = [...cart];
      //way 2 ::  break the array  & increase quantity and jooin and set value to newCart.
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      selectedProduct.quantity += 1;
      newCart = [...rest, selectedProduct];
    } else {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }

    // console.log(newCart);
    setCart(newCart);
    addToDb(selectedProduct);
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
