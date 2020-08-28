import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wave = ({ dString }) => {
  return (
    <SVG width={window.innerWidth} height={window.innerHeight}>
      <path
        id="wave"
        d={dString}
        stroke="#59b7ac"
        strokeWidth="3"
        fill="#59b7ac"
      />
    </SVG>
  );
};

const SVG = styled.svg`
  width: 100%;
  position: absolute;
  bottom: 0%;
  left: 0%;
`;

export default Wave;
