import React from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../components/instance/instance";

const Home = ({ popularMovies }) => {
  const navigate = useNavigate();

  if (!popularMovies || popularMovies.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <main className="flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-red-600">Trending Movies</h1>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
          {popularMovies.slice(0, 4).map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-60 transform hover:scale-105 transition"
            >
              <img
                src={IMG_URL + movie.poster_path}
                alt={movie.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-36">
                <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                <button
                  onClick={() => navigate(`/details/${movie.id}`)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded mt-auto"
                >
                  Show Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 py-4 text-center text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} My Movie App - All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
