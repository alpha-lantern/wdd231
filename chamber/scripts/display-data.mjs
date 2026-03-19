// Function to display the data (an array of companies) in cards
// Companies data structure example:
// {"name": "Global Services",
// "address": {
//     "district": "",
//     "street": "Av. Arequipa",
//     "number": "330",
//     "postalCode": "15046"
// },
// "phoneNumber": "+51 930 483 794",
// "websiteURL": "https://globalservices.pe",
// "imageURL": "https://globalservices.pe/wp-content/uploads/2022/08/global-services-logo-124x121.png",
// "membershipLevel": 1,
// "activities": ["Industrial Cleaning"]}
export function displayData(data, container) {
    container.innerHTML = '';
    data.forEach(company => {
        // Create the new elements for each company
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        name.classList.add('name');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let websiteURL = document.createElement('a');
        let memberLvl = document.createElement('p');
        memberLvl.classList.add('memberLevel');
        let activities = document.createElement('div'); // A div to contain the list of activities (easier styling)
        let activitiesList = document.createElement('ul'); // The list of activities

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
        address.innerHTML = `<span class="label">Address:</span> ${company.address.street} ${company.address.number} - ${company.address.district} ${company.address.postalCode} Lima, Peru`;
        phone.innerHTML = `<span class="label">Phone:</span> ${company.phoneNumber}`;

        website.innerHTML = `<span class="label">Website:</span> `;
        websiteURL.innerHTML = `${company.websiteURL}`;
        websiteURL.setAttribute('href', company.websiteURL);
        websiteURL.setAttribute('target', '_blank');
        website.appendChild(websiteURL);

        // List company Activities
        activities.innerHTML = `<span class="label">Activities:</span> `;
        activities.appendChild(activitiesList);
        // Create a list element for each activity listed
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
        card.appendChild(activities);

        container.appendChild(card);
    });
    
}