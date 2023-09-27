import axios from 'axios';
axios.defaults.headers.common[
  'live_sOFtik4WDSjybLGVr2xDDZmFIxxo3QmzgPgMcGLZ8T2Ql2Wbo0kv1tsbDr4uf4Wr'
];

import {
  hideSelectLoader,
  markupCreator,
  showSelectLoader,
  hideOptionLoading,
  showOptionLoading,
  showFetchMistake,
  hideFetchMistake,
} from './helpers';

import SlimSelect from 'slim-select';

const URL = `https://api.thecatapi.com/v1`;

export function fetchBreeds() {
  showSelectLoader();
  hideFetchMistake();

  return fetch(`${URL}/breeds`)
    .then(response => {
      if (!response.ok) {
        hideSelectLoader();
        showFetchMistake();
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      const options = data.reduce((option, { name, reference_image_id }) => {
        option.push({
          text: name,
          value: reference_image_id,
        });
        return option;
      }, []);
      new SlimSelect({
        select: '#breedSelect',
        data: options,
      });

      hideSelectLoader();
    })
    .catch(error => console.log(error));
}

export function fetchCatByBreed(breedId) {
  hideFetchMistake();
  showOptionLoading();
  return fetch(`${URL}/images/${breedId}`)
    .then(response => {
      if (!response.ok) {
        hideSelectLoader();
        hideOptionLoading();
        showFetchMistake();
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ url, breeds }) => {
      const catInfoEl = document.querySelector('.cat-info');
      hideOptionLoading();
      catInfoEl.innerHTML = markupCreator(
        url,
        breeds[0].name,
        breeds[0].description,
        breeds[0].temperament
      );
    });
}
