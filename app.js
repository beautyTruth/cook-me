// // https://www.edamam.com/

// const appId = "b8357617";
// const appKey = "5ac80a3a940c58f142083f2147089c67";
// const recipeURL = "https://api.edamam.com/search?q=";

// const searchInput = document.querySelector(".search-input");
// const searchResults = document.querySelector(".search-results");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchQuery = searchInput.value;
//   fetchRecipes(searchQuery);
// });

// async function fetchRecipes(searchQuery) {
//   const response = await fetch(
//     `${recipeURL}${searchQuery}&app_id=${appId}&app_key=${appKey}&to=30`
//   );
//   const responseData = await response.json();
//   displayRecipes(responseData.hits);
// }

// function displayRecipes(recipeResults) {
//   let recipeEl = "";

//   recipeResults.forEach((recipeResult) => {
//     recipeEl += `
//     <div class="item">
//       <img src="${recipeResult.recipe.image}" />
//       <div class="content-wrapper">
//         <h2 class="recipe-title">${recipeResult.recipe.label}</h2>
//         <a href="${
//           recipeResult.recipe.url
//         }" target="_blank" class="view-recipe">View Recipe</a>
//       </div>
//       <div class="recipe-desc">
//         <p class="item-data">Calories: ${recipeResult.recipe.calories.toFixed(
//           2
//         )}</p>
//         <p class="item-data">Diet Label: ${recipeResult.recipe.dietLabels}</p>
//         <p class="item-data">Health Label: ${
//           recipeResult.recipe.healthLabels
//         }</p>
//         <p class="item-data">Source: ${recipeResult.recipe.source}</p>
//       </div>
//   </div>
//     `;

//     searchResults.innerHTML = recipeEl;
//   });
// }

// I have not yet begun to fight

/*
my code below
*/

// https://api.edamam.com/search
// application ID 574aecf7
// application keys c77e22da2dc35c9a99d62c108cb86e56

// https://api.edamam.com/search?q=

// https://api.edamam.com/api/recipes/v2?type=public&q=lime&app_id=574aecf7&app_key=c77e22da2dc35c9a99d62c108cb86e56

const appId = "574aecf7";
const appKey = "c77e22da2dc35c9a99d62c108cb86e56";

const recipeUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=";
