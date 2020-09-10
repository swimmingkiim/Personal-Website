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
      {buttons}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #3481b4, #1d4e6f);
  position: relative;

  & > button {
    position: absolute;
    z-index: 3;
    transform: translateY(-50%);
  }

  & > button.left {
    top: 50%;
    left: 1%;
  }
  & > button.right {
    top: 50%;
    right: 1vw;
  }
`;

const CardsContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 30%;
  z-index: 1;
  transition: transform 1s;
  transform: translateX(
    ${(props) =>
      ((-1 * 100) / props.numberOfCards) * (props.focusedItemId - 1) * 1.0025}%
  );
  @media only screen and (max-width: 768px) {
    left: 13%;
  }
`;
export default ThirdViewTemplate;
