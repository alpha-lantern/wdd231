import { displayRecipeCards } from "./display-cards.mjs";
import { apiFetch } from "./fetch.mjs";

const trendRecipesContainer = document.querySelector('#trendRecipes');
const newestRecipesContainer = document.querySelector('#newestRecipes');
const recipes = await apiFetch("./data/recipes.json");

// console.log(recipes);

const trendRecipes = recipes.recipes.filter(recipe => {
    return recipe.difficulty.toLowerCase() == "easy";
});

const newestRecipes = recipes.recipes.slice(-4);

// console.log(trendRecipes);

displayRecipeCards(trendRecipes, 4, trendRecipesContainer);
displayRecipeCards(newestRecipes, 4, newestRecipesContainer);
