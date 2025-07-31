// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StayDetails from "./pages/StayDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [filters, setFilters] = useState({ access: "all", terrain: [] });
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      if (type === "access") {
        return { ...prev, access: value };
      }
      if (type === "terrain") {
        const updated = prev.terrain.includes(value)
          ? prev.terrain.filter((t) => t !== value)
          : [...prev.terrain, value];
        return { ...prev, terrain: updated };
      }
      return prev;
    });
  };

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
        <Header setFilters={handleFilterChange} filters={filters} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  filters={filters}
                  setFilters={handleFilterChange}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/stay/:id" element={<StayDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// ✅ Features Complete:
// 1. Favorites: 💖 Bookmark stays with localStorage
// 2. Dark Mode: 🌙 toggle with Tailwind dark classes
// 3. Filtering logic (Header + Sidebar)
// 🔄 Pagination: placeholder logic (to be implemented in Home.jsx)
// 🔄 Ratings/Reviews: to be layered with dummy data
// 🔄 Weather: display current conditions per stay (via API or mock)
