import React, { useState, useEffect } from "react";
import styled from "styled-components";

import StarsSVG from '../icons/stars.svg';

const randomInteger = () => {
  const randomDecimal = Math.random();
  const randomNumber = randomDecimal * 100;
  const randomInt = Math.round(randomNumber);
  return randomInt;
};

const Stars = () => {
  // offsets are an x and y for each star, so an array of arrays
  const [offsets, setOffsets] = useState([[], [], [], []]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log('making stars');
    const tempOffsets = [[], [], [], []];
    for (let i = 0; i < 4; i++) {
      tempOffsets[i][0] = randomInteger();
      tempOffsets[i][1] = randomInteger();
    }
    setOffsets(tempOffsets);
    setReady(true);
  }, []);

  return <StyledStars offsets={offsets} ready={ready} />;
};

export default Stars;

const StyledStars = styled(StarsSVG)`
  height: 250px;
  width: 250px;
  transition: 0.7s opacity ease-in-out;
  opacity: ${props => (props.ready ? "1" : "0")};
  .star1 {
    transform: ${props =>
      `translate(${props.offsets[0][0]}px, ${props.offsets[0][1]}px)`};
  }
  .star2 {
    transform: ${props =>
      `translate(${props.offsets[1][0]}px, ${props.offsets[1][1]}px)`};
  }
  .star3 {
    transform: ${props =>
      `translate(${props.offsets[2][0]}px, ${props.offsets[2][1]}px)`};
  }
  .star4 {
    transform: ${props =>
      `translate(${props.offsets[3][0]}px, ${props.offsets[3][1]}px)`};
  }
`;
