import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route
            path="/portfolio"
            element={<div className="p-20">Portfolio (placeholder)</div>}
          />
          <Route
            path="/location"
            element={<div className="p-20">Location (placeholder)</div>}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
