import { cn } from "@/lib/utils";

import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";

const CarouselProps = ({
  items,
  initialScroll?=  number,
  classname= string,
})

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
      const carouselRef = React.useRef<HTMLDivElement>(null);
      const [canScrollLeft, setCanScrollLeft] = React.useState(false);
      const [canScrollRight, setCanScrollRight] = React.useState(true);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft = initialScroll;
          checkScrollability();
        }
      }, [initialScroll]);
    
      const checkScrollability = () => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          setCanScrollLeft(scrollLeft > 0);
          setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
      };
    
      const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
      };
    
      const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      };
    
      return (
          <div className="relative w-full">
            <div
              className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
              ref={carouselRef}
              onScroll={checkScrollability}
            >
              <div
                className={cn(
                  "absolute right-0  z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                )}
              ></div>
    
              <div
                className={cn(
                  "flex flex-row justify-start gap-4 pl-4",
                  "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
                )}
              >
                {items.map((item, index) => (
                  <div
                    key={"card" + index}
                    className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 mr-10">
              <button
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                onClick={scrollLeft}
                disabled={!canScrollLeft}
              >
                <div className="h-6 w-6 text-gray-500" />
              </button>
              <button
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                onClick={scrollRight}
                disabled={!canScrollRight}
              >
                <div className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
      );
  )
}

