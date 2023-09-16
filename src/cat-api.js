import axios from 'axios';
axios.defaults.headers.common[
  'live_sOFtik4WDSjybLGVr2xDDZmFIxxo3QmzgPgMcGLZ8T2Ql2Wbo0kv1tsbDr4uf4Wr'
];

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      const selectEl = document.querySelector('.breed-select');
      const markUp = data.reduce((html, element) => {
        return html + `<option value ="${element.id}">${element.name}</option>`;
      }, ``);
      selectEl.innerHTML = markUp;
    })
    .catch(error => console.log(error));
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data[0].url);
      const catInfoEl = document.querySelector('.cat-info');
      catInfoEl.innerHTML = '';
      catInfoEl.insertAdjacentHTML(
        'beforeend',
        `<img src=${data[0].url} width='300px'>`
      );
    });
}

export function fetchDescByBreed(breedId) {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const catInfo = data.find(element => element.id === breedId);
      console.log(catInfo);
      const catInfoEl = document.querySelector('.cat-info');
      catInfoEl.insertAdjacentHTML(
        'beforeend',
        `<img src=''>
        <p>${catInfo.description}</p>`
      );
    });
}
