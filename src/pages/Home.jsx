import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/searchBar';
import MovieList from '../components/movieList';
import { useMovies } from '../hooks/useMovie';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search') || 'Man';
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);
    const { movies, loading, error, searchMovies, hasMore } = useMovies();

    const handleSearch = (newQuery) => {
        if (newQuery === query) {
            if (page === 1) searchMovies(newQuery, 1);
            else setPage(1);
        } else {
            setSearchParams({ search: newQuery });
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
        <>
            <SearchBar onSearch={handleSearch} />
            {error && page === 1 && <div className="text-center text-red-500 my-10">{error}</div>}
            {loading && page === 1 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array(8).fill(0).map((_, index) => (
                        <div key={index} className="aspect-[2/3] rounded-sm overflow-hidden">
                            <Skeleton height="100%" containerClassName="block h-full" baseColor="#1a1a1a" highlightColor="#333" />
                        </div>
                    ))}
                </div>
            ) : (
                <MovieList movies={movies} />
            )}
            {hasMore && movies.length > 0 && <div ref={loaderRef} className="h-10 mt-8 mb-10"></div>}
        </>
    );
};

export default Home;