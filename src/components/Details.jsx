import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instance, { API_KEY, IMG_URL } from "./instance/instance";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    instance
    .get(`/movie/${id}?api_key=${API_KEY}`).then((res) => {
      setMovie(res.data);
    });
  }, [id]);

  if (!movie) return <h3>Wait</h3>;

  const Next = () => {
    navigate(`/details/${Number(id) + 1}`);
  };

  const Previous = () => {
    if (Number(id) > 1) {
      navigate(`/details/${Number(id) - 1}`);
    }
  };

  return (
    <div style={{ marginTop: "30px", borderTop: "1px solid #aaa", paddingTop: "20px" }}>
      <h3>Movie Details</h3>
      <img src={IMG_URL + movie.poster_path} alt={movie.title} style={{ width: "300px" }} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>

      
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={Previous}
          disabled={Number(id) <= 1}
          style={{
            padding: "10px 20px",
            background: "#ddd",
            border: "none",
            borderRadius: "5px",
            cursor: Number(id) <= 1 ? "not-allowed" : "pointer"
          }}
        >
          Prev
        </button>

        <button
          onClick={Next}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Details;



