function slider() {
    let slideIndex = 1;
    let slides = document.querySelectorAll('.reviews__item');
    let prev = document.querySelector('.slider__toggle--before');
    let next = document.querySelector('.slider__toggle--next');

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((item) => {
        item.style.display = "none"
      });

      slides[slideIndex - 1].style.display = "block";

    }

    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }


    prev.addEventListener('click', function (evt) {
      plusSlides(-1);
    })

    next.addEventListener('click', function (evt) {
      plusSlides(1);
    })

}

module.exports = slider;
