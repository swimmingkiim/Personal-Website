import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = ({ text, size, color = "#3481b4" }) => {
  return (
    <>
      {size === "small" && <H3 color={color}>{text}</H3>}
      {size === "middle" && <H2 color={color}>{text}</H2>}
      {size === "big" && <H1 color={color}>{text}</H1>}
    </>
  );
};

const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: 300%;

  @media only screen and (max-width: 768px) {
    font-size: 150%;
  }
`;
const H2 = styled.h2`
  color: ${(props) => props.color};
  font-size: 200%;

  @media only screen and (max-width: 768px) {
    font-size: 100%;
  }
`;
const H3 = styled.h3`
  color: ${(props) => props.color};
  font-size: 100%;

  @media only screen and (max-width: 768px) {
    font-size: 50%;
  }
`;

export default Title;
