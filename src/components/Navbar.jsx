import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "blue" : "black",
    margin: "0 15px",
    textDecoration: "none",
  });

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/movie" style={linkStyle}>Movies</NavLink>
      <NavLink to="/login" style={linkStyle}>Login</NavLink>
    </nav>
  );
}

export default Navbar;

