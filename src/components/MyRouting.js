import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Navbar";

function MyRouting() {
  return (
    <BrowserRouter>
      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouting;
