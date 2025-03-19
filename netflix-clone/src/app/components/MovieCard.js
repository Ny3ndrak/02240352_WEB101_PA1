import React from "react";

const MovieCard = ({ title, image }) => {
  return (
    <div className="w-40">
      <img src={image} alt={title} className="rounded-md" />
      <p className="text-sm text-white mt-2">{title}</p>
    </div>
  );
};

export default MovieCard;
