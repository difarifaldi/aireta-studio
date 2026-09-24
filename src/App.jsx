import React, { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Kidswear from "./pages/Kidswear";
import Manwear from "./pages/Manwear";
import Patern from "./pages/Patern";
import Serambit from "./pages/Serambit";
import Hijab from "./pages/Hijab";
import Dresses from "./pages/Dresses";
import Basic from "./pages/Basic";

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
          <Route path="/portfolio/manwear" element={<Manwear />} />
          <Route path="/portfolio/pattern" element={<Patern />} />
          <Route path="/portfolio/serambit" element={<Serambit />} />
          <Route path="/portfolio/hijab" element={<Hijab />} />
          <Route path="/portfolio/dresses" element={<Dresses />} />
          <Route path="/portfolio/basic" element={<Basic />} />
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
