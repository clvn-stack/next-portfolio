"use client";
import services from "../utils/services.json";
import React, { useRef } from "react";
import Carousel from "./Carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-12  px-4 md:px-0 ">
        <div className="col-span-1 md:col-span-3 flex flex-col justify-center">
          <div className="text-lg font-bold pb-2 text-purple-400">
            What I can do?
          </div>
          <div className="flex md:flex-col justify-between gap-4">
            <div>
              <div className="text-[1.5rem] sm:text-[2rem] leading-tight font-bold">
                I Provide Digital Services
              </div>
            </div>
            <div>
              <div className="flex justify-start gap-2 ">
                <button
                  onClick={scrollLeft}
                  className="cursor-hover-target bg-white/5 p-2 rounded-full shadow cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out hidden md:flex"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={scrollRight}
                  className="cursor-hover-target bg-white/5 p-2 rounded-full shadow cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out hidden md:flex"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-9">
          <div className="relative overflow-hidden py-4">
            <Carousel
              scrollRef={scrollRef}
              handleServices={services}
              autoSlide
              interval={3000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
