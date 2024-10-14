import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCrosel";
import HomeSelectionCarosel from "../../components/HomeSelectionCarosel/HomeSelectionCarosel";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSelectionCarosel/>
        <HomeSelectionCarosel/>
        <HomeSelectionCarosel/>
        <HomeSelectionCarosel/>
        <HomeSelectionCarosel/>
      </div>
    </div>
  );
};

export default HomePage;
