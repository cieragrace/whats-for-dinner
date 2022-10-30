var addRecipeButton = document.querySelector(".add-recipe-button")
var letsCookButton = document.querySelector(".lets-cook-button")
var secondBox = document.querySelector("#box2")
var crockpot = document.querySelector(".crockpot")
var sideInput = document.querySelector("#side-dish")
var mainInput = document.querySelector("#main-dish")
var dessertInput = document.querySelector("#dessert-dish")
var entireMealInput = document.querySelector("#entire-meal")
var youShouldMake = document.querySelector(".you-should-make")
var innerHTML = document.querySelector(".innerhtml")
// addRecipeButton.addEventListener('click', function)
letsCookButton.addEventListener('click', suggestionGenerator)
// crockpot.addEventListener('click', )
var sides = ['Miso Glazed Carrots',
'Coleslaw', 'Garden Salad', 'Crispy Potatoes',
'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Rolls',
'Hush Puppies'];
var mains = ['Spaghetti and Meatballs',
'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry',
'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers',
'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'];
var desserts  = ['Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'];

function suggestionGenerator() {
  console.log(sideInput.checked)
  var sidesIndex = getRandomIndex(sides);
  var mainsIndex = getRandomIndex(mains);
  var dessertsIndex = getRandomIndex(desserts)
  var fullMealIndex = `${sidesIndex}+${mainsIndex}+${dessertsIndex}`

  if (sideInput.checked === true) {
    crockpot.classList.add("hidden");
    secondBox.innerText = sides[sidesIndex]
  } else if (mainInput.checked === true) {
    crockpot.classList.add("hidden");
    secondBox.innerText = mains[mainsIndex]
  } else if (dessertInput.checked === true) {
    crockpot.classList.add("hidden");
    secondBox.innerText = desserts[dessertsIndex]
  } else if (entireMealInput.checked === true) {
    crockpot.classList.add("hidden");
    secondBox.innerText = entire[fullMealIndex]
  }
}



  function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }


//user selects meal type and let's cook letsCookButton
//meal is pulled from array and displayed in box 2(hide svg)
