let slideIndex = 0;
let slideInterval;

showSlides();
startAutoSlide();

function showSlides() {
    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    clearInterval(slideInterval); 
    showSlidesManually(slideIndex += n);
    startAutoSlide();
}


function showSlidesManually(n) {
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        showSlides();
    }, 5000);
}
