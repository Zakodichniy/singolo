const navbar = document.querySelector("nav");

navbar.addEventListener('click',(event) => {
    let target = event.target;
    if (target.tagName != 'A') return;
    const a = navbar.querySelectorAll('a');
    a.forEach(el => el.classList.remove('active'));
    console.log(event.target);
    event.target.classList.add('active');

});

// слайдер:

var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slide");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
   
}

//черный экран телефонов:



document.querySelector('.slider-phone-button1').addEventListener('click', () => {
    document.querySelector(".slider-black-screen1").toggleAttribute('hidden');
});
document.querySelector('.slider-phone-button2').addEventListener('click', () => {
    document.querySelector(".slider-black-screen2").toggleAttribute('hidden');
});