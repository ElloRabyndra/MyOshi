import React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
const GalleryModal = ({ selectedMember, closeGallery, navigateGallery }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6">
      <div className="relative max-w-xl w-full">
        <button
          onClick={closeGallery}
          className="absolute top-2 right-2 sm:right-8  md:right-6 md:top-4 z-10 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full text-red-600 transition-colors shadow-lg"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="flex items-center justify-center space-x-2 md:space-x-6">
          <button
            onClick={() => navigateGallery("prev")}
            className="bg-white/90 hover:bg-white p-3 md:p-4 rounded-full text-red-600 transition-all hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-red-200 max-w-sm md:max-w-md shadow-2xl">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full h-auto rounded-xl"
            />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mt-3 md:mt-4">
              {selectedMember.name}
            </h3>
          </div>

          <button
            onClick={() => navigateGallery("next")}
            className="bg-white/90 hover:bg-white p-3 md:p-4 rounded-full text-red-600 transition-all hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
