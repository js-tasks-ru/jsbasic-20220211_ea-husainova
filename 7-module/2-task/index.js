import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.#modalWindow();
    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    })
  }
  #modalWindow() {
    return createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `)
  }
  open() {
    let body = document.querySelector('body');
    body.appendChild(this.elem);
    body.classList.add('is-modal-open');
    this.escHandler = (event) => {
      if (event.code !== 'Escape') {
        return;
      }
      this.close();
    };
    document.addEventListener('keydown', this.escHandler);
  }
  setTitle(title) {
    this.elem.querySelector('.modal__title').innerHTML = title;
  }
  setBody(modalBodyNode) {
    let mb = this.elem.querySelector('.modal__body');
    mb.innerHTML = '';
    mb.appendChild(modalBodyNode);
  }
  close() {
    let body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    this.elem.remove();
    document.removeEventListener('keydown', this.escHandler);
  }
}
