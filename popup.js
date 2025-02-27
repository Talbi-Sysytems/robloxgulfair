// Show the popup when the page is fully loaded
window.onload = function() {
    showPopup();
};

function showPopup() {
    document.getElementById('infoPopup').style.display = 'block'; // Show the popup
}

function closePopup() {
    document.getElementById('infoPopup').style.display = 'none'; // Hide the popup
}

// popup.js (Add this code to your existing popup.js file or create a new one)
window.onscroll = function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};
