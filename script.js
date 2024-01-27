function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to rotate the image based on scroll position
function rotateImageOnScroll() {
    const headerImage = document.querySelector('.image img');
    const scrollY = window.scrollY || window.pageYOffset;
    const rotationValue = `rotate(${scrollY / 5}deg)`; // Adjust the division factor to control the rotation speed

    headerImage.style.transform = rotationValue;
}


// Event listener for scroll events
window.addEventListener('scroll', rotateImageOnScroll);

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


