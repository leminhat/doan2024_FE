import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCrosel";
import HomeSelectionCarosel from "../../components/HomeSelectionCarosel/HomeSelectionCarosel";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div>
        <HomeSelectionCarosel />
      </div>
    </div>
  );
};

export default HomePage;
