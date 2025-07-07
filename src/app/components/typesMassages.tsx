import React from 'react';
import massageTypes from '../constants/massageTypes';
import bg from "../assets/bg-types-massages.png";
import Image from 'next/image';

const TypesMassages = () => (
  <section className="relative bg-[#faf8f6] py-12">
    {/* Imagem de fundo */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={bg}
        alt="Massagem"
        fill
        className="object-cover opacity-60"
        style={{ zIndex: 0 }}
        priority
      />
      <div className="absolute inset-0 bg-[#1E1E1C]/20 pointer-events-none" />
    </div>
    {/* Conteúdo */}
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <h2 className="text-center text-white font-serif text-2xl md:text-4xl font-bold mb-10 drop-shadow-lg">
        <span className="block text-lg md:text-xl font-sans font-semibold italic">Tipos de</span>
        <span className="block font-[var(--font-titulo)] text-3xl md:text-5xl">Massagem</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {massageTypes.map((item, idx) => (
          <div
            key={idx}
            className="bg-pastel-pink-second backdrop-blur-md rounded-2xl p-6 flex-1 min-w-[260px] max-w-sm shadow-md border border-pink-100 flex flex-col items-start justify-between"
          >
            <h3 className="text-sm font-bold mb-2 text-gray-700">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{item.description}</p>
            <a
              href={item.link}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/70 text-black/70 font-medium text-sm hover:bg-pink-50 transition"
            >
              {item.button}
              <span className="text-lg">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TypesMassages;