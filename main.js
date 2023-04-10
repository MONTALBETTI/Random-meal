// variable
const ingredients = document.getElementById("ingredients");
const getMealBtn = document.getElementById("get-meal");
const recipeName = document.getElementById("recipe");
const recipeImage = document.getElementById("recipe-image");
const recipeIngredients = document.getElementById("recipe-ingredients");
const recipeSteps = document.getElementById("recipe-step");
const step = document.getElementById("step");


function reset() {
  
  ingredients.classList.add('hidden');
  step.classList.add('hidden');
 }
 reset()

getMealBtn.addEventListener("click", () => {
  
  //// code to retrieve a random meal
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      recipeName.innerText = meal.strMeal;
      recipeImage.src = meal.strMealThumb;
      recipeImage.alt = meal.strMeal;
      recipeIngredients.innerHTML = "";
      ingredients.classList.remove('hidden');
      step.classList.remove('hidden');

      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient !== "" && ingredient !== null) {
          const ingredientItem = document.createElement("li");
          ingredientItem.innerText = `${ingredient} - ${measure}`;
          recipeIngredients.appendChild(ingredientItem);

        }
      }
      
      for (let i = 1; i <= 5; i++) {
        const step = meal[`strStep${i}`];
        if (step !== "" && step !== null) {
          const stepItem = document.createElement("li");
          stepItem.innerHTML = ["Etape:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>",
            "Etape : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>"];
           
          recipeSteps.appendChild(stepItem);
        }
      }
    });
});
