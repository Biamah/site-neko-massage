import { Header } from "./components/header";
import BannerCarousel from "./components/bannerCarousel";
import { slidesItems } from "./constants/slideItems";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerCarousel slides={slidesItems} options={{ loop: true }} />
    </div>
  );
}
