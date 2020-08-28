import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import SecondViewTemplate from "./SecondViewTemplate";
import Bubble from "../components/Bubble";
import Image from "../components/Image";
import BulletList from "../components/BulletLIst";
import resumeInfo from "../../data/resume";

const makeRandomNumber = (min, max, numberOfBubbles) => {
  return Array(numberOfBubbles)
    .fill(0)
    .map((temp, i) => Math.floor(Math.random() * (max - min) + min));
};

const SecondView = () => {
  const numberOfBubbles = 20;
  const r = makeRandomNumber(5, 25, numberOfBubbles);
  const cx = makeRandomNumber(50, window.innerWidth - 50, numberOfBubbles);
  const cy = makeRandomNumber(
    window.innerHeight * 0.6 - 100,
    window.innerHeight * 0.6,
    numberOfBubbles
  );

  return (
    <SecondViewTemplate
      bubbles={
        <>
          {Array(numberOfBubbles)
            .fill(0)
            .map((temp, i) => {
              return (
                <Bubble key={`bubble-${i}`} r={r[i]} cx={cx[i]} cy={cy[i]} />
              );
            })}
        </>
      }
      fish={
        <Image
          source="https://raw.githubusercontent.com/swimmingkiim/Personal-Website/9584fd3af810940d2bf799e6cf00baa0fc490d14/app/assets/colorful-fish.svg"
          classString="fish-move"
        />
      }
      resume={<BulletList InfoArray={resumeInfo} />}
    />
  );
};

export default SecondView;
