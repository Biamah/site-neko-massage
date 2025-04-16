import React from "react";

interface SocialProps {
  icon: React.ReactNode;
  link: string;
  label: string;
}

export const Social: React.FC<SocialProps> = ({ icon, link, label }) => {
  return (
    <a
      href={link}
      aria-label={label}
      className="text-pastel-pink transition-colors flex items-center justify-center size-10 rounded-full border-1 border-pastel-pink "
      target="_blank"
    >
      {icon}
    </a>
  );
};
