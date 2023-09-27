import Notiflix from 'notiflix';

export function markupCreator(imgUrl, name, description, temperament) {
  return `
      <img style='margin-right: 20px' src=${imgUrl} width='400px'>
      <div >
        <h2>${name}</h2>
        <p>${description}</p>
        <h3 style="display: inline">Temperament: </h3>
        <p style="display: inline">${temperament}</p>
      </div>`;
}

export class LoadHideEvents {
  constructor() {}

  showSelectLoader() {
    const breedSelectorEl = document.querySelector('.breed-select');
    const loaderEl = document.querySelector('.loader');

    loaderEl.hidden = false;
    breedSelectorEl.hidden = true;
  }

  hideSelectLoader() {
    const breedSelectorEl = document.querySelector('.breed-select');
    const loaderEl = document.querySelector('.loader');

    loaderEl.hidden = true;
    breedSelectorEl.hidden = false;
  }

  showOptionLoading() {
    const catInfoEl = document.querySelector('.cat-info');
    const imgLoaderEl = document.querySelector('.img-loader');
    catInfoEl.innerHTML = '';
    catInfoEl.hidden = true;
    imgLoaderEl.style = 'display: inline-block';
  }

  hideOptionLoading() {
    const catInfoEl = document.querySelector('.cat-info');
    const imgLoaderEl = document.querySelector('.img-loader');
    catInfoEl.hidden = false;
    imgLoaderEl.style = 'display: none';
  }

  showFetchMistake() {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  }
}
