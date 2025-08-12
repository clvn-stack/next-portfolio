"use client";
import React from "react";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import icons from "../utils/icon.json";
import IconCarousel from "./IconCarousel";

const Hero = () => {
  const fullText = "Calvin Baltazar";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [animatedRating, setAnimatedRating] = useState(0);
  const [animatedYeo, setAnimatedYeo] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleIndexChange = (index: number) => {
    setCurrentIconIndex(index);
  };

  useEffect(() => {
    const targetRating = icons?.[currentIconIndex]?.rating || 0;
    const targetYeo = icons?.[currentIconIndex]?.yof || 0;

    const stepRating = targetRating > animatedRating ? 1 : -1;
    const stepYeo = targetYeo > animatedYeo ? 1 : -1;

    const interval = setInterval(() => {
      setAnimatedRating((prev) => {
        const next = prev + stepRating;
        if (
          (stepRating > 0 && next >= targetRating) ||
          (stepRating < 0 && next <= targetRating)
        ) {
          return targetRating;
        }
        return next;
      });

      setAnimatedYeo((prev) => {
        const next = prev + stepYeo;
        if (
          (stepYeo > 0 && next >= targetYeo) ||
          (stepYeo < 0 && next <= targetYeo)
        ) {
          return targetYeo;
        }
        return next;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [currentIconIndex, icons]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:pt-12 transition-all duration-300 ease-in-out">
        <div className="col-span-9 py-10 flex gap-8 flex-col overflow-visible">
          <div className="relative text-[4rem] md:text-[4rem] lg:text-[6rem] xl:text-[7rem] leading-16 text-center md:text-left font-bold text-white transition-all duration-300 ease-in-out white-space-nowrap">
            {displayedText}
            <span className="animate-pulse text-white transition-all duration-300 ease-in-out">
              _
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:pt-12 px-4 sm:px-0">
            <div className="flex-1  bg-black/10 rounded-2xl transition-all duration-300 ease-in-out">
              <div className="p-4">
                <IconCarousel
                  iconsVal={icons}
                  onIndexChange={handleIndexChange}
                />
              </div>
            </div>

            <div className="flex-1 p-4 rounded-2xl bg-black/10 transition-all duration-300 ease-in-out">
              <div className="flex p-2 gap-6">
                <div className="flex flex-col justify-center w-full transition-all duration-300 ease-in-out">
                  <div className="text-md font-bold">
                    {icons?.[currentIconIndex]?.name || "Loading..."}
                  </div>
                  <div className="flex flex-col">
                    <div
                      className="tooltip tooltip-top"
                      data-tip="Skill Rating over 10"
                    >
                      <progress
                        className="progress progress-success w-full tooltip"
                        value={animatedRating}
                        max="100"
                      ></progress>
                    </div>
                  </div>

                  <div
                    className="tooltip tooltip-top"
                    data-tip="Years of Exp. Over 10 years"
                  >
                    <progress
                      className="progress progress-success w-full"
                      value={animatedYeo}
                      max="100"
                    ></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex justify-around text-center md:flex-col md:text-right gap-2 mx-4 transition-all duration-300 ease-in-out md:h-32">
          <div className="flex flex-col">
            <div className="text-xs font-extrabold uppercase text-purple-500">
              Projects
            </div>
            <div className="text-[2rem] md:text-[3.5rem] font-bold">
              <CountUp start={0} end={200} duration={6} />
              <span>+</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs font-extrabold uppercase text-purple-500">
              Experience
            </div>
            <div className="text-[2rem] md:text-[3.5rem] font-bold">
              <CountUp start={0} end={9} duration={6} />
              <span>+</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs font-extrabold uppercase text-purple-500">
              Clients
            </div>
            <div className="text-[2rem] md:text-[3.5rem] font-bold">
              <CountUp start={0} end={20} duration={6} />
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
