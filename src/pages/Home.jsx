import MovieCard from "../components/MovieCard";
import { useState, useEffect, useRef, useCallback } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  
  // Reference to the observer
  const observer = useRef();
  
  // Reference to the last movie element
  const lastMovieElementRef = useCallback(node => {
    if (loading) return;
    
    if (observer.current) {
      observer.current.disconnect();
    }
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) {
      observer.current.observe(node);
    }
  }, [loading, hasMore]);

  // Load initial movies
  useEffect(() => {
    const loadInitialMovies = async () => {
      try {
        setLoading(true);
        const result = await getPopularMovies(1);
        setMovies(result.movies);
        setTotalPages(result.totalPages);
        setHasMore(1 < result.totalPages);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    };

    if (initialLoad) {
      loadInitialMovies();
    }
  }, [initialLoad]);

  // Load more movies when page changes
  useEffect(() => {
    const loadMoreMovies = async () => {
      if (initialLoad || page === 1) return;
      
      try {
        setLoading(true);
        
        const result = searchQuery
          ? await searchMovies(searchQuery, page)
          : await getPopularMovies(page);
          
        setMovies(prevMovies => [...prevMovies, ...result.movies]);
        setTotalPages(result.totalPages);
        setHasMore(page < result.totalPages);
      } catch (err) {
        console.log(err);
        setError(`Failed to load more movies...`);
      } finally {
        setLoading(false);
      }
    };

    loadMoreMovies();
  }, [page, searchQuery, initialLoad]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    try {
      setLoading(true);
      setPage(1);
      
      const result = await searchMovies(searchQuery, 1);
      setMovies(result.movies);
      setTotalPages(result.totalPages);
      setHasMore(1 < result.totalPages);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="movies-grid">
        {movies.map((movie, index) => {
          if (movies.length === index + 1) {
            return (
              <div ref={lastMovieElementRef} key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          } else {
            return <MovieCard movie={movie} key={movie.id} />;
          }
        })}
      </div>
      
      {loading && (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Loading more movies...</p>
        </div>
      )}
      
      {!hasMore && movies.length > 0 && (
        <div className="end-message">You've reached the end of the results</div>
      )}
    </div>
  );
}

export default Home;