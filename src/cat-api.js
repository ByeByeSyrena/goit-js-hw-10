// export function fetchBreeds() {
//   const BREED_URL = "https://api.thecatapi.com/v1/breeds";
//   const API_KEY = "live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl";

//   return fetch(`${BREED_URL}?api_key=${API_KEY}`).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
// });
// };

import axios from 'axios';

const apiKey = 'live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl';

const fetchBreeds = async () => {
  const url = 'https://api.thecatapi.com/v1/breeds';

  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': apiKey
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Error fetching breeds data');
  }
};

const fetchCatByBreed = async (breedId) => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': apiKey
      }
    });

    return response.data[0];
  } catch (error) {
    throw new Error('Error fetching cat data');
  }
};

export { fetchBreeds, fetchCatByBreed };