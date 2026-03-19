import { displayData } from "./display-data.mjs";

// SELECTORS
const gridView = document.querySelector('#gridView');
const listView = document.querySelector('#listView');
const dataContainer = document.querySelector('#membersData');

// Get data from json file
async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const companies = data.companies;
    // console.table(data.companies);
    // DISPLAY DATA
    displayData(companies, dataContainer);
    // GRID VIEW -> Toggles on the 'grid' class
    gridView.addEventListener('click', () => {
        // Apply the GRID class and style
        dataContainer.classList.toggle('grid');
        gridView.classList.toggle('applied');
        // Toggle off the list class
        dataContainer.classList.toggle('list');
        listView.classList.toggle('applied');
    });
    // LIST VIEW (one column) -> Toggles on the 'list' class
    listView.addEventListener('click', () => {
        // Apply the LIST class and style
        dataContainer.classList.toggle('list');
        listView.classList.toggle('applied');
        // Toggle off the grid class
        dataContainer.classList.toggle('grid');
        gridView.classList.toggle('applied');
    });
}
getMembersData(); // FUNCTION EXECUTE
