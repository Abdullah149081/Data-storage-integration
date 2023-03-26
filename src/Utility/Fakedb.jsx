const addToCartDB = (id) => {
  let shoppingCart = {};
  //  get localStorage

  const getShoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (getShoppingCart) {
    shoppingCart = getShoppingCart;
  }
  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  // add localStorage

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// remove local storage

const removeCartDB = (id) => {
  const ShoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (ShoppingCart) {
    if (id in ShoppingCart) {
      delete ShoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(ShoppingCart));
    }
  }
};

export { addToCartDB, removeCartDB };
