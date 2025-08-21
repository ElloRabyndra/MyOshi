import React from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { memberData } from "@/database/data";
const Gallery = ({
  openGallery,
  startIndex,
  endIndex,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const currentMembers = memberData.slice(startIndex, endIndex);
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };
  return (
    <section className="max-w-lg">
      <div className="flex items-center justify-center mb-6 md:mb-8">
        <Camera className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Member Gallery
        </h2>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-red-200 shadow-2xl">
        {/* Members Grid */}
        <div className="grid grid-cols-3  gap-4 mb-6">
          {currentMembers.map((member, index) => (
            <div
              key={member.name}
              className="group cursor-pointer"
              onClick={() => openGallery(index)}
            >
              <div className="relative overflow-hidden rounded-2xl  aspect-square border-2 border-red-200 group-hover:border-red-500 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white font-bold text-xs md:text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center space-y-4">
          {/* Page Info */}
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, memberData.length)} of{" "}
            {memberData.length} members
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-1">
              {getPageNumbers().map((pageNum, index) => (
                <React.Fragment key={index}>
                  {pageNum === "..." ? (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(pageNum)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? "bg-red-500 text-white"
                          : "bg-white text-gray-700 hover:bg-red-50 border border-gray-300"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
