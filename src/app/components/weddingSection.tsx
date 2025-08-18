import React from "react";
import Image from "next/image";
import weddingImg from "../assets/bridesmaids.png";
import ornament from "../assets/lines-icon.svg"; // Importe o SVG
import { Button } from "./Button";

const WeddingSection = () => (
  <section className="flex justify-center py-24 bg-transparent relative">
    <div className="bg-beige rounded-2xl shadow-md flex flex-col md:flex-row items-center max-w-5xl w-full px-6 md:px-12 py-10 overflow-hidden">
      {/* Ornamento decorativo à esquerda */}
      <div
        className="absolute left-0 md:left-5 xl:left-50 top-to-center h-80 w-1/3 -z-10 hidden md:block"
        style={{
          backgroundImage: `url(${ornament.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "left center",
        }}
        aria-hidden="true"
      />
      {/* Imagem circular */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-t-full     overflow-hidden bg-gray-200 flex items-center justify-center">
          <Image
            src={weddingImg}
            alt="Massagens em Casamentos"
            width={288}
            height={288}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      {/* Conteúdo */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="font-[var(--font-titulo)] text-2xl md:text-3xl mb-2">
          <span className="block font-normal" style={{ fontFamily: 'var(--font-sail)' }}>Massagens</span>
          <span className="block text-5xl" style={{ fontFamily: 'var(--font-sail)' }}>em Casamentos</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6 italic">
          Seu grande dia merece cada detalhe inesquecível, inclusive momentos de relaxamento!
        </p>
        <Button href="#" text="Saiba mais"/>
      </div>
    </div>
  </section>
);

export default WeddingSection;