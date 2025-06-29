import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removefilm } from "./Store/slice/Favourite";
import { IMG_URL } from "../components/instance/instance";

function Favouritefilms() {
  const favList = useSelector((state) => state.favourite.films);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-10 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10">⭐ Favourite Movies</h2>

      {favList.length > 0 ? (
        <div className="flex flex-wrap gap-8 justify-center">
          {favList.map((movie) => (
            <div
              key={movie.id}
              className="w-60 bg-zinc-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden relative hover:scale-105 transition-transform"
            >
              <img
                src={IMG_URL + movie.poster_path}
                alt={movie.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => dispatch(removefilm(movie.id))}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-semibold transition"
                title="Remove from favourites"
              >
                Remove
              </button>
              <div className="p-4 flex flex-col items-center">
                <h4 className="text-center text-lg font-semibold mb-3">{movie.title}</h4>
                <button
                  onClick={() => navigate(`/details/${movie.id}`)}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium py-2 rounded-md transition"
                >
                  Show Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-400">No favourite movies yet.</p>
        </div>
      )}
    </div>
  );
}

export default Favouritefilms;

