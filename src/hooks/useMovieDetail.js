import { useState, useEffect } from 'react';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const useMovieDetail = (id) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
                const data = await response.json();
                if (data.Response === "True") setMovie(data);
                else setError(data.Error);
            } catch (err) {
                setError("Error fetching details.");
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchDetail();
    }, [id]);
    return { movie, loading, error };
};