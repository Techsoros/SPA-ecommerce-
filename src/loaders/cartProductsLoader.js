import { getCartData } from "../utilities/fakedb";

export const cartProductsLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const cartData = getCartData();

  const orderedProducts = [];

  for (const id in cartData) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = cartData[id];
      orderedProducts.push(addedProduct);
    }
  }
  return { orderedProducts, products };
};
