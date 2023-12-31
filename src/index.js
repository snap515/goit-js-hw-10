// import axios from 'axios';
// axios.defaults.headers.common[
//   'live_sOFtik4WDSjybLGVr2xDDZmFIxxo3QmzgPgMcGLZ8T2Ql2Wbo0kv1tsbDr4uf4Wr'
// ];
import SlimSelect from 'slim-select';
import { markupCreator, LoadHideEvents } from './helpers';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const loadHideEvents = new LoadHideEvents();
const catInfoEl = document.querySelector('.cat-info');
const selectEl = document.querySelector('.breed-select');
selectEl.addEventListener('change', onSelectChange);

loadHideEvents.showSelectLoader();
fetchBreeds()
  .then(data => {
    let selectMarkup = data
      .map(({ name, reference_image_id }) => {
        return `<option value=${reference_image_id}>${name}</option>`;
      })
      .join('');
    selectMarkup = '<option data-placeholder="true"></option>' + selectMarkup;
    selectEl.insertAdjacentHTML('beforeend', selectMarkup);
    //! METHOD REDUCE
    // const options = data.reduce((option, { name, reference_image_id }) => {
    //   option.push({
    //     text: name,
    //     value: reference_image_id,
    //   });
    //   return option;
    // }, []);
    //!
    new SlimSelect({
      select: '#breedSelect',
      //!METHOD REDUCE
      // data: options,
      //!
      settings: {
        searchPlaceholder: 'Search',
        placeholderText: 'Choose a breed',
      },
    });
  })
  .catch(error => {
    loadHideEvents.hideSelectLoader();
    loadHideEvents.showFetchMistake();
    console.dir(error);
  })
  .finally(() => {
    loadHideEvents.hideSelectLoader();
  });

function onSelectChange(e) {
  loadHideEvents.showOptionLoading();
  const breedId = e.target.value;
  fetchCatByBreed(breedId)
    .then(({ url, breeds }) => {
      catInfoEl.innerHTML = markupCreator(
        url,
        breeds[0].name,
        breeds[0].description,
        breeds[0].temperament
      );
    })
    .catch(error => {
      loadHideEvents.hideOptionLoading();
      loadHideEvents.showFetchMistake();
      console.log(error);
    })
    .finally(() => {
      loadHideEvents.hideOptionLoading();
    });
}
