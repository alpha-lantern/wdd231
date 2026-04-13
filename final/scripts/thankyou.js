const params = new URLSearchParams(window.location.search);

const recipeName = params.get('recipe-name');
const description = params.get('description');
const email = params.get('email');

// Selectors
const requestedRecipe = document.querySelector('#requestedRecipe');
const additional = document.querySelector('#additional');

requestedRecipe.innerHTML = `<span class="strong">Recipe Requested:</span> ${recipeName} - ${description}`;

if (!email) {
    additional.innerHTML = `We'll be working to add this recipe as soon as possible.`;
} else {
    additional.innerHTML = `We'll send you an email to "${email}" when it's ready.`;
}
