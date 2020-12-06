import React from "react";
import styled from "styled-components";

interface PropsTypes {
  children: Element;
}
export const Pages: React.FC = ({ children }) => {
  const [p, setP] = React.useState(0);

  const nextPage = () =>
    setP((prevState) => {
      const nextP = prevState + 1;
      if (nextP < (children as []).length) return nextP;
      return prevState;
    });

  const prevPage = () =>
    setP((prevState) => {
      const prevP = prevState - 1;
      if (prevP < 0) return 0;
      return prevP;
    });

  const wheelHandler = (event: any) => {
    if (event.deltaY > 0) {
      nextPage();
    } else {
      prevPage();
    }
  };
  React.useEffect(() => {
    window.addEventListener("wheel", wheelHandler);
    return function () {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  console.log("p", p);
  return (children as any)[p];
};

export const Page = styled.div<{ background?: string }>`
  width: 100%;
  height: 100%;
`;
