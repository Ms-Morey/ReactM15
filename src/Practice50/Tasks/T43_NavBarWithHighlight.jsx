import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const Home = () => <h2 className="text-xl p-4">This is Home Page</h2>;
const About = () => <h2 className="text-xl p-4">This is About Page</h2>;
const Contact = () => <h2 className="text-xl p-4">This is Contact Page</h2>;

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 flex gap-6">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? 'font-bold  text-red-400 underline' : ''
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'font-bold text-red-400 underline' : ''
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'font-bold text-red-400 underline' : ''
        }>
        Contact
      </NavLink>
    </nav>
  );
};

const T43_NavBarWithHighlight = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default T43_NavBarWithHighlight;
