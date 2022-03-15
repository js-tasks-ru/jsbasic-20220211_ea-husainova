function initCarousel() {
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let slidesLength = document.querySelectorAll('.carousel__slide').length;
  let slideNum = 0;
  let updateUI = function() {
    carouselInner.style.transform = 'translateX(-' + (carouselInner.offsetWidth * slideNum) + 'px)';
    if (slideNum == 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
    if (slideNum == slidesLength - 1) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }
  }
  updateUI();
  carouselArrowRight.addEventListener('click', function () {
    slideNum += 1;
    updateUI();
  });
  carouselArrowLeft.addEventListener('click', function () {
    slideNum -= 1;
    updateUI();
  });
}
