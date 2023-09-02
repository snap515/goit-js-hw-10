import axios from 'axios';
axios.defaults.headers.common[
  'live_sOFtik4WDSjybLGVr2xDDZmFIxxo3QmzgPgMcGLZ8T2Ql2Wbo0kv1tsbDr4uf4Wr'
];

import { catApi } from './cat-api';

catApi();

// const selectEl = document.querySelector('.breed-select');
// selectEl.addEventListener('change', onSelectChange);

// function onSelectChange() {
//   return fetch('https://api.thecatapi.com/v1/images/search').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
