import { useState, useEffect, useRef } from 'react';
import Navbar from './components/navBar';
import SearchBar from './components/searchBar';
import MovieList from './components/movieList';
import MovieDetail from './components/movieDetail';
import { useMovies } from './hooks/useMovie';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState('Man');
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const { movies, loading, error, searchMovies, hasMore } = useMovies();
  const handleBack = () => {
    setSelectedId(null);
  };
  const handleSearch = (newQuery) => {
    if (newQuery === query) {
      if (page === 1) searchMovies(newQuery, 1);
      else setPage(1);
    } else {
      setQuery(newQuery);
      setPage(1);
    }
  };

  useEffect(() => {
    searchMovies(query, page);
  }, [query, page]);
  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, { rootMargin: '400px' });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading]);
  return (
    <div className="min-h-screen bg-[#424242] text-white">
      {/* Navbar cố định */}
      <Navbar onHomeClick={handleBack} showBackBtn={!!selectedId} onBack={handleBack} />
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {selectedId ? (
          <MovieDetail imdbID={selectedId} onBack={handleBack} />
        ) : (
          <>
            <SearchBar onSearch={handleSearch} />
            {error && page === 1 && <div className="text-center text-red-500 my-10">{error}</div>}
            {loading && page === 1 && <div className="text-center my-10 animate-pulse text-indigo-400 font-bold">Đang tìm phim...</div>}
            <MovieList movies={movies} onMovieSelect={setSelectedId} />
            {/* Chỉ render phần tử mốc khi danh sách đã có phim và còn phim để tải */}
            {hasMore && movies.length > 0 && (
              <div ref={loaderRef} className="h-10 mt-8 mb-10">
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;