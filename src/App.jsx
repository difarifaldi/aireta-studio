import React, { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Kidswear from "./pages/Kidswear";

export default function App() {
  const [showLoading, setShowLoading] = useState(
    () => !window.sessionStorage.getItem("aireta-intro-seen"),
  );

  const finishLoading = useCallback(() => {
    window.sessionStorage.setItem("aireta-intro-seen", "true");
    setShowLoading(false);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-900">
      {showLoading && <LoadingScreen onComplete={finishLoading} />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/kidswear" element={<Kidswear />} />
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
