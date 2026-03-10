// SELECTORS
const gridView = document.querySelector('#gridView');
const listView = document.querySelector('#listView');
const dataContainer = document.querySelector('#membersData');

// Get data from json file
async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    // console.table(data.companies);
    // DISPLAY DATA
    displayData(data);
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

// Function to display the data in cards
function displayData(data) {
    dataContainer.innerHTML = '';
    data.companies.forEach(company => {
        // Create the new elements for each company
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        name.classList.add('name');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let websiteURL = document.createElement('a');
        let activitiesList = document.createElement('ul');
        let memberLvl = document.createElement('p');

        // Card classes for styling
        card.classList.add('card');
        if (company.membershipLevel === 3) {
            card.classList.add('gold');
            memberLvl.innerHTML = `<span class="label">Membership Level:</span> Gold`;
        }
        else if (company.membershipLevel === 2) {
            card.classList.add('silver');
            memberLvl.innerHTML = `<span class="label">Membership Level:</span> Silver`;
        }
        else {
            // card.classList.add('member'); // Not necessary
            memberLvl.innerHTML = `<span class="label">Membership Level:</span> Member`;
        }

        // Set company img attributes
        logo.setAttribute('src', company.imageURL);
        logo.setAttribute('alt', `Picture of ${company.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', 'auto');

        // Populate elements
        name.innerHTML = company.name;
        address.innerHTML = `<span class="label">Address:</span> ${company.address.street} ${company.address.number} - ${company.address.district} ${company.address.postalCode} ${data.city}, ${data.country}`
        phone.innerHTML = `<span class="label">Phone Number:</span> ${company.phoneNumber}`;

        website.innerHTML = `<span class="label">Website:</span> `;
        websiteURL.innerHTML = `${company.websiteURL}`;
        websiteURL.setAttribute('href', company.websiteURL);
        websiteURL.setAttribute('target', '_blank');
        website.appendChild(websiteURL);

        // List company Activities
        activitiesList.innerHTML = `<span class="label">Activities:</span> `;
        company.activities.forEach(activity => {
            let listElement = document.createElement('li');

            listElement.innerHTML = activity;

            activitiesList.appendChild(listElement);
        });

        // Append All Elements
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(memberLvl);
        card.appendChild(activitiesList);

        dataContainer.appendChild(card);
    });
    
}