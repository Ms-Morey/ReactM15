import { RouterProvider } from "react-router-dom";
import { routes } from "./Layouts/AppRoute";

const RouteIntro = () => {
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
};

export default RouteIntro;