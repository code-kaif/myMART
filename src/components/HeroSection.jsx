import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative text-center px-6 text-white max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Your Trusted Partner in Medical Equipment
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          High-quality healthcare solutions for hospitals, clinics, and labs.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
