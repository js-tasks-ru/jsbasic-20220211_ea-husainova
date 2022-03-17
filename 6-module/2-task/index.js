import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    let elem = this.#getCard(product);
    this.elem = elem;
    this.elem.querySelector('.card__button').addEventListener('click', function() {
      let newEvent = new CustomEvent('product-add', {
        bubbles: true,
        detail: product.id,
      });
      elem.dispatchEvent(newEvent);
    });
  }
  #getCard(product) {
    return createElement(`
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>
    `);
  }
}