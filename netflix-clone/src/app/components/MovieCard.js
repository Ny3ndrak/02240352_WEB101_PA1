import React from "react";

const MovieCard = ({ title, image }) => {
  return (
    <div className="w-48">
      <img
        src={image}
        alt={title}
        className="rounded-md object-cover w-full h-28"
      />
      <p className="text-sm text-white mt-2 text-right">{title}</p>
    </div>
  );
};

export default MovieCard;