import React from "react";
import Image from "next/image";
import eventosImg from "../assets/image-1.png"; // ajuste o caminho conforme seu projeto
import { Button } from "./Button";

const MassageAtEvents = () => (
  <section className="flex justify-center">
    <div className="bg-[#e3c6fa] shadow-md flex flex-col md:flex-row items-center w-full overflow-hidden">
      {/* Texto e botão */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-30 py-10">
        <h2 className="font-[var(--font-titulo)] text-2xl md:text-3xl mb-2">
          <span className="block font-normal" style={{ fontFamily: 'var(--font-sail)' }}>Massagens</span>
          <span className="block text-5xl" style={{ fontFamily: 'var(--font-sail)' }}>em Eventos</span>
        </h2>
        <p className="text-dark-black text-base md:text-lg mb-6 max-w-md italic">
          Transforme seu evento ou ambiente de trabalho em uma experiência memorável com momentos de relaxamento e bem-estar!
        </p>
        <Button href="#" text="Saiba mais" />
      </div>
      {/* Imagem */}
      <div className="flex-1 min-h-[450px] min-w-[50%] relative w-full h-72 md:h-auto">
        <Image
          src={eventosImg}
          alt="Massagens em Eventos"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </section>
);

export default MassageAtEvents;