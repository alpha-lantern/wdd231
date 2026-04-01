import { places } from '../data/places.mjs';

// SELECTORS
const container = document.querySelector('#allPlaces');
const modal = document.querySelector('#detail');

// Data Format
// {
//     "name": "Circuito Mágico del Agua (Magic Water Circuit)",
//     "description": "The world's largest water fountain complex in a public park. It features spectacular laser, light, and music shows once the sun goes down.",
//     "address": "Jirón Madre de Dios S/N, Cercado de Lima",
//     "cost": "S/ 5.00 (Approx. $1.50 USD)",
//     "imageUrl": "circuito_magico_agua.webp"
// }

// Display the data in cards in the discover page
function displayCards(container, data) {
    container.innerHTML = '';
    data.forEach(place => {
        generateCard(container, place);
    });
}

// Add the cost and display the information in a modal
function displayDetailModal(modal, place) {
    // Start with an empty modal
    modal.innerHTML = '';
    // Pass all the card data
    generateCard(modal, place);
    // Remove button
    modal.querySelector('button').remove();
    // Add cost
    let cost = document.createElement('span');
    cost.textContent = `Price: ${place.cost}`;
    modal.appendChild(cost);
}

// Put the main information of a single place in a container or card
function generateCard(container, place) {
    // GENERATE NEW ELEMENTS
    let card = document.createElement('div');
    let title = document.createElement('h2');
    title.textContent = place.name;
    let image = document.createElement('img');
    image.setAttribute('src', `images/${place.imageUrl}`);
    image.setAttribute('alt', `Picture of ${place.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '500');
    image.setAttribute('height', '357');
    let description = document.createElement('p');
    description.textContent = place.description;
    let address = document.createElement('address');
    address.textContent = place.address;
    let button = document.createElement('button');
    button.textContent = `Learn More`;

    button.addEventListener('click', () => {
        displayDetailModal(modal, place);
        detail.showModal();
    });

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(address);
    card.appendChild(button);
    container.appendChild(card);
}

// Call the function
displayCards(container, places);
