import React, { SVGProps } from "react";

const Instagram = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
        <rect x="11" y="11" width="13" height="13" fill="url(#pattern0ig)" />
      </g>
      <defs>
        <pattern
          id="pattern0ig"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10_2435" transform="scale(0.0769231)" />
        </pattern>
        <image
          id="image0_10_2435"
          width="13"
          height="13"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAATdJREFUKFN90T1LnEEUxfHfKhHtrNIoFhbxJYSAICJGo4JYLaxgYVKkTKOW+QI2fgIrBbGQxEIUFQQLXxIjwSaVhSCRFCoWWtgYRXjClXlgWcSBaebe/9xz7ilkWQbvMIdXKMRDxXnAX0xis5BlWTcOsI1FXOEf7lCDWtxgFOMoBnSGc3Q+MSF/msYfdOBTQKHvA76ljjYsoAWn+IgvqTYVcA6NYDV5OsZvrGMAvWhIasL79xwqYgNHqEZrmdTw24RGhP+9HBrGFkLqBGbKoBJW0lbf4rByUki7x5syaAev8RJd+FHpqT1J/JU89WMo+dpPee7m0BiW0u8hYR7NiDg+42eqvccjdIkT9DyTU15azsPti40kOV9xjdvk7QXqUI+IJRSVYlL8MojZtNqqionREPcibXbtP/pyb1bC7ZjWAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default Instagram;
