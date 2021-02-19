const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  async fetcArticles(query) {
    const keyapi = '20314649-0be4b13706b99da5b0e7a5a44';
    const requestparams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyapi}`;
    const res = await fetch(baseUrl + requestparams);
    const parseRes = await res.json();
    this.incrementPage();
    return parseRes.hits;
  },
  get searchQuerry() {
    return this.query;
  },
  set searchQuerry(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};