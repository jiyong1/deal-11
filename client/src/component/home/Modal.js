import Component from '../../core/Component.js';
import { $router } from '../../lib/router.js';

export default class ModalWrapper extends Component {
  template() {
    return `
      <div class="modal">
      </div>
    `;
  }
  mounted() {
    new Modal(this.$target.querySelector('.modal'), {}, this.store);
  }
}

class Modal extends Component {
  template() {
    return `
      <div>
        <div class="modal-btn-container post">
          <p>게시하기</p>
          <div><i class="fas fa-pencil-alt"></i></div>
        </div>
        <div class="modal-btn-container mycity">
          <p>내 동네 추가하기</p>
          <div><i class="fas fa-building"></i></div>
        </div>
      </div>
    `;
  }
  setEvent() {
    this.addEvent('click', '.modal', (e) => {
      if (!e.target.closest('.modal-btn-container')) {
        this.store.dispatch('modalChange', false);
        const modal = this.$target.parentNode;

        document.querySelector('.plus-btn').classList.remove('exit-btn');
        this.$target.querySelector('div').classList.add('down');
        setTimeout(() => {
          modal.classList.remove('on');
          while (modal.hasChildNodes()) {
            modal.removeChild(modal.lastChild);
          }
        }, 300);
      } else {
        if (e.target.closest('.post')) {
          $router.push('/post', 3);
        }
        if (e.target.closest('.mycity')) {
          $router.push('/location', 3);
        }
      }
    });
  }
}
