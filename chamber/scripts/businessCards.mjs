import { displayData } from "./displayData.mjs";
import { apiFetch } from "./fetch.mjs";

// Container for the cards created with displayData()
const dataContainer = document.querySelector('#membersData');

// Get data
const dataFile = 'data/members.json';
const data = await apiFetch(dataFile);
// Filter for companies with silver or gold membership level (level 2 or 3)
const filteredCompanies = data.companies.filter((company) => company.membershipLevel > 1);
// Print companies for testing
// console.log(filteredCompanies);

let randomBusiness = [];
let randomNum;
// Limit for the random number to don't pass over the index
let max = (filteredCompanies.length);

// Repeat until getting 3 objects
for (let i = 0; i < 3; i++) {
    // Get a random number
    randomNum = Math.floor(Math.random() * max);
    // Print the number for testing
    // console.log(randomNum);

    // If the object is not part of the array already, then add it.
    if (randomBusiness.includes(filteredCompanies[randomNum])) {
        i --;
    } else {
        randomBusiness.push(filteredCompanies[randomNum]);
    }
}

// Print companies for testing
// console.log(randomBusiness);

// Call the function to create the cards
displayData(randomBusiness, dataContainer);
