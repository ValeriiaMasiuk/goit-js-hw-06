const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('ul#ingredients')

// * * * For...of

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   // console.log(ingredients[i])

//   const list = document.createElement('li');
//   // console.log(list);
//   list.classList = 'item';
//   list.textContent = ingredients[i]

//   elements.push(list)
// }

// // console.log(elements)

// listOfIngredients.append(...elements)
// console.log(listOfIngredients)


// * * * Map

const elements = ingredients.map(ingredient => {
  const list = document.createElement('li');
  // console.log(list)
  list.classList = 'item'
  list.textContent = ingredient;

  return list;
})

listOfIngredients.append(...elements)
console.log(listOfIngredients)
