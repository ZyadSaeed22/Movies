import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance, { API_KEY, IMG_URL } from "../components/instance/instance";
import { useDispatch, useSelector } from "react-redux";
import { addfilm, removefilm } from "./Store/slice/Favourite";
import { Movieaction } from "./Store/slice/Asynmovie";

function Movie() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const favList = useSelector((state) => state.favourite.films);
  const Movies = useSelector((state) => state.slicemovies.Movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Movieaction(currentPage));
  }, [dispatch, currentPage]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      dispatch(Movieaction(1));
    } else {
      instance
        .get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
        .then((res) => {
          console.log("Search API Response:", res.data);
          
        })
        .catch((err) => console.error("Search error", err));
    }
  };

  const toggleFavourite = (movie) => {
    const isFav = favList.some((item) => item.id === movie.id);
    if (isFav) {
      dispatch(removefilm(movie.id));
    } else {
      dispatch(addfilm(movie));
    }
  };

  const isFavourite = (movieId) => {
    return favList.some((movie) => movie.id === movieId);
  };

  return (
    <div className="bg-black min-h-screen text-white py-10">
      {/* Search */}
      <div className="flex justify-center items-center mb-10 gap-4">
        <input
          type="text"
          placeholder="Search by movie name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-72 rounded-md border border-gray-700 bg-zinc-900 focus:outline-none focus:border-red-500"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {/* Movies */}
      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {Movies.length > 0 ? (
          Movies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={IMG_URL + movie.poster_path}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <span
                onClick={() => toggleFavourite(movie)}
                className={`absolute top-3 right-3 text-2xl cursor-pointer ${
                  isFavourite(movie.id) ? "text-yellow-400" : "text-gray-500"
                }`}
              >
                ★
              </span>
              <div className="p-3">
                <h4 className="text-lg font-semibold mb-3">{movie.title}</h4>
                <button
                  onClick={() => navigate(`/details/${movie.id}`)}
                  className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md transition"
                >
                  Show Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No movies found
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md border border-red-600 text-red-400 hover:bg-red-700 hover:text-white disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 rounded-md border border-red-600 text-red-400 hover:bg-red-700 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Movie;


