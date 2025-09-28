import React from "react";
import Image from "next/image";
import IconMaster from "../assets/mastercard.svg";
import IconVisa from "../assets/visa.svg";
import IconPix from "../assets/pix.svg";
import LogoFooter from "../assets/logo-footer.svg";
import Instagram from "../assets/icone-instagram.svg";
import Linkedin from "../assets/icone-linkedin.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center py-12 gap-40">
      <div className="flex justify-center flex-col gap-2">
        <p>Formas de Pagamento</p>
        <div className="flex gap-4 justify-start">
          <Image src={IconMaster} alt="Icone mastercard"></Image>
          <Image src={IconVisa} alt="Icone visa"></Image>
          <Image src={IconPix} alt="Icone pix"></Image>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <Image src={LogoFooter} alt="Logo da Nekko Massagem"></Image>
        <p>© Nekko Massage | Todos os Direitos Reservados</p>
      </div>

      <div className="flex justify-center flex-col gap-2">
        <p>Redes Sociais</p>
        <div className="flex gap-4 justify-end">
          <Image src={Instagram} alt="Icone do Instagram"></Image>
          <Image src={Linkedin} alt="Icone do Linkedin"></Image>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
