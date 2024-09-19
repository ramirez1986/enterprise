import { Modal, Select } from '../../../components/modals/modals.js';

const heroEm = document.querySelector('.js-main-hero');

const heroSearch = {
  mobileModal: new Modal(
    heroEm.querySelector('.js-search-filters-mobile'),
    {
      detached: true,
      left: 0,
      top: 0,
    },
  ),
  cancelBtn: null,
  applyBtn: null,
};

heroSearch.cancelBtn = heroSearch.mobileModal.modal.querySelector('.js-search-filters-cancel-btn');
heroSearch.applyBtn = heroSearch.mobileModal.modal.querySelector('.js-search-filters-apply-btn');

heroSearch.cancelBtn.addEventListener('click', (e) => {
  heroSearch.mobileModal.close();
});

heroSearch.applyBtn.addEventListener('click', (e) => {
  heroSearch.mobileModal.close();
});