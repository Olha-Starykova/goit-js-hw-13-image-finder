import servise from './apiService';
import cardImeges from '../templates/articles.hbs';
import refs from './refs';

refs.searchForm.addEventListener('submit', imageSearchInput);
refs.loadMoreBtn.addEventListener('click', loadMoreBtn);

function imageSearchInput(e) {

  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();

  servise.resetPage();
  servise.searchQuerry = input.value;

  servise.fetcArticles().then(hits => {
    const markup = buildTemplate(hits);
    iserListItems(markup);
  });
  input.value = '';
}

function loadMoreBtn() {
  servise.fetcArticles().then(hits => {
    const markup = buildTemplate(hits);
    iserListItems(markup);
    window.scrollTo(0, 1000);

    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  });
}
function iserListItems(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}
function buildTemplate(items) {
  return cardImeges(items);
}
function clearListItems() {
  refs.gallery.innerHTML = '';
}