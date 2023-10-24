import React, { SVGProps } from "react";

const Write = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="38"
      height="33"
      viewBox="0 0 38 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4161 6.80862C18.2936 6.80862 19.0049 7.42293 19.0049 8.18073C19.0049 8.93852 18.2936 9.55283 17.4161 9.55283L7.73466 9.55283C6.9669 9.55283 6.3445 10.0903 6.3445 10.7534L6.3445 26.1896C6.3445 26.8527 6.96689 27.3902 7.73466 27.3902H25.6081C26.3759 27.3902 26.9983 26.8527 26.9983 26.1896V18.4715C26.9983 17.7137 27.7096 17.0994 28.5871 17.0994C29.4645 17.0994 30.1758 17.7137 30.1758 18.4715V26.1896C30.1758 28.3683 28.1308 30.1344 25.6081 30.1344H7.73466C5.21201 30.1344 3.16699 28.3683 3.16699 26.1896V10.7534C3.16699 8.57476 5.21201 6.80862 7.73466 6.80862H17.4161ZM29.8754 3.14132L34.3684 7.02163C34.988 7.55671 34.9889 8.42401 34.3704 8.96005L21.0298 20.523C20.8078 20.7154 20.5245 20.8466 20.2161 20.8999L14.5998 21.8699C13.4883 22.0619 12.5083 21.2156 12.7306 20.2556L13.8539 15.4053C13.9152 15.1405 14.0656 14.8972 14.2863 14.706L27.6269 3.14306C28.2469 2.60566 29.2543 2.60488 29.8754 3.14132ZM24.7337 9.53755L16.8752 16.3493L16.3133 18.7759L19.1199 18.2911L26.9803 11.4778L24.7337 9.53755ZM28.7542 6.0533L26.9763 7.59319L29.2229 9.53344L31.0007 7.99345L28.7542 6.0533Z"
        fill="white"
      />
    </svg>
  );
};

export default Write;