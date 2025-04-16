import React from "react";

interface ButtonProps {
  text: string;
  href: string; // Link obrigatório
  icon?: React.ReactNode; // Ícone opcional
}

export const Button: React.FC<ButtonProps> = ({ text, href, icon }) => {
  return (
    <a
      href={href}
      className="px-6 py-2 bg-pastel-purple text-dark-black font-semibold rounded-4xl hover:bg-pastel-pink transition-colors flex items-center gap-2"
      target="_blank"
    >
      {text}
      {icon && <span>{icon}</span>} {/* Renderiza o ícone se ele for passado */}
    </a>
  );
};
