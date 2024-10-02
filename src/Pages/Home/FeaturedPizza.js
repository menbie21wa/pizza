import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import Autoplay from "embla-carousel-autoplay";
import EmblaCarousel from "embla-carousel";
import PizzaBg from "../../Assets/company-logo/Pizza-background.PNG";

const FeaturePizza = () => {
  // const [emblaRef, emblaApi] = useEmblaCarousel(
  //   { loop: true, align: "start" },
  //   [Autoplay({ stopOnInteraction: true, interval: 300 })]
  // );

  const [embla, setEmbla] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  const emblaRef = useCallback((node) => {
    if (node !== null) {
      const emblaInstance = EmblaCarousel(
        node,
        { loop: true, align: "start" },
        [Autoplay({ stopOnInteraction: true, interval: 300 })]
      );
      setEmbla(emblaInstance);
      setSlidesCount(emblaInstance.slideNodes().length);

      emblaInstance.on("select", () => {
        setSelectedIndex(emblaInstance.selectedScrollSnap());
      });
    }
  }, []);

  return (
    <>
      <div className="w-full bg-[#FFF8F1]">
        <div className="w-11/12 md:w-10/12 mx-auto flex flex-col px-6 py-8">
          <h1 className="text-start font-normal text-2xl md:text-5xl font-serif mb-6">
            Featured Pizza
          </h1>
          <div
            className="overflow-hidden relative bg-[#f7fafd]"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
            ref={emblaRef}
          >
            <div className="flex  text-white">
              <div
                class="min-w-0 w-full h-full  flex items-center justify-center"
                style={{
                  flex: "0 0 100%",
                }}
              >
                <div class="w-full mx-auto">
                  <div class="flex flex-row  items-center justify-center h-full bg-[#2F2F2F] rounded-xl">
                    <div class="w-2/3 py-2 px-16">
                      <p class="text-start font-normal text-2xl md:text-5xl text-white">
                        Make Your First Order
                      </p>
                      <p class="text-start font-normal text-2xl md:text-5xl text-white">
                        and Get <span className="text-[#FF9921]">50% Off</span>
                      </p>
                      <p class="w-full py-8 text-sm tracking-wide leading-tight text-white">
                        Get food from your favorite restaurants in Addis
                        delivered to your home or office.Get food from your
                        favorite restaurants in Addis delivered to your home or
                        office. what you're looking for.
                      </p>
                      <div class="rounded w-1/3 pb-4">
                        <div class="opacity-95 rounded-lg px-4 bg-[#FF9921]">
                          <p class="m-auto inset-0 text-lg font-medium leading-normal text-center text-white py-2">
                            Order Now
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/3 h-full">
                      <img class="w-full h-72 rounded-r-xl" src={PizzaBg} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="min-w-0 w-full h-full  flex items-center justify-center"
                style={{
                  flex: "0 0 100%",
                }}
              >
                <div class="w-full mx-auto">
                  <div class="flex flex-row  items-center justify-center h-full bg-[#50482B] rounded-xl">
                    <div class="w-2/3 py-2 px-16">
                      <p class="text-start font-normal text-2xl md:text-5xl text-white">
                        Make Your First Order
                      </p>
                      <p class="text-start font-normal text-2xl md:text-5xl text-white">
                        and Get <span className="text-[#FF9921]">50% Off</span>
                      </p>
                      <p class="w-full py-8 text-sm tracking-wide leading-tight text-white">
                        Get food from your favorite restaurants in Addis
                        delivered to your home or office.Get food from your
                        favorite restaurants in Addis delivered to your home or
                        office. what you're looking for.
                      </p>
                      <div class="rounded w-1/3 pb-4">
                        <div class="opacity-95 rounded-lg px-4 bg-[#FF9921]">
                          <p class="m-auto inset-0 text-lg font-medium leading-normal text-center text-white py-2">
                            Order Now
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/3 h-full">
                      <img class="w-full h-72 rounded-r-xl" src={PizzaBg} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="min-w-0 w-full h-full  flex items-center justify-center"
                style={{
                  flex: "0 0 100%",
                }}
              >
                <div class="w-full mx-auto">
                  <div class="flex flex-row  items-center justify-center h-full bg-[#296D60] rounded-xl">
                    <div class="w-2/3 py-2 px-16">
                      <p class="text-start font-normal text-2xl md:text-5xl text-white">
                        Make Your First Order
                      </p>
                      <p class="text-start font-normal text-2xl md:text-5xl text-white">
                        and Get <span className="text-[#FF9921]">50% Off</span>
                      </p>
                      <p class="w-full py-8 text-sm tracking-wide leading-tight text-white">
                        Get food from your favorite restaurants in Addis
                        delivered to your home or office.Get food from your
                        favorite restaurants in Addis delivered to your home or
                        office. what you're looking for.
                      </p>
                      <div class="rounded w-1/3 pb-4">
                        <div class="opacity-95 rounded-lg px-4 bg-[#FF9921]">
                          <p class="m-auto inset-0 text-lg font-medium leading-normal text-center text-white py-2">
                            Order Now
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/3 h-full">
                      <img class="w-full h-72  rounded-r-xl" src={PizzaBg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dots
            selectedIndex={selectedIndex}
            slidesCount={slidesCount}
            embla={embla}
          />
        </div>
      </div>
    </>
  );
};
const Dots = ({ selectedIndex, slidesCount, embla }) => {
  return (
    <div className="flex justify-center mt-4 space-x-3">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <button
          key={index}
          className={`w-4 h-4 rounded-full transition-colors ${
            selectedIndex === index ? "bg-[#FF9921]" : "bg-gray-400"
          }`}
          onClick={() => embla && embla.scrollTo(index)}
        />
      ))}
    </div>
  );
};
export default FeaturePizza;
