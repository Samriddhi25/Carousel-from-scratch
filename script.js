
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var prevButton = document.getElementsByClassName("prev");
var nextButton = document.getElementsByClassName("next");
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n
  if (slideIndex > slides.length) { slideIndex = slides.length }
  if (slideIndex < 1) { slideIndex = 1 }

  if (slideIndex === 1) {
    prevButton[0].classList.add("disable")
    prevButton[0].classList.remove("activee")
  }
  else {
    prevButton[0].classList.remove("disable")
    prevButton[0].classList.add("activee")
  }

  if (slideIndex === slides.length) {
    nextButton[0].classList.add("disable")
    nextButton[0].classList.remove("activee")
  }
  else {
    nextButton[0].classList.remove("disable")
    nextButton[0].classList.add("activee")
  }
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}