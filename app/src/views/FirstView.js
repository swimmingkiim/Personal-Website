import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import FirstViewTemplate from "../views/FirstViewTemplate";
import Wave from "../components/Wave";
import Title from "../components/Title";

const FirstView = () => {
  const [waveYPoint, setWaveYPoint] = useState(screen.height * 0.6);
  const [direction, setDirection] = useState("up");
  const startYPoint = screen.height * 0.6;
  const groundYPoint = screen.height;
  const radius = 50;
  const topPoint = startYPoint + radius;
  const bottomPoint = startYPoint - radius;

  const getDString = (y) => {
    return `M 0 ${startYPoint} Q ${window.innerWidth * 0.25 * 0.5} ${y} ${
      window.innerWidth * 0.25
    } ${startYPoint} T ${window.innerWidth * 0.5} ${startYPoint} T ${
      window.innerWidth * 0.75
    } ${startYPoint} T ${window.innerWidth} ${startYPoint} L ${
      window.innerWidth
    } ${groundYPoint} L 0 ${groundYPoint} L 0 ${startYPoint} Z`;
  };

  const moveCurvePoint = (currentY) => {
    if (direction === "up") {
      if (currentY === topPoint) {
        setDirection("down");
        setWaveYPoint(waveYPoint - 1);
      } else setWaveYPoint(waveYPoint + 1);
    } else {
      if (currentY === bottomPoint) {
        setDirection("up");
        setWaveYPoint(waveYPoint + 1);
      } else setWaveYPoint(waveYPoint - 1);
    }
    return "running";
  };

  useInterval(() => setWaveYPoint((prev) => moveCurvePoint(prev)), 30);

  return (
    <FirstViewTemplate
      header={
        <>
          <Title text="Swimming" size="big" />
          <Title text="Pool" size="big" />
        </>
      }
      wave={<Wave dString={getDString(waveYPoint)} />}
    />
  );
};

export default FirstView;
