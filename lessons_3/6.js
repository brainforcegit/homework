
// Define the prices of regular, special, and extra special fruits
const REGULAR_PRICE = 5;
const SPECIAL_PRICE = 7;
const EXTRA_PRICE = 9;

// Define the arrays of regular and special fruits
const REGULAR_FRUITS = ["banana", "orange", "apple", "lemon", "grapes"];
const SPECIAL_FRUITS = ["avocado", "strawberry", "mango"];

// Define a function that takes an array of fruits as input and returns the price of a cup of juice
function mixFruit(fruits) {
  const sortFruits =fruits.join(",").toLowerCase().split(",")
// Initialize the total price to zero
  let totalPrice = 0;
// Loop through each fruit in the array
  for (let fruit of sortFruits) {
// Check if the fruit is regular, special, or extra special, and add the corresponding price to the total
    if (REGULAR_FRUITS.includes(fruit)) {
      totalPrice += REGULAR_PRICE;
    } else if (SPECIAL_FRUITS.includes(fruit)) {
      totalPrice += SPECIAL_PRICE;
    } else {
      totalPrice += EXTRA_PRICE;
    }
  }
// Calculate the mean price by dividing the total by the number of fruits
  let meanPrice = totalPrice / fruits.length;
// Round the mean price to the nearest integer and return it
  return Math.round(meanPrice);
}
