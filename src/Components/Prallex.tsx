import React from "react";

export const Prallex: React.FC = ({ children }) => {
  const ref = React.useRef(null);

  const checkPosition = () => {
    console.log(ref.current);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkPosition);
    return function () {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};
