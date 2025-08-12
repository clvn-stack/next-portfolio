"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselWrapper = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          onClick={scrollLeft}
          className="bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselWrapper;
