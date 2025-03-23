import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  { title: "Love in the Moonlight", image: "/images/LIM.png" },
  { title: "Our Beloved Summer", image: "/images/OBM.png" },
  { title: "Start-Up", image: "/images/SP.png" },
  { title: "Love Next Door", image: "/images/LND.png" },
  { title: "My Life With The Walter Boys", image: "/images/MLWTWB.png" },
  { title: "True Beauty", image: "/images/TB.png" }
];

const Category = ({ title }) => {
  return (
    <section className="p-4">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll mt-2 scrollbar-hide">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default Category;