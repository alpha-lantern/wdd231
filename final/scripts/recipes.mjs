import { name, ingredients, id } from "./search-query.mjs";
import { displayRecipeCards } from "./display-cards.mjs";
import { generateCard } from "./generatecard.mjs";
import { apiFetch } from "./fetch.mjs";

// Recipes Container
// For search Result
const searchResult = document.querySelector('#searchResult');
const filterName = document.querySelector('#filterName');
const recipeName = document.querySelector('#recipeName');
const pageTitle = document.querySelector('title');

// For featured recipes
const recipesList = document.querySelector('#recipesList');

// To process the data
let filteredRecipes = [];

// Data
const data = await apiFetch('./data/recipes.json');
const recipes = data.recipes; // I'll use this one

// When loading the page directly without filters
if (name == null || ingredients == null || id == null) {
    displayRecipeCards(recipes, 5, searchResult);
    filterName.innerHTML = `Try this recipes!`;
}
// When clicking o a recipe
else if (id) {
    let targetRecipe = recipes[id - 1];
    pageTitle.innerHTML = `${targetRecipe.name} Recipe | EasyTaste`;
    recipeName.innerHTML = `${targetRecipe.name}`;
    filterName.innerHTML = `You are currently in: ${name} recipe`;
    searchResult.classList.toggle('full-recipe');
    searchResult.classList.toggle('recipe-list');
    generateCard(targetRecipe, searchResult);
}
// When using the form to filter the recipes 
else {
    // DISPLAY THE FILTER USED
    let ingredientsFilter = ingredients;
    filterName.innerHTML = `Results for: ${name} ${ingredientsFilter}`;
    
    // Filter using the form
    if (name) {
        filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
        console.log(filteredRecipes);

        if (filteredRecipes.length == 0) {
            searchResult.innerHTML = `<div class="strong">No results found</div>`;
        } else if (filteredRecipes.length == 1) {
            searchResult.classList.toggle('full-recipe');
            searchResult.classList.toggle('recipe-list');
        }

        // GENERATE THE CARDS
        filteredRecipes.forEach(recipe => {
            generateCard(recipe, searchResult);
        });

    } else if (ingredients) {
        // The search query
        const ingredientsSearch = ingredients.split(',');

        // Filter the recipes
        filteredRecipes = recipes.filter(recipe => {
            // Filter each ingredient in the search query, will return results for any of them
            return ingredientsSearch.some(ingredient => {
                const cleanIngredient = ingredient.trim().toLowerCase();
                // Check if the ingredients in the recipe include the search query at some point
                return recipe.ingredients.some(ing => ing.toLowerCase().includes(cleanIngredient));
            });
        });

        console.log(filteredRecipes);

        if (filteredRecipes.length == 0) {
            searchResult.innerHTML = `<div class="strong">No results found</div>`;
        } else if (filteredRecipes.length == 1) {
            searchResult.classList.toggle('full-recipe');
            searchResult.classList.toggle('recipe-list');
        }

        // GENERATE THE CARDS
        filteredRecipes.forEach(recipe => {
            generateCard(recipe, searchResult);
        });
    }
}

// Explore more recipes
displayRecipeCards(recipes, 4, recipesList);