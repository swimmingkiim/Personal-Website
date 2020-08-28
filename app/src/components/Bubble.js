import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Bubble = ({ r, cx, cy, opacity }) => {
  return (
    <Circle
      className="bubbles go-up move-left-right"
      stroke="white"
      strock-width="1"
      fill="white"
      r={r}
      cx={cx}
      cy={cy}
      opacity={opacity}
    />
  );
};

const Circle = styled.circle`
  // opacity: ${(props) => props.opacity};
  z-index: 1;
  @keyframes move-x {
    0% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-5%);
    }
    50% {
      transform: translateX(0%);
    }
    75% {
      transform: translateX(5%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  /* 
    @keyframes duration | timing-function | delay | 
    iteration-count | direction | fill-mode | play-state | name
  */
  &.move-left-right {
    animation: 2s linear 15 move-x;
  }
`;

export default Bubble;
