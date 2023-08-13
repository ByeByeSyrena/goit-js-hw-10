import axios from 'axios';

// ***********************************************************************************************

// Варіант через fetch

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

// ***********************************************************************************************

// Варіант 1 (через асинхронні функції)


// const apiKey = 'live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl';

// const fetchBreeds = async () => {
//   const url = 'https://api.thecatapi.com/v1/breeds';

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         'x-api-key': apiKey
//       }
//     });

//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching breeds data');
//   }
// };

// const fetchCatByBreed = async (breedId) => {
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         'x-api-key': apiKey
//       }
//     });

//     return response.data[0];
//   } catch (error) {
//     throw new Error('Error fetching cat data');
//   }
// };

// Варіант 2

axios.defaults.headers.common['x-api-key'] = 'live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';

function fetchBreeds() {
    return axios.get()
        .then(response => {

            console.log(response);

            if (response.status !== 200) {
                throw new Error('You are dead');
            }
            return response.data;
        })
}


export { fetchBreeds, fetchCatByBreed };
    
// ***********************************************************************************************

// Практика з ментором

// export default function pokemonsApi() {
//     const BASE_URL = "https://pokeapi.co/"
//     const url = `${BASE_URL}api/v2/pokemon?limit=10&offset=0`

//     return axios.get(url)
//         .then(response => {
//             if (response.status !== 200) {
//                 throw new Error(response.message);
//             }
//             return response.data.results;
//     })
// }
    
// ***********************************************************************************************
