import React from "react";

const Home = ({ filters, favorites, toggleFavorite }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Trail Stay</h1>
      <p>This is the home page. Your filters will apply here soon.</p>
    </div>
  );
};

export default Home;
