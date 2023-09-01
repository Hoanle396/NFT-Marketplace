import React from "react";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="w-full h-full bg-[#3D054A] flex justify-center">
        <div className="w-10/12">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
