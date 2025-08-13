"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

type Icons = {
  id: number;
  name: string;
  icon: string;
  rating: number;
  yof: number;
};

interface IconsProp {
  iconsVal: Icons[];
  onIndexChange: (index: number) => void;
}

export default function IconCarousel({ iconsVal, onIndexChange }: IconsProp) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 5000;

  useEffect(() => {
    if (!iconsVal || iconsVal.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % iconsVal.length;
        return nextIndex;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [iconsVal]);

  useEffect(() => {
    if (onIndexChange && iconsVal?.length > 0) {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange, iconsVal]);

  if (!iconsVal || iconsVal.length === 0) {
    return <div className="text-white">No icons to show.</div>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-full overflow-auto transition-all duration-300 ease-in-out">
          {iconsVal.map((icon, index) => (
            <button
              key={icon.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-14 h-14 rounded-xl p-2 flex items-center justify-center border ${
                index === currentIndex
                  ? "border-purple-500 scale-100"
                  : "border-transparent opacity-100"
              } transition-all duration-300`}
            >
              <Icon icon={icon.icon} className="w-full h-full" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
