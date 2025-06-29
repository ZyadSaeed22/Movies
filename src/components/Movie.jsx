import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance, { API_KEY, IMG_URL } from "../components/instance/instance";
import { useDispatch, useSelector } from "react-redux";
import { addfilm, removefilm } from "./Store/slice/Favourite";

const MOVIE_API = `/movie/popular?api_key=${API_KEY}`;

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favourite.films);

  useEffect(() => {
    instance.get(MOVIE_API).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      instance.get(MOVIE_API).then((res) => {
        setMovies(res.data.results);
      });
    } else {
      instance
        .get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
        .then((res) => {
          setMovies(res.data.results);
        });
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
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Movies</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <input
          type="text"
          placeholder="Search by movie name..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                width: "200px",
                border: "1px solid #ccc",
                padding: "10px",
                position: "relative",
              }}
            >
              <img
                src={IMG_URL + movie.poster_path}
                style={{ width: "100%" }}
                alt={movie.title}
              />
             
              <span
                onClick={() => toggleFavourite(movie)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: isFavourite(movie.id) ? "gold" : "gray",
                }}
              >
                ★
              </span>
              <h4>{movie.title}</h4>
              <button onClick={() => navigate(`/details/${movie.id}`)}>
                Show Details
              </button>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Movie;




