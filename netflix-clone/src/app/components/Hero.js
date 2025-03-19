import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" 
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold">Ski into Love</h1>
        <p className="mt-4 max-w-md">
          After a scandal threatens her career, manga artist Wei Zhi escapes to a ski resort...
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-2 rounded">▶ Play</button>
          <button className="bg-gray-600 px-6 py-2 rounded">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
