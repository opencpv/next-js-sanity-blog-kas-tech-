import React from "react";

interface Props {
  children: React.ReactNode;
  style?: string;
}
const FlexLayout = ({ children, style }: Props) => {
  return <div className={`flex ${style}`}>{children}</div>;
};

export default FlexLayout;
