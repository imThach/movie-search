const MovieCard = ({ movie, onMovieSelect }) => {
    const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600?text=No+Poster";
    return (
        <div
            onClick={() => onMovieSelect(movie.imdbID)}
            className="group relative cursor-pointer rounded-sm overflow-hidden bg-[#1a1a1a] transition-all duration-300"
        >
            <div className="aspect-[2/3] overflow-hidden">
                <img
                    src={poster}
                    alt={movie.Title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-white font-bold text-xl leading-tight mb-3 group-hover:text-yellow-400 transition-colors">
                    {movie.Title}
                </h3>
                <div className="flex justify-between items-center text-slate-300 text-sm">
                    <div className="flex items-center gap-2 font-medium italic text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                        </svg>
                        <span>{movie.Year}</span>
                    </div>
                    <button className="bg-transparent hover:bg-black/50 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;