import { setAsFavorite, eraseFavorite, getFavorites } from "./store-favorites.mjs";
// Recipe example:
// "id": 1,
//     "name": "Classic Avocado Toast",
//     "image": "images/avocado-toast-clc.webp",
//     "prepTime": "10 min",
//     "difficulty": "Easy",
//     "ingredients": ["1 slice sourdough", "1/2 avocado", "Red pepper flakes", "Lemon juice"],
//     "instructions": "Toast the bread. Mash avocado with lemon juice. Spread and sprinkle with flakes.",
//     "tags": ["Breakfast", "Vegan"]
// const recipeSearch = document.querySelector('#recipeSearch');

// This function builds the entire card for a recipe, including the functionality of buttons
export function generateCard(data, container) {
    let card = document.createElement('div');
    card.classList.add('recipe');

    let name = document.createElement('h3');
    name.innerHTML = `${data.name}`;

    // Image
    let picture = document.createElement('img');
    picture.setAttribute('src', `images/${data.image}`);
    picture.setAttribute('alt', `Picture of ${data.name}`);
    picture.setAttribute('loading', 'lazy');
    picture.setAttribute('class', 'recipe-picture');

    let prepTime = document.createElement('p');
    prepTime.classList.add('prep-time');
    prepTime.innerHTML = `<span class="strong">Time: </span> ${data.prepTime}`;

    let difficulty = document.createElement('p');
    difficulty.classList.add('difficulty');
    difficulty.innerHTML = `<span class='strong'>Difficulty:</span> ${data.difficulty}`;
    
    // Ingredients
    let ingredientsBox = document.createElement('div');
    let ingredientsLbl = document.createElement('span');
    let ingredientsList = document.createElement('ul');
    ingredientsBox.append(ingredientsLbl, ingredientsList);
    ingredientsBox.classList.add('ingredients');
    // Instructions
    let instructionsBox = document.createElement('div');
    let instructionsLbl = document.createElement('span');
    let instructions = document.createElement('ol');
    instructionsBox.append(instructionsLbl, instructions);
    instructionsBox.classList.add('instructions');
    // let tags = document.createElement('p');

    // Favorite Icon / Tag
    let favMark = document.createElement('button');
    favMark.classList.add('fav-tag');
    let favIco = document.createElement('img');
    favIco.setAttribute('src', 'images/bookmark.svg');
    favIco.setAttribute('alt', 'favorite tag');
    favIco.setAttribute('width', '50');
    favIco.setAttribute('height', '50');
    // Append Icon to Button
    favMark.appendChild(favIco);

    // Track when the icon is pressed
    const favoriteStorage = 'favorites';

    let currentFav = getFavorites(favoriteStorage);
    if (currentFav.includes(data.id)) {
        card.classList.toggle('favorite');
        favIco.setAttribute('src', 'images/bookmark-fill.svg');
    }
    
    favMark.addEventListener('click', () => {
        card.classList.toggle('favorite');
        if (card.classList.contains('favorite')) {
            favIco.setAttribute('src', 'images/bookmark-fill.svg');
            setAsFavorite(favoriteStorage, data.id);
        } 
        else {
            favIco.setAttribute('src', 'images/bookmark.svg');
            eraseFavorite(favoriteStorage, data.id);
        }
    });

    // Button
    let seeMore = document.createElement('button');
    // seeMore.setAttribute('id', `${data.id}`);
    seeMore.setAttribute('class', 'see-more standard-hover');
    seeMore.setAttribute('onclick', `window.location.href='recipes.html?recipe-name=&ingredients=&id=${data.id}'`);
    seeMore.innerHTML = "<span class='strong'>See Recipe</span>";

    // Ingredients:
    ingredientsLbl.innerHTML = `<span class='strong'>Ingredients:</span>`;
    data.ingredients.forEach(item => {
        let ingredient = document.createElement('li');
        ingredient.textContent = `${item}`;
        ingredientsList.appendChild(ingredient);
    });

    instructionsLbl.innerHTML = `<span class='strong'>Preparation:</span>`;
    // Split the text into an array of steps
    let instructionSteps = data.instructions;
    instructionSteps.forEach(step => {
        let instruction = document.createElement('li');
        instruction.textContent = `${step.trim()}`;
        instructions.appendChild(instruction);
    });

    // Tags
    // tags.innerHTML = `<span class='strong>Tags:</span>`;
    // data.tags.forEach(tag => {
    //     tags.innerHTML += `${tag} | `;
    // });

    // Append to the document
    card.append(name, picture, prepTime, difficulty, ingredientsBox, instructionsBox, seeMore, favMark);
    container.appendChild(card);
}