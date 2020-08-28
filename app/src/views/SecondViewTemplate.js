import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SecondViewTemplate = ({ bubbles, fish, resume }) => {
  return (
    <Container>
      <BubbleContainer>{bubbles}</BubbleContainer>
      <FishContainer>{fish}</FishContainer>
      <ResumeContainer>{resume}</ResumeContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #59b7ac, #3481b4);
  position: relative;
`;

const BubbleContainer = styled.svg`
  opacity: 0;
  width: 100%;
  height: 70%;
  position: absolute;
  top: 0;

  @keyframes move-y {
    0% {
      transform: translateY(0%);
      opacity: 0;
    }
    50% {
      transform: translateY(-30vh);
      opacity: 1;
    }
    100% {
      transform: translateY(-60vh);
      opacity: 0;
    }
  }

  & {
    animation: 9s linear 3 move-y;
  }
`;

const FishContainer = styled.div`
  width: 100%;
  height: 3em;
  position: absolute;
  bottom: 0%;
`;

const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2% 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 2% 5%;
  }
`;

export default SecondViewTemplate;
