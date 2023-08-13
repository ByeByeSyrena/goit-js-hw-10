import axios from "axios";
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

// document.addEventListener('DOMContentLoaded', () => {
//   const breedSelect = document.getElementById('breed-select');
//   const catInfoDiv = document.querySelector('.cat-info');
//   const loader = document.querySelector('.loader');

//   const slimSelect = new SlimSelect({
//     select: breedSelect,
//     placeholder: 'Select a breed',
//     showSearch: false,
//     allowDeselect: true,
//   });

//   fetchBreeds()
//     .then(data => {
//       const breedOptions = data.map(item => ({ value: item.id, text: item.name }));
//       slimSelect.setData(breedOptions);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       loader.classList.remove('loading');
//     });
  
//   breedSelect.addEventListener('change', () => {
//     const selectedOption = breedSelect.options[breedSelect.selectedIndex];
//     const breedId = selectedOption.value;
    
//     fetchCatByBreed(breedId)
//       .then(catData => {
//         catInfoDiv.innerHTML = `
//           <img src="${catData.url}" alt="Cat Image" width="400px" height="362px">
//           <p><strong>Breed:</strong> ${catData.breeds[0].name}</p>
//           <p><strong>Description:</strong> ${catData.breeds[0].description}</p>
//           <p><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
//         `;
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = document.getElementById('breed-select');
  const catInfoDiv = document.querySelector('.cat-info');
  const loader = document.querySelector('.loader');
   const errorElement = document.querySelector('.error');

  const slimSelect = new SlimSelect({
    select: breedSelect,
    placeholder: 'Select a breed',
    showSearch: false,
    allowDeselect: true,
  });

  fetchBreeds()
    .then(data => {
      const breedOptions = data.map(item => ({ value: item.id, text: item.name }));
      breedOptions.unshift({ value: '', text: 'Select a breed', 'data-placeholder': 'true' }); // Add the placeholder option
      slimSelect.setData(breedOptions);

      loader.style.display = 'none';
      breedSelect.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
      errorElement.style.display = 'block';

      loader.style.display = 'none';
    });

  breedSelect.addEventListener('change', () => {
    const selectedOption = breedSelect.options[breedSelect.selectedIndex];
    const breedId = selectedOption.value;

    loader.style.display = 'inline-block';

    fetchCatByBreed(breedId)
      .then(catData => {
        catInfoDiv.innerHTML = `
          <img src="${catData.url}" alt="Cat Image" height="300" width="300">
          <p><strong>Breed:</strong> ${catData.breeds[0].name}</p>
          <p><strong>Description:</strong> ${catData.breeds[0].description}</p>
          <p><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
        `;

        errorElement.style.display = 'none';
        loader.style.display = 'none';
      })
      .catch(error => {
        console.error('Error:', error);
        errorElement.style.display = 'block';

        loader.style.display = 'none';
      });
  });
});