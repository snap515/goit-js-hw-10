export function catApi() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const selectEl = document.querySelector('.breed-select');
      console.log(data);
      const markUp = data.reduce((html, element) => {
        return html + `<option value ="${element.id}">${element.name}</option>`;
      }, ``);
      selectEl.innerHTML = markUp;
    })
    .catch(error => console.log(error));
}
