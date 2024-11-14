import React from "react";

// This Component is designed to be authentic, basic and somewhat vanilla.
// However, most of the styling here is from a parent scss
// The rest is the global/default tailwind css.
const MainBodyText = () => {
  const plusSign = <span className="text-white">+</span>;

  return (
    <>
      <div className="body-text-1">
        <h2 className="p-1 title typo-fw1">
          <div className="flex mb--20">
            <span className="text-giving text-info">G</span>
            <span className="y-center">
              <span>iving</span>
              <span className="block text-info p-1 -mt">limpses </span>
            </span>
          </div>
          <div className="text-wide">
            <span>
              of <span className="text-warning">what I do</span> with
            </span>
            <span className="block text-success">React {plusSign} NextJS {plusSign} TS</span>
          </div>
        </h2>
        <div className="subtitle my-3">
          &#39;Technology is best when it brings people together&#39;
          <span className="title typo-fw1"> — Matt Mullenweg</span>
        </div>
      </div>
    </>
  );
};

export default MainBodyText;
