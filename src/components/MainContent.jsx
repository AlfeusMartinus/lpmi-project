import React from "react";

const MainContent = () => {
  return (
    <div className="w-2/3 p-16 bg-[#0A192F] text-white min-h-screen">
      <nav className="flex justify-between items-center mb-12">
        <ul className="flex gap-8 text-lg">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Event</li>
          <li className="hover:text-blue-400 cursor-pointer">Activity</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact us</li>
        </ul>
        <button className="bg-white text-gray-800 px-5 py-2 rounded-lg shadow-md hover:bg-gray-100">
          Login
        </button>
      </nav>

      <h1 className="text-5xl font-bold leading-snug mb-8">
        Menghidupi Firman, Menggerakkan Dunia
      </h1>

      <img
        src="https://via.placeholder.com/600x300"
        alt="Sample"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default MainContent;
