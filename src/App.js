import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Projects from "./routes/Projects";


function App() {
  return (
    <BrowserRouter>
    <Routes>     
      <Route index  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/project" element={<Projects />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
