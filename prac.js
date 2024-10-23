// Get modal, button, and close elements
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementsByClassName('close-btn')[0];

// Open the modal when the button is clicked
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
