import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-sm mx-auto mt-4 mb-8 group"
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie"
                className="w-full bg-[#000] border border-yellow-500 text-white pl-4 pr-12 py-2 rounded-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 py-3 text-sm md:text-base font-comic"
            />

            <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="white"
                    className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </form>
    );
};

export default SearchBar;