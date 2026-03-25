const params = new URLSearchParams(window.location.search);
const firstName = params.get('name');
const lastName = params.get('last-name');
const email = params.get('email');
const phone = params.get('telephone');
const organization = params.get('organization');
const timestamp = params.get('timestamp');

document.querySelector('#name').textContent = firstName;
document.querySelector('#last').textContent = lastName;
document.querySelector('#email').textContent = email;
document.querySelector('#phone').textContent = phone;
document.querySelector('#organization').textContent = organization;
document.querySelector('#timestamp').textContent = timestamp;
