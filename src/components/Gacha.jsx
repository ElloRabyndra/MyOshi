import React from "react";
import { Sparkles } from "lucide-react";

const Gacha = ({ isRolling, currentGachaImage, startGacha, gachaResult }) => {
  return (
    <section className="w-full md:w-auto max-w-lg mt-2 pb-12 md:pb-16">
      <div className="flex items-center justify-center mb-6 md:mb-8">
        <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Oshi Gacha
        </h2>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-red-200 text-center shadow-2xl">
        <div className="mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            {gachaResult ? gachaResult.name : "???"}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            {isRolling ? "Rolling..." : "Click to discover your oshi!"}
          </p>
        </div>

        <div className="relative mb-6 md:mb-8 mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-48 lg:h-48 ">
          <div
            className={`w-full h-full rounded-2xl overflow-hidden border-4 ${
              isRolling
                ? "border-red-400 shadow-lg shadow-red-400/30"
                : "border-red-300"
            } transition-all duration-200 shadow-xl`}
          >
            <img
              src={currentGachaImage}
              alt="Gacha Member"
              className={`w-full h-full object-cover ${
                isRolling ? "animate-pulse" : ""
              }`}
            />
          </div>
          {isRolling && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-2xl" />
          )}
        </div>

        <button
          onClick={startGacha}
          disabled={isRolling}
          className={`px-8 md:px-12 py-3 md:py-4 rounded-full text-lg lg:text-xl font-bold text-white transition-all duration-300 transform ${
            isRolling
              ? "bg-gray-400 cursor-not-allowed scale-95"
              : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-105 shadow-lg hover:shadow-xl"
          }`}
        >
          {isRolling ? (
            <div className="flex items-center">
              <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 md:mr-3" />
              Rolling...
            </div>
          ) : (
            "Roll Gacha!"
          )}
        </button>
      </div>
    </section>
  );
};

export default Gacha;
