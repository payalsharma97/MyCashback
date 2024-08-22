/*------------main-js--------*/

// Get the navbar-toggler button
const navbarToggler = document.querySelector('.navbar-toggler');

// Add an event listener for the click event
navbarToggler.addEventListener('click', function() {
    // Toggle the class on the body element
    document.body.classList.toggle('body-toggled');
});

const accordionHeaders = document.querySelectorAll('.card-head');
if(accordionHeaders.length) {
    for(let i = 0; i <= accordionHeaders.length; i++) {
        accordionHeaders[i].addEventListener('click', function() {
            this.parentNode.classList.toggle('active');
        });
    }
}