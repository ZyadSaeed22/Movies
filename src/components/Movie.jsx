import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance, { API_KEY, IMG_URL } from "../components/instance/instance";

const MOVIE_API = `/movie/popular?api_key=${API_KEY}`;

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Movies</h2>

      
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0"
      }}>
        <input
          type="text"
          placeholder="Search by movie name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px"
          }}
        />
        <button onClick={handleSearch} style={{
          padding: "10px 20px",
          borderRadius: "5px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
          Search
        </button>
      </div>

      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              style={{ width: "200px", border: "1px solid #ccc", padding: "10px" }}
            >
              <img
                src={IMG_URL + movie.poster_path}
                style={{ width: "100%" }}
                alt={movie.title}
              />
              <h4>{movie.title}</h4>
              <button onClick={() => navigate(`/details/${movie.id}`)}>Show Details</button>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Movie;




