import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/HOme";
import HomeMain from "../pages/HomeMain";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";

export let routes = createBrowserRouter(
  [
    {
      path : '/',
      element : <Login></Login>
    },
    {
      path:'/home',
      element:<Home></Home>,
      children:[
        {
          path:'/home',
          element:<HomeMain></HomeMain>
        },
        {
          path:'home/about',
          element:<About></About>
        },
        {
          path:'home/contact',
          element:<Contact></Contact>
        },
        {
          path:'home/help',
          element:<Help></Help>
        }
      ]
    },
  ]
);