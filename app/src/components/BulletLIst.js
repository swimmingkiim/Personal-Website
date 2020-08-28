import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "./Title";

const BulletList = ({ InfoArray }) => {
  return (
    <Ul>
      {InfoArray.map(({ title, content }) => {
        return (
          <Li key={`bullet-${title}`}>
            <Title text={title} size="middle" color="#4c4c4c" />
            <SubUl>
              {content !== [] &&
                content.map((text, i) => (
                  <Li key={`${title}-text-${i}`}>
                    <Title text={text} size="small" color="#4c4c4c" />
                  </Li>
                ))}
            </SubUl>
          </Li>
        );
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  width: 100%;
  padding-left: 5%;
  list-style-type: none;

  & > li:before {
    content: "";
    display: inline-block;
    width: 3em;
    height: 3em;
    background-image: url("/app/assets/shell-1.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(-150%) translateY(125%);
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`;

const Li = styled.li`
  display: block;
  width: 100%;
  heigth: fit-content;

  & + & {
    margin-top: 2%;
  }
`;

const SubUl = styled.ul`
  width: 100%;
  height: 100%;
  padding-left: 5%;
  list-style-type: none;

  & > li:before {
    content: "";
    display: inline-block;
    width: 2em;
    height: 2em;
    background-image: url("/app/assets/shell-2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(-150%) translateY(125%);
  }
`;

export default BulletList;
