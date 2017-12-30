var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// 'While' loop.
var number = 0;
while (number < ingredients.length) {
  console.log(ingredients[number]);
  number ++;
}

// 'For' loop
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Reverse loop.
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
