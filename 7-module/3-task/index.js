import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.elem = this.#stepSlider();
    this.#addSliderHandler();
    this.#makeStepActive(0);
  }
  #stepSlider() {
    return createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value">0</span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">${this.#sliderSteps()}</div>
      </div>
    `);
  }
  #sliderSteps() {
    let res = '';
    for (let i = 0; i < this.steps; i++) {
      res += '<span></span>';
    }
    return res;
  }
  #addSliderHandler() {
     this.elem.addEventListener('click', (event) => {
      let value = Math.round((this.steps - 1) * (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth);
      this.#makeStepActive(value);
    })
  }
  #makeStepActive(value) {
    this.elem.querySelectorAll('.slider__step-active').forEach(item => item.classList.remove('slider__step-active'));
    this.elem.querySelector('.slider__value').innerHTML = value;
    this.elem.querySelector('.slider__steps').children[value].classList.add('slider__step-active');
    let percent = value / (this.steps - 1) * 100;
    this.elem.querySelector('.slider__thumb').style.left = `${percent}%`;
    this.elem.querySelector('.slider__progress').style.width = `${percent}%`;
    let sliderEvent = new CustomEvent('slider-change', {
      bubbles: true,
      detail: value
    });
    this.elem.dispatchEvent(sliderEvent);
  }
}
