import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "blue" : "black",
    margin: "0 15px",
    textDecoration: "none",
  });

  const favCount = useSelector((state) => state.favourite.films.length);

  return (
    <nav
      style={{ padding: "10px",background: "#eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/movie" style={linkStyle}>
          Movies
        </NavLink>
        <NavLink to="/favourites" style={linkStyle}>
          Favourites Movies
        </NavLink>
        <NavLink to="/login" style={linkStyle}>
          Login
        </NavLink>
      </div>
      <div style={{ marginRight: "15px", fontWeight: "bold" }}>
        ⭐ Favourite: {favCount}
      </div>
    </nav>
  );
}

export default Navbar;



