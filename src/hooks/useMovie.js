import { useState } from 'react';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const searchMovies = async (query, page = 1) => {
        if (!query || !query.trim()) {
            setMovies([]);
            setError("Incorrect IMDb ID.");
            return;
        }
        setLoading(true);
        if (page === 1) setError(null);
        try {
            const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
            const data = await response.json();
            console.log("Dữ liệu API trả về:", data);
            if (data.Response === "True") {
                if (page === 1) {
                    setMovies(data.Search);
                } else {
                    setMovies(prevMovies => [...prevMovies, ...data.Search]);
                }
                const totalResults = parseInt(data.totalResults, 10);
                setHasMore(page * 10 < totalResults);
            } else {
                if (page === 1) {
                    setMovies([]);
                    setError(data.Error);
                }
                setHasMore(false);
            }
        } catch (err) {
            setError("Lỗi kết nối mạng.");
        } finally {
            setLoading(false);
        }
    };

    return { movies, loading, error, searchMovies, hasMore };
};