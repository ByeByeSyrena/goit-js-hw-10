import axios from "axios";
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = document.getElementById('breed-select');
  const catInfoDiv = document.querySelector('.cat-info');
  const loader = document.querySelector('.loader');
  const errorElement = document.querySelector('.error');

  // Function to toggle loader visibility
  function toggleLoader(isLoading) {
    if (isLoading) {
      loader.style.display = 'inline-block';
    } else {
      loader.style.display = 'none';
    }
  }

  // Fetch and populate breed options
  toggleLoader(true);
  fetchBreeds()
    .then(data => {
      data.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.text = breed.name;
        breedSelect.appendChild(option);
      });

      // Hide select.breed-select and show p.loader
      breedSelect.style.display = 'block';
      toggleLoader(false);
    })
    .catch(error => {
      console.error('Error:', error);

      // Display p.error element and hide p.loader
      errorElement.style.display = 'block';
      toggleLoader(false);
    });

  // Add event listener to the breedSelect element
  breedSelect.addEventListener('change', async () => {
    const selectedOption = breedSelect.options[breedSelect.selectedIndex];
    const breedId = selectedOption.value;

    // Show div.cat-info and show p.loader
    catInfoDiv.style.display = 'none';
    toggleLoader(true);

    try {
      const catData = await fetchCatByBreed(breedId);

      // Update cat info in the div.cat-info block
      catInfoDiv.innerHTML = `
        <img src="${catData.url}" alt="Cat Image" height="300" width="300">
        <p><strong>Breed:</strong> ${catData.breeds[0].name}</p>
        <p><strong>Description:</strong> ${catData.breeds[0].description}</p>
        <p><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
      `;

      // Hide div.cat-info and hide p.loader
      catInfoDiv.style.display = 'block';
      toggleLoader(false);
      errorElement.style.display = 'none';
    } catch (error) {
      console.error('Error:', error);

      // Display p.error element and hide p.loader
      errorElement.style.display = 'block';
      toggleLoader(false);
    }
  });
});