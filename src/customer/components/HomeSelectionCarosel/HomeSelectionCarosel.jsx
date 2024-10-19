import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSelectionCard from "../HomeSelectionCard/HomeSelectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSelectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Sử dụng useRef để tương tác với carousel

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  // Hàm di chuyển carousel qua bên trái
  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // Sử dụng API của AliceCarousel để di chuyển
    }
  };

  // Hàm di chuyển carousel qua bên phải
  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Sử dụng API của AliceCarousel để di chuyển
    }
  };

  // Đồng bộ activeIndex với carousel
  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = data.slice(0, 10).map((item) => <HomeSelectionCard key={item.id} product={item} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef} // Thêm ref để tham chiếu đến carousel
        />

        {/* Nút bên phải (chuyển tiếp) */}
        {activeIndex < items.length - Math.floor(responsive[1024].items) && (
          <Button
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
          </Button>
        )}

        {/* Nút bên trái (trở lại) */}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSelectionCarosel;
