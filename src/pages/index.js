import React, { useState } from "react";
import styled from "styled-components";

import LandingZone from '../components/zones/LandingZone/LandingZone';
import BioZone from '../components/zones/BioZone';

const HeightStretcher = styled.div`
  min-height: 150vh;
`;

const IndexPage = () => {
  const [offsetZ, setOffsetZ] = useState(0);

  return (
    <ParallaxContainer>
      <LandingZone />
      <BioZone />
      <HeightStretcher></HeightStretcher>
    </ParallaxContainer>
  );
};

export default IndexPage;

const ParallaxContainer = styled.div`
  height: 100vh;
  width: 100vw;
  perspective: 8px;
  perspective-origin: 50%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const SkyGradient1 = styled.div`
  background-image: linear-gradient(black, #130f40);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -10;
`;

const StarsWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const StarsWrapper1 = styled.div`
  position: absolute;
  top: 0;
  transform: translateZ(2px);
`;

const StarsWrapper2 = styled.div`
  position: absolute;
  top: 0;
  transform: translateZ(-2px);
  width: 200%;
`;

const StarsWrapper3 = styled.div`
  position: absolute;
  top: 0;
  transform: translateZ(-8px);
  width: 200%;
`;