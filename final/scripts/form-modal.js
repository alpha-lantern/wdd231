const formModal = document.querySelector('#formModal');
const requestButton = document.querySelector('#requestButton');
const closeButton = document.querySelector('#closeButton');

requestButton.addEventListener('click', () => {
    formModal.showModal();
});

closeButton.addEventListener('click', () => {
    formModal.close();
})