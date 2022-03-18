import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    let self = this;
    this.slides = slides;
    this.elem = this.#getCarousel();
    this.#addMoveHandler();
    this.elem.querySelectorAll('.carousel__button').forEach(button => button.addEventListener('click', function() {
      let slide = slides[self.slideNumber];
      let carouselEvent = new CustomEvent('product-add', {
        bubbles: true,
        detail: slide.id
      });
      self.elem.dispatchEvent(carouselEvent);
    }));
  }
  #getCarousel() {
    return createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${this.#getSlides()}
      </div>
    </div>
    `)
  }
  #getSlides() {
    return this.slides.map(slide => `
    <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `).join('');
  }
  #addMoveHandler() {
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let slidesLength = this.slides.length;
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let self = this;
    this.slideNumber = 0;
    let updateUI = function() {
      carouselInner.style.transform = 'translateX(-' + carouselInner.offsetWidth * self.slideNumber + 'px)';
      if (self.slideNumber == 0) {
        carouselArrowLeft.style.display = 'none';
      } else {
        carouselArrowLeft.style.display = '';
      }
      if (self.slideNumber == slidesLength - 1) {
        carouselArrowRight.style.display = 'none';
      } else {
        carouselArrowRight.style.display = '';
      }
    }
    updateUI();
    carouselArrowRight.addEventListener('click', function() {
      self.slideNumber += 1;
      updateUI();
    });
    carouselArrowLeft.addEventListener('click', function() {
      self.slideNumber -= 1;
      updateUI();
    });
  }
}
