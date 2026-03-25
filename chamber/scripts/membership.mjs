import { apiFetch } from "./fetch.mjs";

const modal = document.querySelector('#membershipDetail');
const npBtn = document.querySelector('#np .info-btn');
const bronzeBtn = document.querySelector('#bronze .info-btn');
const silverBtn = document.querySelector('#silver .info-btn');
const goldBtn = document.querySelector('#gold .info-btn');

const dataFile = 'data/memberships.json';
const membershipData = await apiFetch(dataFile);
// Data Structure
// "memberships": [
//        {
//            "name": "Non Profit",
//            "level": 0,
//            "cost": 0,
//            "benefits": ["Free access to special events", "Exclusive trainings"]
//        }, ... 
//        (+3 entries)
// To test
// console.log(membershipData);

const np = membershipData.memberships[0];
const bronze = membershipData.memberships[1];
const silver = membershipData.memberships[2];
const gold = membershipData.memberships[3];

npBtn.addEventListener('click', () => {
    displayMembershipData(np);
});

bronzeBtn.addEventListener('click', () => {
    displayMembershipData(bronze);
});

silverBtn.addEventListener('click', () => {
    displayMembershipData(silver);
});

goldBtn.addEventListener('click', () => {
    displayMembershipData(gold);
});

function displayMembershipData(memberData) {
    // Reinitialize the Modal
    modal.innerHTML = '';
    modal.classList.value = '';

    let name = document.createElement('h2');
    let cost = document.createElement('span');
    let benefits = document.createElement('ul');

    name.innerHTML = `${memberData.name}`;
    if (memberData.cost == 0) {
        cost.innerHTML = `<span class="price">Free!</span>`;
    } else {
        cost.innerHTML = `<span class="price">S/${memberData.cost.toFixed(2)}</span> /month`;
    }
    memberData.benefits.forEach(benefit => {
        let li = document.createElement('li');
        li.textContent = benefit;
        benefits.appendChild(li);
    });

    modal.appendChild(name);
    modal.appendChild(cost);
    modal.appendChild(benefits);

    modal.showModal();
    modal.classList.add(memberData.simple);
}