import "../css/MovieCard.css"

function MovieCard({ movie }) {
  const languageMap = {
    en: "English",
    es: "Spanish",
    fr: "French",
    hi: "Hindi",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese",
    de: "German",
    it: "Italian",
    ru: "Russian",
    pt: "Portuguese",
    ar: "Arabic",
  };

  function onFavoriteClick() {
   
  }

  const truncateOverview = (text, maxLength = 100) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;

    return text.substr(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
        </div>
      </div>

      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date?.split("-")[0]}</p>
        <p>Rating: {movie.vote_average}</p>
        <p className="movie-overview">{truncateOverview(movie.overview)}</p>
        <p>Language: {languageMap[movie.original_language] || movie.original_language}</p>
      </div>
    </div>
  );
}

export default MovieCard;
