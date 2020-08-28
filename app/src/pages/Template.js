import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Template = ({ FirstView, SecondView, ThirdView, FooterView }) => {
  return (
    <OuterContainer>
      <FirstViewContainer>{FirstView}</FirstViewContainer>
      <SecondViewContainer>{SecondView}</SecondViewContainer>
      <ThirdViewContainer>{ThirdView}</ThirdViewContainer>
      <FooterViewContainer>{FooterView}</FooterViewContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.main`
  width: 100%;
  height: fit-content;
  overflow: hidden;
`;

const FirstViewContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const SecondViewContainer = styled.section`
  width: 100%;
  height: 150vh;
`;

const ThirdViewContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const FooterViewContainer = styled.section`
  width: 100%;
  height: 30vh;
`;

export default Template;
