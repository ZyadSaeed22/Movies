import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instance, { API_KEY, IMG_URL } from "./instance/instance";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    instance.get(`/movie/${id}?api_key=${API_KEY}`).then((res) => {
      setMovie(res.data);
    });
  }, [id]);

  if (!movie)
    return (
      <div className="flex justify-center items-center mt-10">
        <h3 className="text-xl font-semibold text-gray-400">Loading...</h3>
      </div>
    );

  const Next = () => {
    navigate(`/details/${Number(id) + 1}`);
  };

  const Previous = () => {
    if (Number(id) > 1) {
      navigate(`/details/${Number(id) - 1}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-zinc-900 rounded-lg shadow-lg p-6">
        <h3 className="text-3xl font-bold mb-6 text-center">{movie.title}</h3>
        <div className="flex flex-col items-center gap-6">
          <img
            src={IMG_URL + movie.poster_path}
            alt={movie.title}
            className="w-72 rounded-md shadow-lg"
          />
          <p className="text-gray-300 text-center">{movie.overview}</p>
        </div>
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <button
            onClick={Previous}
            disabled={Number(id) <= 1}
            className={`px-5 py-2 rounded-md transition ${
              Number(id) <= 1
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            ← Previous
          </button>
          <button
            onClick={Next}
            className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
          >
            Next →
          </button>
          <button
            onClick={() => navigate("/movie")}
            className="px-5 py-2 rounded-md bg-gray-700 hover:bg-gray-800 transition"
          >
            ← Back to Movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;


