import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center  lg:mt-[95px] mt-[95px]"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?child')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Movie Details */}
      <div className="relative max-w-2xl px-10 text-white">
        <span className="bg-gray-800 text-xs uppercase px-2 py-1 rounded">Action</span>
        <h1 className="text-5xl font-bold mt-3">Princess Yako</h1>

        <div className="flex items-center space-x-3 mt-2">
          <span className="bg-yellow-400 text-black px-2 py-1 text-sm font-bold rounded">IMDb</span>
          <span className="text-lg">8.4</span>
          <span className="text-lg">•</span>
          <span className="text-lg">1997</span>
        </div>

        <p className="mt-4 text-lg">
          A hardened mercenary's mission becomes a soul-searching race to survive when he's sent
          into Bangladesh to rescue a drug lord's kidnapped son.
        </p>

        <div className="flex space-x-4 mt-6 font-semibold">
          <span>Arline Kelley</span>
          <span>•</span>
          <span>Julius Barnett</span>
          <span>•</span>
          <span>Anthony Lindsey</span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-red-600 px-6 py-3 rounded-lg text-lg font-bold hover:bg-red-700">
            Watch Now
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-300">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};


export default Banner;