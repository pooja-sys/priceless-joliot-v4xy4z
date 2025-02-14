import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

function NavigateButton() {
  const location = useLocation();

  // const getPagename = () => {
  //   switch (location.pathname) {
  //     case "about":
  //       return "About";
  //     case "/contact":
  //       return "Contact";
  //     default:
  //       return "Home";
  //   }
  // };
  return (
    <>
      <nav style={{ display: "flex", backgroundColor: "grey", gap: "1rem" }}>
        <Link to="/home" style={{ color: "white", textdecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", textdecoration: "none" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "white", textdecoration: "none" }}>
          Contact
        </Link>
      </nav>
    </>
  );
}
function App() {
  return (
    <Router>
      <NavigateButton />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
