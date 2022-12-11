import React from "react";

interface Prop {
  children: React.ReactNode;
  inProp: boolean;
}
const Fade = ({ inProp, children }: Prop) => {
  return (
    <div
      className={`fixed z-50 top-0 h-[100vh] shadow-md right-0 w-[80vw] lg:w-[20vw] p-8 bg-white ease-in-out duration-300 ${
        inProp ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      {children}
    </div>

  );
};

export default Fade;
