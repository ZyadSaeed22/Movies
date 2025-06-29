import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removefilm } from "./Store/slice/Favourite";
import { IMG_URL } from "../components/instance/instance";

function Favouritefilm() {
  const favList = useSelector((state) => state.favourite.films);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Favourite Movies</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {favList.length > 0 ? (
          favList.map((movie) => (
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
                onClick={() => dispatch(removefilm(movie.id))}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "gold",
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
          <p>No favourite movies yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favouritefilm;
