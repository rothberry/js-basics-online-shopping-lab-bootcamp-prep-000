var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*99)
  cart.push(new Object({[item]: itemPrice}))
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
