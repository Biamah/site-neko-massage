import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ text, href, icon }) => {
  return (
    <a
      href={href}
      className="px-6 py-2 bg-pastel-purple text-dark-black font-semibold text-base rounded-4xl hover:bg-pastel-pink transition-colors flex items-center gap-2"
      target="_blank"
    >
      {text}
      {icon && <span>{icon}</span>}
    </a>
  );
};
