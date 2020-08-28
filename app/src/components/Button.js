import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ content, onClickFunc }) => {
  return (
    <ButtonContainer type="button" onClick={onClickFunc}>
      {content}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 7.5vh;
  height: 7.5vh;
  border: none;
  background-color: transparent;
`;

export default Button;
