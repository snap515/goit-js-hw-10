import axios from 'axios';
axios.defaults.headers.common[
  'live_sOFtik4WDSjybLGVr2xDDZmFIxxo3QmzgPgMcGLZ8T2Ql2Wbo0kv1tsbDr4uf4Wr'
];

import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

fetchBreeds();

const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', onSelectChange);

function onSelectChange(e) {
  const breedId = e.target;
  console.dir(breedId);
  fetchCatByBreed(breedId);
}
