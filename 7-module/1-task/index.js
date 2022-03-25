import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.#getRibbon();
    this.#addScroll();
    this.elem.querySelector('.ribbon__item').classList.add('ribbon__item_active');
    let items = this.elem.querySelectorAll('.ribbon__item');
    items.forEach(item => item.addEventListener('click', () => {
      items.forEach(item2 => item2.classList.remove('ribbon__item_active'));
      item.classList.add('ribbon__item_active');
      let categoryEvent = new CustomEvent('ribbon-select', {
        detail: item.dataset.id,
        bubbles: true
      });
      this.elem.dispatchEvent(categoryEvent);
    }));
  }
  #getRibbon() {
    return createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
        ${this.#getCategoryLink()};
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  </div>
    `)
  }
  #getCategoryLink() {
    return this.categories.map(category => `
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
    `).join('');
  }
  #addScroll() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    ribbonArrowRight.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    })
    ribbonArrowLeft.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    });
    ribbonInner.addEventListener('scroll', () => {
      if (ribbonInner.scrollLeft == 0) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }
      if (ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth < 1) {
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
    });
  }
}
