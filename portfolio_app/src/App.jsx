import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import NavBar from "./components/NavBar";

import "./App.css";
//import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

  );
}

export default App;
