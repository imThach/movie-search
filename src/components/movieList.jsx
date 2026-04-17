import MovieCard from './movieCard';

const MovieList = ({ movies, onMovieSelect }) => {
    if (!movies || movies.length === 0) return null;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} onMovieSelect={onMovieSelect} />
            ))}
        </div>
    );
};

export default MovieList;