import React from "react";
import styled from "styled-components";

interface PropsTypes {
  children: Element;
}
export const Pages: React.FC = ({ children }) => {
  const [p, setP] = React.useState(0);
  return (children as any)[p];
};

export const Page = styled.div<{ background?: string }>`
  width: 100%;
  height: 100%;
`;
