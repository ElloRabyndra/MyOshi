import React, { useState } from "react";
import { memberData } from "@/database/data";
import Gallery from "@/components/Gallery";
import GalleryModal from "@/components/GalleryModal";
import Gacha from "@/components/Gacha";
import Header from "@/components/Header";

const Home = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [gachaResult, setGachaResult] = useState(null);
  const [currentGachaImage, setCurrentGachaImage] = useState(
    memberData[0].image
  );

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6; // 3x4 grid on mobile, 4x3 on desktop

  // Calculate pagination
  const totalPages = Math.ceil(memberData.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;

  const openGallery = (index) => {
    // Calculate actual index in full memberData array
    const actualIndex = startIndex + index;
    setCurrentIndex(actualIndex);
    setSelectedMember(memberData[actualIndex]);
  };

  const closeGallery = () => {
    setSelectedMember(null);
  };

  const navigateGallery = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % memberData.length
        : (currentIndex - 1 + memberData.length) % memberData.length;

    setCurrentIndex(newIndex);
    setSelectedMember(memberData[newIndex]);
  };

  const startGacha = () => {
    if (isRolling) return;

    setIsRolling(true);
    setGachaResult(null);

    let rollCount = 0;
    const maxRolls = 20;
    const intervalSpeed = 100;

    const rollInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * memberData.length);
      setCurrentGachaImage(memberData[randomIndex].image);
      rollCount++;

      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        setTimeout(() => {
          const finalIndex = Math.floor(Math.random() * memberData.length);
          const finalMember = memberData[finalIndex];
          setCurrentGachaImage(finalMember.image);
          setGachaResult(finalMember);
          setIsRolling(false);
        }, 300);
      }
    }, intervalSpeed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-rose-50">
      {/* Header */}
      <Header />

      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-center mx-auto px-4 md:px-6 gap-8 md:gap-12 lg:gap-24">
        {/* Gallery Section */}
        <Gallery
          openGallery={openGallery}
          startIndex={startIndex}
          endIndex={endIndex}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />

        {/* Gacha Section */}
        <Gacha
          isRolling={isRolling}
          currentGachaImage={currentGachaImage}
          startGacha={startGacha}
          gachaResult={gachaResult}
        />
      </div>

      {/* Gallery Modal */}
      {selectedMember && (
        <GalleryModal
          selectedMember={selectedMember}
          closeGallery={closeGallery}
          navigateGallery={navigateGallery}
        />
      )}
    </div>
  );
};

export default Home;
