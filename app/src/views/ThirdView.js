import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ThirdViewTemplate from "./ThirdViewTemplate";
import Card from "../components/Card";
import Button from "../components/Button";
import Image from "../components/Image";
import cardInfo from "../../data/cards";

const ThirdView = () => {
  const [focusedItemId, setFocusedItemId] = useState(1);

  const onLeftClick = () =>
    setFocusedItemId((prev) => (prev > 1 ? prev - 1 : 1));
  const onRightClick = () =>
    setFocusedItemId((prev) =>
      prev < cardInfo.length ? prev + 1 : cardInfo.length
    );

  return (
    <ThirdViewTemplate
      cards={
        <>
          {cardInfo.map((info) => {
            return (
              <Card
                key={`card-${info.id}`}
                info={info}
                isFocused={info.id === focusedItemId}
              />
            );
          })}
        </>
      }
      buttons={
        <>
          <Button
            onClickFunc={onLeftClick}
            content={<Image source="/app/assets/arrow-left.svg" w="100%" />}
          />
          <Button
            onClickFunc={onRightClick}
            content={<Image source="/app/assets/arrow-right.svg" w="100%" />}
          />
        </>
      }
      focusedItemId={focusedItemId}
      numberOfCards={cardInfo.length}
    />
  );
};

export default ThirdView;
