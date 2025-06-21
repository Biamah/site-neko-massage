import React from "react";

const AboutUs = () => (
  <section className="flex justify-center bg-[#faf8f6] py-10">
    <div className="flex flex-col md:flex-row bg-[#f8f5f2] rounded-lg max-w-4xl w-full p-8 gap-8 shadow-sm ml-4 md:ml-0 mr-4 md:mr-0">
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-center font-serif text-2xl md:text-3xl font-medium" style={{ fontFamily: 'var(--font-sail)' }}>
          Conheça a
          <br />
          <span className="block font-[Sail] text-3xl md:text-4xl font-normal" style={{ fontFamily: 'var(--font-sail)' }}>
            Nekko Massage
          </span>
        </h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-pastel-pink text-xs font-semibold mb-3 tracking-[1em] text-center md:text-start">
          BOAS-VINDAS!
        </span>
        <p className="text-light-black text-base leading-relaxed text-center md:text-start">
          Me chamo Sue Ellen, massoterapeuta formada pelo Instituto Lis e
          idealizadora da Nekko Massage – uma marca criada com propósito e
          sensibilidade para transformar momentos em experiências de puro
          bem-estar. Todos os atendimentos são realizados por mim, com técnica,
          atenção e muito carinho, para garantir leveza, relaxamento e um cuidado
          único no seu dia especial.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;