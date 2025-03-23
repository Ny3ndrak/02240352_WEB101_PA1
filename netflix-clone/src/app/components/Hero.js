import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[90vh] flex items-center justify-start text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/ski.jpeg')" }} 
    >
      <div className="relative z-10 text-left ml-10">
        <h1 className="text-5xl md:text-7xl font-extrabold">Ski into Love</h1>
        <p className="mt-4 max-w-lg text-lg md:text-xl text-white leading-relaxed">
          <b>New Episodes Coming Wednesday</b>
          After a scandal threatens her career, manga artist Wei Zhi escapes to a ski resort, where she meets instructor Shan Chong and begins to heal.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded">▶ Play</button>
          <button className="bg-gray-600 px-6 py-2 rounded">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;