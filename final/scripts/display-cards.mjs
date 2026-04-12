import { getRandomNumber } from "./random-number.mjs";
import { generateCard } from "./generatecard.mjs";

export function displayRecipeCards(data, numberOfCards, container) {
    let randomRecipes = [];
    for (let i = 0; i < numberOfCards; i++) {
        let randomIndex = getRandomNumber(0, data.length);
        // console.log(randomIndex);

        if (randomRecipes.includes(data[randomIndex])) {
            i --;
        } else {
            randomRecipes.push(data[randomIndex]);
            generateCard(data[randomIndex], container);
        }
    }
}
