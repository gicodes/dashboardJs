import "./index/index.scss";

import ImageSlider from "./index/image-box";
import MainBodyText from "./index/text-box";
import IndexButtonGroup from "./index/btn-group";
import Footer from "./index/footer";

export default function Home() {
  return (
    <main>
      <div className="index-container-1">
        <div className="flex-1">
          <MainBodyText />
        </div>
        <div className="flex-1">
          <ImageSlider />
        </div>
      </div>
      <div className="index-btn-group">
        <IndexButtonGroup />
      </div>
      <Footer />
    </main>
  );
}
