import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.isMoving = false;
    this.stepNum = value;
    this.sliderPos = 0;
    this.elem = this.#stepSlider();
    this.#addSliderHandlers();
    this.#updateSliderDiscrete();
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
  #addSliderHandlers() {
    let sliderThumb = this.elem.querySelector('.slider__thumb');
    sliderThumb.addEventListener('pointerdown', () => {
      this.isMoving = true;
      this.#updateIsMoving();
    });
    document.addEventListener('pointerup', () => {
      if (!this.isMoving) {
        return;
      }
      this.isMoving = false;
      this.#updateIsMoving();
      this.#updateSliderDiscrete();
    });
    document.addEventListener('pointermove', (event) => {
      if (!this.isMoving) {
        return;
      }
      let newSliderPos = event.clientX - this.elem.getBoundingClientRect().left;
      if (newSliderPos < 0 || newSliderPos > this.elem.offsetWidth) {
        return;
      }
      this.sliderPos = newSliderPos;
      this.stepNum = Math.round((this.steps - 1) * newSliderPos / this.elem.offsetWidth);
      this.#updateSliderСontinuous();
    });
    this.elem.addEventListener('click', (event) => {
      this.sliderPos = event.clientX - this.elem.getBoundingClientRect().left;
      this.stepNum = Math.round((this.steps - 1) * this.sliderPos / this.elem.offsetWidth);
      this.#updateSliderDiscrete();
    });
  }
  #updateIsMoving() {
    if (this.isMoving) {
      this.elem.classList.add('slider_dragging');
    } else {
      this.elem.classList.remove('slider_dragging');
    }
  }
  #updateSliderDiscrete() {
    let percent = this.stepNum / (this.steps - 1) * 100;
    let sliderEvent = new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.stepNum
    });
    this.elem.dispatchEvent(sliderEvent);
    this.#updateSliderUI(percent);
  }
  #updateSliderСontinuous() {
    let percent = this.elem.offsetWidth !== 0 ? this.sliderPos / this.elem.offsetWidth * 100 : 0;
    this.#updateSliderUI(percent);
  }
  #updateSliderUI(percent) {
    this.elem.querySelectorAll('.slider__step-active').forEach(item => item.classList.remove('slider__step-active'));
    this.elem.querySelector('.slider__value').innerHTML = this.stepNum;
    this.elem.querySelector('.slider__steps').children[this.stepNum].classList.add('slider__step-active');
    this.elem.querySelector('.slider__thumb').style.left = `${percent}%`;
    this.elem.querySelector('.slider__progress').style.width = `${percent}%`;
  }
}
