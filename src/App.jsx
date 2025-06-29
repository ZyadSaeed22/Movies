
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Movie from "./components/Movie";
import Details from "./components/Details";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./components/Store/Store";
import Favouritefilm from "./components/Favouritefilm";


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
  return(

  <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
  </Provider>

  
 
  )
}

export default App;



