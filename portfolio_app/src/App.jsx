import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio_app/src/pages/AboutMe.jsx" element={<AboutMe />} />
          <Route path="/portfolio_app/src/pages/ContactMe.jsx" element={<ContactMe />} />
        </Routes>
      </Router>

  );
}

export default App;
