import { StaticImageData } from "next/image";
import img1 from "../assets/image-slide-1.png";
import img2 from "../assets/image-slide-2.png";
import img3 from "../assets/image-slide-3.png";
import img4 from "../assets/image-slide-4.png";
import img5 from "../assets/image-slide-5.png";

export type Testimonial = {
  id: number;
  image: StaticImageData;
  alt?: string;
};

const feedbackItens: Testimonial[] = [
  { id: 1, image: img1, alt: "feedback 1" },
  { id: 2, image: img2, alt: "feedback 2" },
  { id: 3, image: img3, alt: "feedback 3" },
  { id: 4, image: img4, alt: "feedback 4" },
  { id: 5, image: img5, alt: "feedback 5" },
  { id: 6, image: img2, alt: "feedback 6" },
  { id: 7, image: img3, alt: "feedback 7" },
];

export default feedbackItens;
