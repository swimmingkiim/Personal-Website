import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FirstViewTemplate = ({ header, wave }) => {
  return (
    <Container>
      <HeaderContainer>{header}</HeaderContainer>
      {wave}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

const HeaderContainer = styled.header`
  width: 100%;
  margin: 2% 0%;
  height: fit-content;
  text-align: center;
  position: absolute;
  top: 0;
`;

export default FirstViewTemplate;
