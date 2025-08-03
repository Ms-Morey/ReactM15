import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

// Main App Component
const T41_BasicRoutingSetup = () => {
  return <RouterProvider router={router} />;
};

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-white shadow-md">
      <nav className="flex justify-center space-x-8 p-4">
        <Link to="/home" className="text-blue-600 font-medium">
          Home
        </Link>
        <Link to="about" className="text-blue-600 font-medium">
          About
        </Link>
        <Link to="contact" className="text-blue-600 font-medium">
          Contact
        </Link>
      </nav>
    </div>

    <div className="p-6">
      <Outlet />
    </div>
  </div>
);

const HomeContent = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Home Page</h2>
    <p className="text-gray-700">Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">About Page</h2>
    <p className="text-gray-700">This is the about page</p>
  </div>
);

const Contact = () => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Contact Page</h2>
    <p className="text-gray-700">This is the contact us page</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path:"/home", element: <HomeContent /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default T41_BasicRoutingSetup;
