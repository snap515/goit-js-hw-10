import axios from 'axios';
axios.defaults.headers.common[
  'live_sOFtik4WDSjybLGVr2xDDZmFIxxo3QmzgPgMcGLZ8T2Ql2Wbo0kv1tsbDr4uf4Wr'
];
import { markupCreator } from './helpers';

const URL = `https://api.thecatapi.com/v1/images/`;

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const selectEl = document.querySelector('.breed-select');
      const markUp = data.reduce((html, element) => {
        return (
          html +
          `<option value ="${element.reference_image_id}">${element.name}</option>`
        );
      }, ``);
      selectEl.innerHTML = markUp;
    })
    .catch(error => console.log(error));
}

export function fetchCatByBreed(breedId) {
  return fetch(`${URL}${breedId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ url, breeds }) => {
      const catInfoEl = document.querySelector('.cat-info');

      catInfoEl.innerHTML = markupCreator(
        url,
        breeds[0].name,
        breeds[0].description,
        breeds[0].temperament
      );
    });
}

// export function fetchDescByBreed(breedId) {
//   return fetch('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       const catInfo = data.find(element => element.id === breedId);
//       // console.log(catInfo);
//       const catInfoEl = document.querySelector('.cat-info');
//       catInfoEl.insertAdjacentHTML(
//         'beforeend',
//         `<img src=''>
//         <p>${catInfo.description}</p>`
//       );
//     });
// }

// export function fetchDescByBreed(breedId) {
//   return fetch('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       const catInfo = data.find(element => element.id === breedId);
//       console.log(catInfo);
//       const catInfoEl = document.querySelector('.cat-info');
//       catInfoEl.insertAdjacentHTML(
//         'beforeend',
//         `<img src=''>
//         <p>${catInfo.description}</p>`
//       );
//     });
// }
