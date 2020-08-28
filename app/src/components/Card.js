import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "./Title";
import Thumbnail from "./Thumbnail";
import Text from "./Text";

const Card = ({ info, isFocused }) => {
  const { title, thumbnail, skills, comment, source } = info;
  return (
    <CardContainer isFocused={isFocused}>
      <Title text={title} size="middle" />
      <Thumbnail thumbnail={thumbnail} link={source} />
      <Text textContent={`Used Skills : ${skills}`} />
      <Text textContent={`Comment : \n${comment}`} />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 70vh;
  min-height: 55vh;
  padding: 2%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  border-radius: 0.5em;
  box-shadow: 12px 12px 2px 1px rgb(65, 65, 70);
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 1s;

  transform: ${(props) => (props.isFocused ? "scale3d(1.3, 1.3, 1.3)" : null)};

  & > * {
    margin-bottom: 0.5em;
  }

  @media only screen and (max-width: 1024px) {
    width: 70vw;
  }
`;

export default Card;
