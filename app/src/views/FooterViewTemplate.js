import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FooterViewTemplate = ({ icons, email, copyright }) => {
  return (
    <Container>
      <IconsContainer>{icons}</IconsContainer>
      <Text>Contact : {email}</Text>
      <Text>{copyright}</Text>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 100%;
  padding: 2.5% 30%;
  background-color: #1d4e6f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    padding: 1%;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const IconsContainer = styled.div`
  width: 100%;
  min-height: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 120%;
  color: white;
  letter-spacing: 0.1em;
  margin-top: 2%;

  @media only screen and (max-width: 1024px) {
    font-size: 200%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 100%;
    letter-spacing: 0;
  }
`;

export default FooterViewTemplate;
