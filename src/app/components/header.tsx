import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "./Button";
import { Social } from "./social";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-12 w-full">
      <div className="container mx-auto px-6 flex justify-end items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={193}
            height={100}
            className="h-24 object-contain"
          />
        </div>

        <div className="hidden md:block">
          <div className="flex gap-4">
            <Button
              href="https://wa.me/5185424053"
              text="Contato"
              icon={<FaWhatsapp />}
            />
            <Social
              icon={<FaLinkedin />}
              link="https://www.linkedin.com"
              label="linkedin"
            />
            <Social
              icon={<FaInstagram />}
              link="https://www.instagram.com/nekkomassage"
              label="Instagram"
            />
          </div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            aria-label="Abrir menu"
          >
            {/* Ícone hamburguer */}
            <svg width="24" height="24" fill="none" stroke="white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="text-white text-3xl"
                >
                  &times;
                </button>
              </div>
              <nav className="flex flex-col items-center justify-start flex-1 gap-8">
                {/* Substitua pelos seus links reais */}
                <a
                  href="#contato"
                  className="text-white text-xl font-semibold hover:text-pink-300 transition"
                >
                  Contato
                </a>
                <a
                  href="#sobre"
                  className="text-white text-xl font-semibold hover:text-pink-300 transition"
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="text-white text-xl font-semibold hover:text-pink-300 transition"
                >
                  Serviços
                </a>
                <a
                  href="#eventos"
                  className="text-white text-xl font-semibold hover:text-pink-300 transition"
                >
                  Eventos
                </a>
                {/* Adicione outros itens conforme necessário */}
              </nav>
              <div className="flex justify-center gap-4 pb-8">
                {/* Ícones sociais, se quiser */}
                <a
                  href="#"
                  className="text-white text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-2xl"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
