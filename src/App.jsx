import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { FiMenu, FiX } from "react-icons/fi";
import "./index.css";

function App() {
  const navlinks = [
    { name: "Home",    path: "/" },
    { name: "About",   path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-16">
          <h1 className="font-semibold ms-5 md:ms-10 text-xl text-gray-900">
            Nahzul Balaghoh
          </h1>

          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-gray-700 mr-0 md:mr-40 font-medium">
            {navlinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-black font-semibold" : "hover:text-black cursor-pointer"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
            {navlinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-black font-semibold block" : "text-gray-700 hover:text-black block"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* HALAMAN */}
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;