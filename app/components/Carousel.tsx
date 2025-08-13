"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Services = {
  id: number;
  title: string;
  description: string;
  icon: string;
  modalD?: string;
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
    "w-full sm:w-[60%] md:w-[60%] lg:w-[280px] h-80 bg-black/20 rounded-xl flex-shrink-0 snap-start flex flex-col items-center justify-start font-bold text-xl transition-all duration-300 ease-in-out hover:bg-white/10 cursor-pointer";

  const items = [...handleServices, ...handleServices].map((service, i) => (
    <div
      id={`item-${i}`}
      key={`item-${i}`}
      className={`${cardClass}`}
      onClick={() => handleClick(service)}
    >
      <Image
        className="rounded-t-2xl w-full"
        src="/images/fur.jpg"
        alt={`${service.icon}`}
        width="200"
        height={100}
      />
      <div className="flex flex-col h-full justify-start items-center p-4">
        <div className="text-lg pb-2 capitalize">{service.title}</div>
        <div className="text-sm font-normal text-purple-300 h-fit text-center">
          {service.description}
        </div>
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
              <h3 className="text-xl font-bold capitalize">
                {selectedService.title}
              </h3>
              <p className="py-4 text-purple-300">{selectedService.modalD}</p>
              <ul className="list bg-black/50 rounded-box shadow-md">
                {selectedService?.projects?.map((project, index) => (
                  <li key={index} className="list-row">
                    <div className="list-col-grow cursor-pointer space-y-2">
                      <div className="text-xs font-semibold">
                        Link :{" "}
                        <a
                          className="hover:text-green-300"
                          href={project.link}
                          target="_blank"
                        >
                          {project.link}
                        </a>
                      </div>
                    </div>
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
