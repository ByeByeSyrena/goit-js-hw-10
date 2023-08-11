export function fetchBreeds() {
  const BREED_URL = "https://api.thecatapi.com/v1/breeds";
  const API_KEY = "live_mXjm47POW8Phdo9Nhd7mxlPc4qUZox4wMRdvld3sJAmBTwyePEUIGcVkHSJiXbpl";
//   let limit = 10;

  return fetch(`${BREED_URL}?api_key=${API_KEY}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
});
};