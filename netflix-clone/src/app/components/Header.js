import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black bg-opacity-80 text-white fixed w-full top-0 z-50">
      <div className="flex items-center">
        <h1 className="text-red-600 font-bold text-2xl mr-4">NETFLIX</h1>
        <nav className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">Latest</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </nav>
      </div>
      <div className="flex gap-4">
        <span>🔍</span>
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;