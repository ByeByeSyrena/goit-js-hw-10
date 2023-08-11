// async function getBreeds(){
// try{
// axios.defaults.headers.common["x-api-key"] = "live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl";
// let response = await axios.get('https://api.thecatapi.com/v1/breeds/' )
// this.breeds = response.data;
// console.log("-- ("+this.breeds.length +") Breeds from TheCatAPI.com")
// this.selected_breed = this.breeds[10]
// }
//   catch (err) { console.log(err) }
// };

import axios from "axios";
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds } from "./cat-api";

const slim = new SlimSelect({
  select: '#single'
})

const breedsList = document.querySelector(".breeds-div");
const listItem = document.getElementById("single");

fetchBreeds().then(data => console.log(data));

function renderBreeds(breeds) {

  const markup = breeds
  .map(({ name, id }) => {
    `<option value="${id}" class="item">${name}</option>`
  })
    .join("");
  return markup;
  listItem.insertAdjacentHTML("beforeend", markup);
};