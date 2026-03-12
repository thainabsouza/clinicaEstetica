"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SlideToWhatsApp } from "@/components/SlideToWhatsApp";

const slides = [
  {
    image: "/capa_slid00.png",
  },
  {
    image: "/capa_slid01.png",
  },
  {
    image: "/capa_slid02.png",
  },
  {
    image: "/capa_slid03.png",
  },
];

export default function Slid() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  // troca automática
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Capa"
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center pb-24 px-3">
        <div className="text-white max-w-lg space-y-4">
          <SlideToWhatsApp />
        </div>
      </div>

      {/* botões */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-6 top-1/2 -translate-y-1/2 text-white text-3xl"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-6 top-1/2 -translate-y-1/2 text-white text-3xl"
      >
        ›
      </button>
    </div>
  );
}
