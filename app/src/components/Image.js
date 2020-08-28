import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Image = ({ source, w, h, classString = "" }) => {
  return (
    <Img
      className={classString === "" ? null : classString}
      src={source}
      {...{ w, h }}
    />
  );
};

const Img = styled.img`
  width: ${(props) => (props.w ? props.w : null)};
  height: ${(props) => (props.w ? props.w : "3em")};

  @keyframes move-horizontally {
    0% {
      transform: translateX(-110%) scaleX(-1);
    }
    50% {
      transform: translateX(110vw) scaleX(-1);
    }
    51% {
      transform: translateX(110vw) scaleX(1);
    }
    100% {
      transform: translateX(-110%) scaleX(1);
    }
  }

  /* 
    @keyframes duration | timing-function | delay | 
    iteration-count | direction | fill-mode | play-state | name
  */

  &.fish-move {
    animation: 25s ease-in-out infinite normal move-horizontally;
  }
`;

export default Image;
