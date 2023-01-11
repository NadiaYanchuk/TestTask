const addToCartButtons = document.querySelectorAll(".add-to-cart");
const likeButtons = document.querySelectorAll(".like");

addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Add product to cart
    alert("Product added to cart!");
  });
});

likeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Add product to "liked" list
    alert("Product added to liked list!");
  });
});