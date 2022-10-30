var addRecipeButton = document.querySelector(".add-recipe-button")
var letsCookButton = document.querySelector(".lets-cook-button")
var secondBox = document.querySelector("#Box2")
var crockpot = document.querySelector("svg")

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
'Lemon Meringue Pie'
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
  var sidesIndex = getRandomIndex(sides);
  var mainsIndex = getRandomIndex(mains);
  var dessertsIndex = getRandomIndex(desserts)
  var fullMeal = `${sidesIndex}+${mainsIndex}+${dessertsIndex}`

  if (input.value === "side") {
    crockpot.classList.add("hidden");
    secondBox.innerText = sidesIndex
  } else if (input.value === "main") {
    crockpot.classList.add("hidden");
    secondBox.innerText = mainsIndex
  } else if (input.value === "dessert") {
    crockpot.classList.add("hidden");
    secondBox.innerText = dessertsIndex
  } else if (input.value === "entire") {
    crockpot.classList.add("hidden");
    secondBox.innerText = fullMeal
  }
}
  function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }

  currentPoster = new Poster(newPoster.image, newPoster.title, newPoster.quote)
  posterImage.src = currentPoster.imageURL

var sidesIndex = getRandomIndex(sides);
var mainsIndex = getRandomIndex(mains);
var dessertsIndex = getRandomIndex(desserts)
var fullMeal = sidesIndex + mainsIndex + dessertsIndex
console.log(fullMeal)
}

scgAccess.classList.add('hidden')

//user selects meal type and let's cook letsCookButton
//meal is pulled from array and displayed in box 2(hide svg)
