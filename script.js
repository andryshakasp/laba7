function toggleText() {
    var textBlock = document.getElementById("textBlock");
    var button = document.getElementById("button");

    if (textBlock.classList.contains("expanded")) {
        textBlock.classList.remove("expanded");
        button.textContent = "Показать больше";
    } else {
        textBlock.classList.add("expanded");
        button.textContent = "Свернуть";
    }
    var moreText = document.getElementById("more-text");
    var button = document.querySelector("button");
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        button.textContent = "Показать меньше";
    } else {
        moreText.classList.add("hidden");
        button.textContent = "Показать больше";
    }
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


    

