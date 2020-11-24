import React from "react";
import styled from "styled-components";

const TransitionWrap = styled.div<{ isDone: boolean }>`
  transition-property: top;
  transition-duration: 1s;
  top: 200px;
  ${(props) => props.isDone && `top:0;`};
  position: relative;
`;

export const Transition: React.FC = ({ children }) => {
  const [isDone, setIsDone] = React.useState(false);
  React.useEffect(() => {
    setIsDone(true);
  }, []);

  return (
    <TransitionWrap isDone={isDone}>
      <div>{children}</div>
    </TransitionWrap>
  );
};
