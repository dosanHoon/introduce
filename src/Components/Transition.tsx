import React from "react";
import styled from "styled-components";

const TransitionWrap = styled.div<{ isDone: boolean; from?: string }>`
  position: relative;
  transition-property: top;
  transition-duration: 1s;
  top: 200px;
  ${(props) => {
    if (props.from) {
      return `transition-property: ${props.from};top: 0px;${props.from}:${
        props.isDone ? `0;` : "-200px;"
      }`;
    } else {
      return props.isDone && `top:0;`;
    }
  }};
`;

export const Transition: React.FC<PropsTypes> = ({ from, to, children }) => {
  const [isDone, setIsDone] = React.useState(false);
  React.useEffect(() => {
    setIsDone(true);
  }, []);

  return (
    <TransitionWrap isDone={isDone} from={from}>
      <div>{children}</div>
    </TransitionWrap>
  );
};

export interface PropsTypes {
  from?: string;
  to?: string;
}
