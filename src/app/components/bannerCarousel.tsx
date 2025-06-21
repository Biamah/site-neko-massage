"use client";
import React, { JSX, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { StaticImageData } from "next/image";
import { Header } from "./header";

type Slide = {
  id: number;
  imageUrl: StaticImageData | string;
  title: JSX.Element;
  description: string;
};

type BannerCarouselProps = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const BannerCarousel: React.FC<BannerCarouselProps> = ({ slides, options }) => {
  const autoplayOptions = Autoplay({ delay: 10000 });
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayOptions]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Atualiza o índice selecionado quando o slide muda
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-md:h-[80vh] h-[60vw] xl:h-[50vw] overflow-hidden">
      <Header />
      <div className="embla__viewport w-full h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] relative h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 max-w-3xl">
                  {slide.title}
                </h1>
                <p className="text-base font-bold max-w-2xl mb-8">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <NavigationButton
        direction="prev"
        onClick={() => emblaApi?.scrollPrev()}
        icon={
          <svg
            width="22"
            height="41"
            viewBox="0 0 22 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 39L2 20.5L20.5 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <NavigationButton
        direction="next"
        onClick={() => emblaApi?.scrollNext()}
        icon={
          <svg
            width="22"
            height="41"
            viewBox="0 0 22 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 39L20 20.5L1.5 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Bullets numerados */}
      <div className="absolute bottom-10 left-[20%] transform -translate-x-1/2 flex gap-2 flex-col">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full text-xl md:text-4xl bg-transparent text-white ${
              selectedIndex === index ? "" : "opacity-25"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

type NavigationButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  icon: JSX.Element;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
  icon,
}) => {
  const isPrev = direction === "prev";
  return (
    <button
      className={`embla__${direction} absolute top-2/3 md:top-1/2 ${
        isPrev ? "left-4" : "right-4"
      } transform -translate-y-1/2 z-10 p-2 rounded-full bg-opacity-50 text-white hover:bg-opacity-70`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default BannerCarousel;
