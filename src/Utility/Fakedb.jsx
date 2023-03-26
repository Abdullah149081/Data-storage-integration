const addToCartDB = (id) => {
  let shoppingCart;
  //  get localStorage

  const getShoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (getShoppingCart) {
    shoppingCart = getShoppingCart;
  } else {
    shoppingCart = {};
  }

  // add localStorage
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { addToCartDB };
