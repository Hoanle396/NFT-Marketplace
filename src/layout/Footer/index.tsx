import Twitter from "@/icons/Twitter";
import Youtube from "@/icons/Youtube";
import Instagram from "@/icons/instagram";
import { useRouter } from "next/router";

type Props = {};

export const MENU = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "OUR SERVICE",
    path: "/nfts",
  },
  {
    name: "OUR ABOUT US ",
    path: "/collection",
  },
  {
    name: "TESTIMONIAL",
    path: "/mint",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "CONTACT US",
    path: "/contact",
  },
];

const Footer = (props: Props) => {
  const { asPath } = useRouter();
  return (
    <div className="w-full h-32 border-[#FFFFFF4F] bg-[#3D054A] border-t-2 flex flex-col justify-center items-center relative">
      <div className="w-10/12 flex justify-between items-center">
        <div className="uppercase text-5xl font-bold text-white">
          A-<span className="text-[#E05BFF]">ROOM</span>
        </div>
        <div className="flex justify-end items-center space-x-3">
          {MENU.map((item) => (
            <div
              key={item.name}
              className={`min-w-[140px] bg-transparent border-[#E05BFF] hover:-skew-x-[8deg]
              p-2 rounded-full group hover:border-[#E05BFF99] hover:border-[2px]  text-center
              border-[${asPath === item.path ? "2px" : "0px"}]`}
            >
              <span className="text-white uppercase font-semibold text-xl group-hover:text-[#E05BFF]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-2">
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
      </div>
      <div className="w-10/12 flex justify-between absolute bottom-2">
        <div className="text-white text-sm">
          Privacy Policy Terms & Conditions Shipping Policy
        </div>
        <div className="text-white text-sm">
          © BY A-ROOM ALL RIGHT RESERVED 2023!
        </div>
        <div className="text-white text-sm">02 8338 8690 02 8338 9063</div>
      </div>
    </div>
  );
};

export default Footer;
