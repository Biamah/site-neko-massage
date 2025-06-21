import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "./Button";
import { Social } from "./social";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-12 w-full">
      <div className="container mx-auto px-6 flex justify-end items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/logo.png" alt="Logo" width={193} height={100} className="h-24 object-contain" />
        </div>

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
    </header>
  );
};
