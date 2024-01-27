import React, { useState, useEffect } from "react";
import { carouselItems } from "../assets/carouselItems";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % carouselItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const startAutoplay = () => {
    setAutoplay(true);
  };

  const stopAutoplay = () => {
    setAutoplay(false);
  };

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }, 4000);
    }

    return () => clearInterval(intervalId);
  }, [autoplay]);

  return (
    <div
      className="carousel w-[100%] min-h-[350px] max-h-[450px] bg-cover rounded-lg relative"
      style={{
        backgroundImage: `url('${carouselItems[currentIndex]?.imageUrl}')`,
      }}
    >
      <button
        className=" bg-slate-100 p-2 rounded-full flex justify-center text-center text-3xl absolute text-slate-500 left-0 bottom-2/4 font-bold"
        onClick={handlePrevious}
      >
        <ion-icon name="arrow-back-sharp"></ion-icon>
      </button>
      <button
        className=" bg-slate-100 p-2 rounded-full flex justify-center text-center text-3xl absolute  text-slate-500 right-0 bottom-2/4 font-bold"
        onClick={handleNext}
      >
        <ion-icon name="arrow-forward-sharp"></ion-icon>
      </button>
      <button
        className=" bg-slate-100 mx-4 p-2 rounded-full flex justify-center text-center text-3xl absolute bottom-0 left-2/4 text-slate-500"
        onClick={startAutoplay}
      >
        <ion-icon name="play-sharp"></ion-icon>
      </button>
      <button
        className=" bg-slate-100 mx-4 p-2 rounded-full flex justify-center text-center text-3xl absolute bottom-0 right-2/4 text-slate-500"
        onClick={stopAutoplay}
      >
        <ion-icon name="pause-sharp"></ion-icon>
      </button>
    </div>
  );
};

export default Carousel;
