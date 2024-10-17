import React from "react";
import MainCrosel from "../../components/HomeCarosel/MainCrosel";
import HomeSelectionCarosel from "../../components/HomeSelectionCarosel/HomeSelectionCarosel";
import { mens_kurta } from './../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSelectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSelectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSelectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSelectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSelectionCarosel data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  );
};

export default HomePage;
