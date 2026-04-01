// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;

const dateToday = new Date();
const visitLog = document.getElementById('visitLog');
visitLog.showPopover();
const message = document.getElementById('message');

let lastVisit = localStorage.getItem('lastVisited');
// Debugging
// console.log(dateToday.getTime());
// console.log(lastVisit.getTime());

if (lastVisit == null) {
    localStorage.setItem('lastVisited', dateToday);
    message.innerHTML = `Welcome! Let us know if you have any questions.`;

} else if ((dateToday - new Date(lastVisit)) < msToDays) {
    message.innerHTML = `Back so soon! Awesome!`;
    
} else {
    let difference = (dateToday - new Date(lastVisit)) / msToDays;
    message.innerHTML = `You last visited ${difference.toFixed(0)} days ago.`;
    // Debugging
    // console.log(difference);
}