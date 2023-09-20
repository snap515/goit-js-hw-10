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
