import React, { SVGProps } from "react";

const Twitter = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
        <rect x="11" y="13" width="16" height="12" fill="url(#pattern0tw)" />
      </g>
      <defs>
        <pattern
          id="pattern0tw"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_10_2438"
            transform="scale(0.0625 0.0833333)"
          />
        </pattern>
        <image
          id="image0_10_2438"
          width="16"
          height="12"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAABHNCSVQICAgIfAhkiAAAAQFJREFUKFOF0b8rh1EUx/HXMwiTlGTCpPwHMigWgyxGySyDr8kgq6yUHyWDMiilFMViUv4EC4NdLEqhPDq6Tz09XZzl3M79nPf53HOLsixhEI9xyEQbDjCFd+zjHMO4KBLgBUdoZQDXmMjUHzBdAd7QiROs4b7W8GMxEztYD0CBeRzWRKe4QjSH/WZ8oD2KAYjJC1hBX0YckBhSjyf0VoC4vMXIL1Zz5RuMVYDIPen9o5W1f2CL2KsD4ryEzYzdJusLHfhsAiZxli7/MjCL40pQfWO9YTcttbm40GxhuS4OQDfGMYB+zKTcdLGKjWYxAF2YSzsYSoLXlJ9xiW3c5d71DV5bTDns0s3GAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default Twitter;
