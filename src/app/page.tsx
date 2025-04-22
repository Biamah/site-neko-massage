import { Header } from "./components/header";
import BannerCarousel from "./components/bannerCarousel";
import banner1 from "./assets/image-1.png";

const slides = [
  {
    id: 1,
    imageUrl: banner1.src,
    title: (
      <p>
        <span className="text-pastel-pink">
          <strong>Quick Massage</strong> para
        </span>{" "}
        <strong>Empresas e Eventos</strong>
      </p>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
  },
  {
    id: 2,
    imageUrl: banner1.src,
    title: (
      <p>
        <span className="text-pastel-pink">
          <strong>Quick Massage</strong> para
        </span>{" "}
        <strong>Empresas e Eventos</strong>
      </p>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
  },
  {
    id: 3,
    imageUrl: banner1.src,
    title: (
      <p>
        <span className="text-pastel-pink">
          <strong>Quick Massage</strong> para
        </span>{" "}
        <strong>Empresas e Eventos</strong>
      </p>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <BannerCarousel slides={slides} options={{ loop: true }} />
    </div>
  );
}
