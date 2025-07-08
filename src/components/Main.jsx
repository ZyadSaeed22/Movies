import { useContext } from "react";
import Navbar from "./Navbar"; 
import { authContext } from "../Context/Auth";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Main() {
  
  const { auth } = useContext(authContext);
  const location = useLocation();

  
  if (!auth && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  return (
    <>  
      <Navbar />
      <Outlet />
    </>
  );
}

export default Main;


