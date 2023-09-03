import React, { SVGProps } from "react";

const Youtube = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g opacity="0.901961">
        <circle
          cx="18.0002"
          cy="18.0002"
          r="16.84"
          stroke="#7646A2"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <rect x="11" y="13" width="14" height="10" fill="url(#patternytb)" />
      </g>
      <defs>
        <pattern
          id="patternytb"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10_2441" transform="scale(0.0714286 0.1)" />
        </pattern>
        <image
          id="image0_10_2441"
          width="14"
          height="10"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAABHNCSVQICAgIfAhkiAAAALBJREFUKFOd0TFqQkEQBuBPE4IgaJEDBCxS2AVB7KzFIwheIY2VRercIJDSxhvkHB5AMEdIUGxEV/ZVj/W9pzjdMnzDPzu1EEIb3xjiSXUFbPBRCyH8YHQFXLQjPKKe65ySd9HMY4Q7NBM4RRfzkiTbCP8Q98zXG1bo4R2TJEUpHCPuHmuGTzzkJmfwH60kah8NLNApiJvBAx4TuMZrxU/vI/zFyz3nGGCJ5xtxPNfXGaWhPHUutPygAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default Youtube;
