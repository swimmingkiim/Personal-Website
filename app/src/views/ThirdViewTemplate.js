import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ThirdViewTemplate = ({
  cards,
  buttons,
  numberOfCards,
  focusedItemId,
}) => {
  return (
    <Container>
      <CardsContainer
        focusedItemId={focusedItemId}
        numberOfCards={numberOfCards}
      >
        {cards}
      </CardsContainer>
      <ButtonsContainer>{buttons}</ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #3481b4, #1d4e6f);
  position: relative;
`;

const CardsContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 10%;
  z-index: 1;
  transition: transform 1s;
  transform: translateX(
    ${(props) =>
      ((-1 * 100) / props.numberOfCards) * (props.focusedItemId - 1) * 1.0025}%
  );

  // @media only screen and (max-width: 768px) {
  //   left: 5%;
  // }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 45%;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ThirdViewTemplate;
