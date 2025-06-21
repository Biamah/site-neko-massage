import BannerCarousel from "./components/bannerCarousel";
import { slidesItems } from "./constants/slideItems";
import AboutUs from "./components/aboutUs";

export default function Home() {
  return (
    <div>
      <BannerCarousel slides={slidesItems} options={{ loop: true }} />
      <AboutUs />
    </div>
  );
}
