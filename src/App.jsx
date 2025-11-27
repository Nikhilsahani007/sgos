// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

// pages
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import Fees from "./pages/Fees";
import Gallery from "./pages/Gallery";   // 👈 gallery page
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="relative page-shell">
      <ThreeBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <main className="pt-24 pb-10 flex-1 max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/gallery" element={<Gallery />} />   {/* 👈 was /blog */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}
