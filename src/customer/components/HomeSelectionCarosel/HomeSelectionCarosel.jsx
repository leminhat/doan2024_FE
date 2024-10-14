import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSelectionCard from "../HomeSelectionCard/HomeSelectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSelectionCarosel = () => {
  const [ativeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev=()=> setActiveIndex(ativeIndex-1)
  const slideNext=()=> setActiveIndex(ativeIndex+1)

  const syncActiveIndex=({item})=> setActiveIndex(item)

  const items = mens_kurta.slice(0,10).map((item) => <HomeSelectionCard product={item}/>);
  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={ativeIndex}
        />

        {ativeIndex!== items.length-5 &&  <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}

        {ativeIndex!==0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}

      </div>
    </div>
  );
};

export default HomeSelectionCarosel;
