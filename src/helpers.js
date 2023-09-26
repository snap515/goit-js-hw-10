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

export function showSelectLoader() {
  const breedSelectorEl = document.querySelector('.breed-select');
  const loaderEl = document.querySelector('.loader');

  loaderEl.hidden = false;
  breedSelectorEl.hidden = true;
}

export function hideSelectLoader() {
  const breedSelectorEl = document.querySelector('.breed-select');
  const loaderEl = document.querySelector('.loader');

  loaderEl.hidden = true;
  breedSelectorEl.hidden = false;
}

export function showOptionLoading() {
  const catInfoEl = document.querySelector('.cat-info');
  const loaderEl = document.querySelector('.loader');
  catInfoEl.innerHTML = '';
  catInfoEl.hidden = true;
  loaderEl.hidden = false;
}

export function hideOptionLoading() {
  const catInfoEl = document.querySelector('.cat-info');
  const loaderEl = document.querySelector('.loader');
  catInfoEl.hidden = false;
  loaderEl.hidden = true;
}

export function showFetchMistake() {
  const errorEl = document.querySelector('.error');

  errorEl.hidden = false;
}

export function hideFetchMistake() {
  const errorEl = document.querySelector('.error');

  errorEl.hidden = true;
}
