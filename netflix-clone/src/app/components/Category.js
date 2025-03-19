import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  { title: "Love in the Moonlight", image: "/movie1.jpg" },
  { title: "Our Beloved Summer", image: "/movie2.jpg" },
  { title: "Start-Up", image: "/movie3.jpg" },
  { title: "Love Next Door", image: "/movie4.jpg" },
];

const Category = ({ title }) => {
  return (
    <section className="p-4">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <div className="flex gap-4 overflow-x-auto mt-2">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default Category;
