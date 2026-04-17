import PropTypes from 'prop-types';
import { useMovieDetail } from '../hooks/useMovieDetail';

const MovieDetail = ({ imdbID, onBack }) => {
    const { movie, loading } = useMovieDetail(imdbID);
    if (loading) return (
        <div className="flex justify-center items-center py-40">
            <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
    if (!movie) return null;
    return (
        <div className="animate-in fade-in duration-500 pb-2 pt-6 px-8 md:px-0 font-comic">
            <div className="grid grid-cols-[35%_1fr] sm:grid-cols-[40%_1fr] lg:grid-cols-[420px_1fr] gap-8 md:gap-2 items-start">
                <div className="w-full md:-ml-8">
                    <img
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/600x900?text=No+Poster"}
                        alt={movie.Title}
                        className="w-full rounded-sm shadow-2xl h-full min-h-[600px] border border-white/5"
                    />
                </div>
                {/* Cột phải: Thông tin chi tiết */}
                <div className="flex flex-col text-slate-300">
                    <div className="flex justify-between items-start mb-6 gap-4">
                        <div className="flex-1">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-2 md:mb-4 tracking-tight">
                                {movie.Title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-white/60 text-sm font-medium">
                                <span>{movie.Year}</span>
                                <span className="w-px h-3 bg-white/40"></span>
                                {movie.Rated !== "N/A" && (
                                    <>
                                        <span className=" py-0.5 border border-slate-700 rounded text-[11px] uppercase">
                                            {movie.Rated}
                                        </span>
                                        <span className="w-px h-3 bg-white/40"></span>
                                    </>
                                )}
                                <span>{movie.Released}</span>
                                <span className="w-px h-3 bg-white/40"></span>
                                <span>{movie.Runtime}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end flex-shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400 text-2xl sm:text-4xl">★</span>
                                <div className="leading-none">
                                    <span className="text-lg sm:text-2xl text-yellow-400 text-white">
                                        {movie.imdbRating !== "N/A" ? movie.imdbRating : "N/A"}
                                    </span>
                                    <span className="text-slate-500 text-sm">/10</span>
                                </div>
                            </div>
                            <span className="text-[12px] text-white mr-1">
                                {movie.imdbVotes !== "N/A" ? movie.imdbVotes : "0"}
                            </span>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 text-white font-light">
                        {movie.Plot}
                    </p>
                    <div className="space-y-2 border-t border-white/10 pt-4">
                        <DetailItem label="Genre" value={movie.Genre} />
                        <DetailItem label="Director" value={movie.Director} />
                        <DetailItem label="Writer" value={movie.Writer} />
                        <DetailItem label="Actors" value={movie.Actors} />
                        <DetailItem label="Language" value={movie.Language} />
                        <DetailItem label="Country" value={movie.Country} />
                        <DetailItem label="Awards" value={movie.Awards} />
                        <DetailItem label="Production" value={movie.Production || movie.production} />
                    </div>
                </div>
            </div>
        </div>
    );
};
const DetailItem = ({ label, value }) => {
    if (!value) return null;
    return (
        <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[130px_1fr] gap-2 sm:gap-4 items-baseline">
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wider">{label} :</span>
            <span className="text-white/70 leading-normal text-sm sm:text-base">
                {value !== "N/A" ? value : "N/A"}
            </span>
        </div>
    );
};
MovieDetail.propTypes = {
    imdbID: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
};

export default MovieDetail;