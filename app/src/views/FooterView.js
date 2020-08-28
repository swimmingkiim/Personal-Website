import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FooterViewTemplate from "./FooterViewTemplate";
import Image from "../components/Image";

const FooterView = () => {
  const address = {
    github: "https://github.com/swimmingkiim",
    blog: "https://velog.io/@swimmingkiim",
    email: "swimmingkiim@gmail.com",
  };

  return (
    <FooterViewTemplate
      icons={
        <>
          <AContainer href={address.github} target="_blank">
            <Image
              source="https://raw.githubusercontent.com/swimmingkiim/Personal-Website/9584fd3af810940d2bf799e6cf00baa0fc490d14/app/assets/github.svg"
              w="2em"
            />
          </AContainer>
          <AContainer href={address.blog} target="_blank">
            <Image
              source="https://raw.githubusercontent.com/swimmingkiim/Personal-Website/9584fd3af810940d2bf799e6cf00baa0fc490d14/app/assets/BLOG.svg"
              w="2em"
            />
          </AContainer>
        </>
      }
      email={address.email}
      copyright="Copyright 2020. Sooyoung Kim. All rights reserved."
    />
  );
};

const AContainer = styled.a`
  width: fit-content;
  margin: 2%;
`;

export default FooterView;
