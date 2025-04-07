const API_KEY = "4ec0b563f294e7b8645a90f1cd71abf8";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1) => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    
    return {
        movies: data.results,
        totalPages: data.total_pages,
        currentPage: data.page
    };
};

export const searchMovies = async (query, page = 1) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    );
    const data = await response.json();
    
    return {
        movies: data.results,
        totalPages: data.total_pages,
        currentPage: data.page
    };
};