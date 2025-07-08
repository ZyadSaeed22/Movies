import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { themContext } from "../Context/Theme";
import { authContext } from "../Context/Auth";

function Navbar() {
  const favCount = useSelector((state) => state.favourite.films.length);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-base font-medium transition-colors duration-200
     ${isActive ? "bg-red-600 text-white" : "text-gray-300 hover:bg-red-700 hover:text-white"}`;

  const { them, setThem } = useContext(themContext);
  const { auth, logout } = useContext(authContext);
  const navigate = useNavigate();

  const ThemToggel = () => {
    setThem(them === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className={`shadow-lg sticky top-0 z-50 ${
        them === "dark" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <NavLink to="/" className="text-2xl font-bold text-red-600">
              🎬 MovieApp
            </NavLink>
            <NavLink to="/movie" className={linkClass}>
              Movies
            </NavLink>
            <NavLink to="/favourites" className={linkClass}>
              Favourites
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            {!auth ? (
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}

            <div className="flex items-center text-yellow-400 font-semibold">
              <FaStar className="mr-1" /> {favCount}
            </div>
            {/* <button
              className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
              onClick={ThemToggel}
            >
              Toggle
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




