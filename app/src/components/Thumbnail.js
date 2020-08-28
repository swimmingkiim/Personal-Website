import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./Image";

const Thumbnail = ({ link, thumbnail }) => {
  return (
    <ThumbnailContainer href={link} target="_blank">
      <Image source={thumbnail} w="100%" />
    </ThumbnailContainer>
  );
};

const ThumbnailContainer = styled.a`
  width: 100%;
  height: fit-content;
  position: relative;
  z-index: 3;
`;

export default Thumbnail;
