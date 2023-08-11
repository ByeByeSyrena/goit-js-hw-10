import axios from "axios";
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds } from "./cat-api";

const breedsList = document.querySelector(".breeds-div");
const listItem = document.querySelector(".selection");

fetchBreeds().then(data => console.log(data));

function renderBreeds(breeds) {

  return breeds
  .map(({ name, id }) => {
    `<option value="${id}" class="item">${name}</option>`
  })
    .join("");
  };