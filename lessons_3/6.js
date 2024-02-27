const REGULAR_PRICE = 5;
const SPECIAL_PRICE = 7;
const EXTRA_PRICE = 9;
const REGULAR_FRUITS = ["Banana", "Orange", "Apple", "Lemon", "Grapes"];
const SPECIAL_FRUITS = ["Avocado", "Strawberry", "Mango"];

function mixFruit(fruits) {
  let totalPrice = 0;
  for (let fruit of fruits) {
    if (REGULAR_FRUITS.includes(fruit)) {
      totalPrice += REGULAR_PRICE;
    } else if (SPECIAL_FRUITS.includes(fruit)) {
      totalPrice += SPECIAL_PRICE;
    } else {
      totalPrice += EXTRA_PRICE;
    }
  }
  let meanPrice = totalPrice / fruits.length;
  return Math.round(meanPrice);
}

console.log(mixFruit(["Banana", "Orange", "Apple"]));
console.log(mixFruit(["Avocado", "Strawberry", "Mango"]));
console.log(mixFruit(["Banana", "Kiwi", "Pineapple"]));
console.log(mixFruit(["Orange", "Grapes", "Mango", "Watermelon"]));
