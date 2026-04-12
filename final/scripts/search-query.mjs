const params = new URLSearchParams(window.location.search);

export const name = params.get('recipe-name');
export const ingredients = params.get('ingredients');
export const id = params.get('id');
