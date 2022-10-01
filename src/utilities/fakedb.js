// use local storage to manage cart data
//take all the property of product
const addToDb = (product) => {
  //destructure the id from product
  const { id } = product;

  let myCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    myCart = JSON.parse(storedCart);
  }

  //get quantity from the id
  let quantity = myCart[id];
  if (quantity) {
    myCart[id] = quantity + 1;
  } else {
    myCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(myCart));
};

const getCartData = () => {
  let myCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    myCart = JSON.parse(storedCart);
  }
  return myCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getCartData, removeFromDb, deleteShoppingCart };
