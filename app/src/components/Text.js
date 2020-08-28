import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = ({ textContent }) => {
  return <TextContainer>{textContent}</TextContainer>;
};

const TextContainer = styled.p`
  width: 100%;
  font-size: 100%;
`;

export default Text;
