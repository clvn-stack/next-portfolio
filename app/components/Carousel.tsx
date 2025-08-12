"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Services = {
  id: number;
  title: string;
  description: string;
  icon: string;
  projects?: Projects[];
};
type Projects = {
  name: string;
  link: string;
  type: string;
};

interface CarouselProps {
  handleServices: Services[];
  scrollRef: React.RefObject<HTMLDivElement | null>;
  autoSlide?: boolean;
  interval?: number;
}

const Carousel = ({
  scrollRef,
  autoSlide = true,
  interval = 5000,
  handleServices,
}: CarouselProps) => {
  const isHoveredRef = useRef(false);
  const [selectedService, setSelectedService] = useState<Services | null>(null);

  useEffect(() => {
    if (!autoSlide || !scrollRef.current) return;

    const el = scrollRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    let intervalId: NodeJS.Timeout;

    const startScrolling = () => {
      const scroll = () => {
        if (!scrollRef.current) return;

        const child = scrollRef.current.firstElementChild as HTMLElement;
        const itemWidth = child?.getBoundingClientRect().width || 300;
        const maxScrollLeft = el.scrollWidth / 2;

        if (!isHoveredRef.current) {
          if (el.scrollLeft + el.offsetWidth >= maxScrollLeft) {
            el.scrollTo({ left: 0, behavior: "auto" });
          } else {
            el.scrollBy({ left: itemWidth + 16, behavior: "smooth" });
          }
        }
      };

      intervalId = setInterval(scroll, interval);
    };

    const timeoutId = setTimeout(() => {
      startScrolling();
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [autoSlide, interval, scrollRef]);

  const handleClick = (service: Services) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelectedService(null);
    document.body.style.overflow = "";
  };

  const cardClass =
    "w-full sm:w-[60%] md:w-[60%] lg:w-[280px] h-60 bg-black/20 px-8 rounded-xl flex-shrink-0 snap-start flex flex-col items-center justify-center font-bold text-xl transition-all duration-300 ease-in-out hover:bg-white/10 cursor-pointer";

  const items = [...handleServices, ...handleServices].map((service, i) => (
    <div
      id={`item-${i}`}
      key={`item-${i}`}
      className={cardClass}
      onClick={() => handleClick(service)}
    >
      <div className="p-2 rounded-full bg-white/10">
        <img src={`./images/${service.icon}.svg`} className="w-12" />
      </div>
      <div className="text-lg mt-2">{service.title}</div>
      <div className="text-sm font-normal text-center text-purple-300">
        {service.description}
      </div>
    </div>
  ));

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 scrollbar-hide"
      >
        {items}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black/40 text-white max-w-md w-[90vw] rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold">{selectedService.title}</h3>
              <p className="py-4 text-purple-300">
                {selectedService.description}
              </p>
              <ul className="list bg-black/0 rounded-box shadow-md">
                <li className="p-4 pb-2 text-sm font-bold opacity-60 tracking-wide">
                  Sample Projects
                </li>
                {selectedService?.projects?.map((project, index) => (
                  <li key={index} className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">
                      0{index + 1}
                    </div>
                    <div>
                      <img
                        className="size-10 rounded-box"
                        src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                      />
                    </div>
                    <div className="list-col-grow">
                      <div>{project.name}</div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {project.type}
                      </div>
                    </div>
                    <button className="btn btn-square btn-ghost w-16 px-2">
                      Visit
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right">
                <button
                  onClick={handleClose}
                  className="btn btn-md btn-success"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
