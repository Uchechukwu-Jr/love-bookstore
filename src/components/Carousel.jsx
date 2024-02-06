/* eslint-disable no-unused-vars */
import { useState } from "react";
import items from "../assets/carousel.json";
import { LeftArrowIcon, RightArrowIcon } from "../assets/icons";
import "../css/carousel.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="main-carousel cursor-pointer relative protest-riot-regular mb-10 p-2">
      <div
        onClick={() => navigate(`/${items[currentIndex]?.id}`)}
        className="flex justify-center items-center w-[100%] min-h-[250px]"
      >
        <div className="w-[30%] flex justify-end">
          <img
            src={items[currentIndex]?.imageUrl}
            className="w-[150px] h-full border rounded"
          />
        </div>
        <div className="w-[70%] px-5">
          <h1 className="text-3xl lg:text-5xl font-bold">
            {items[currentIndex]?.name}
          </h1>
          <p className="italic">by</p>
          <p className="text-xl lg:text-3xl font-bold">
            {items[currentIndex]?.author}
          </p>
        </div>
      </div>

      <button onClick={handlePrevious} className="absolute left-0 bottom-[40%]">
        <LeftArrowIcon />
      </button>
      <button onClick={handleNext} className="absolute right-0 bottom-[40%]">
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default Carousel;
