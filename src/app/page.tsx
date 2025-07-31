import BannerCarousel from "./components/bannerCarousel";
import { slidesItems } from "./constants/slideItems";
import AboutUs from "./components/aboutUs";
import TypesMassages from "./components/typesMassages";
import WeddingSection from "./components/weddingSection";

export default function Home() {
  return (
    <div>
      <BannerCarousel slides={slidesItems} options={{ loop: true }} />
      <AboutUs />
      <TypesMassages />
      <WeddingSection />
    </div>
  );
}
