const currentYear = document.querySelector('#currentYear');

// GET CURRENT DATE AND DISPLAY IT
const today = new Date();
currentYear.innerHTML = `©${today.getFullYear()}`;