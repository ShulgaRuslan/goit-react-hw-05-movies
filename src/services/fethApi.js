const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '5ccc52ff517b9ef53bd77baeca7b01c7';

async function fetchMovies(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
    return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}


export function fetchMovieDetails(movieId) {
    return fetchMovies(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
}

export function fetchMovieCredits(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
}

export function fetchSearchMovie(searchQuery) {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
}