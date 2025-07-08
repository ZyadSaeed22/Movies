
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Movie from "./components/Movie";
import Details from "./components/Details";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./components/Store/Store";
import Favouritefilm from "./components/Favouritefilm";
import { ThemProvider } from "./Context/Theme";
import { useState } from "react";
import { AuthProvider } from "./Context/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "movie", element: <Movie /> },
      { path: "details/:id", element: <Details /> },
      { path: "favourites", element: <Favouritefilm /> },
    ],
  },
]);

function App() {
  const [them, setThem] = useState("light");
  
  const [auth,setAuth]=useState(null);
  const login=(user)=>{
    setAuth(user) 

  } 

  const logout=()=>{
    setAuth(null)
  }


  return (
 
 
    <div>
      <AuthProvider value={{ auth,login,logout}}>
        <ThemProvider value={{ them, setThem }}>
      <Provider store={store}>
        <RouterProvider router ={router} />
      </Provider>
    </ThemProvider>
      </AuthProvider>
      
    </div>
    
  );
}

export default App;





