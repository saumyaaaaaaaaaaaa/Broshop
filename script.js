document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');

    // Change header background color on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#555';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Slideshow logic
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.querySelectorAll('.mySlides');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
});
function redirectToOrderPage() {
    // Add the actual URL to the order page
    window.location.href = 'https://pastryportal-orders.com';
}
// Add the following function to your existing script.js file

function purchasePackage(packageName) {
    // Add your purchase logic here
    alert(`Thank you for choosing ${packageName}! Your order has been placed.`);
    // You may want to implement actual purchase logic or redirect to a payment page.
}
// Add the following functions to your existing script.js file

let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic slideshow
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
    setInterval(() => {
        showSlides(slideIndex += 1);
    }, 3000); // Change slide every 3 seconds
});
