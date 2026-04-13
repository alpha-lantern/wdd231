import { getFavorites } from "./store-favorites.mjs";
import { generateCard } from "./generatecard.mjs";
import { apiFetch } from "./fetch.mjs";

// Data
const data = await apiFetch('./data/recipes.json');
const favoriteRecipesContainer = document.querySelector('#favoriteRecipes');
const recipes = data.recipes; // I'll use this one


const favoriteStorage = 'favorites';
const favoritesIDs = getFavorites(favoriteStorage);

const filteredRecipes = recipes.filter(recipe => {
    return favoritesIDs.some(id => recipe.id == id);
});

// console.log(filteredRecipes);
// console.log(favoritesIDs);

filteredRecipes.forEach(recipe => {
    generateCard(recipe, favoriteRecipesContainer);
});