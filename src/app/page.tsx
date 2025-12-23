import "./index/mainindex.scss";

import ImageSlider from "./index/mainindex-2";
import MainBodyText from "./index/mainindex-1";
import IndexButtonGroup from "./index/mainindex-3";

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
      {/* <Footer /> */}
    </main>
  );
}
