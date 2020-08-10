import React, { useState } from "react";
import styled from "styled-components";

import Stars from "../../stars";
import ScrollingTextBox from './ScrollingTextBox';
import UFO from '../../../icons/ufo.svg';
import Planet from '../../../icons/planet.svg';

const AnimationsButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 50;
  
  :hover {
    cursor: pointer;
  }

  p {
    padding: 0px;
    margin: 0px;

  }
`;


const numbies = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const LandingZone = () => {
  
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const toggleAnimations = () => {
    setAnimationsEnabled((prevState) => !prevState);
  }

  return (
    <>
      <AnimationsButton
        onClick={toggleAnimations}
        animationsEnabled={animationsEnabled}
      >
        {animationsEnabled ? (
          <p>Disable animations</p>
        ) : (
          <p>Enable animations</p>
        )}
      </AnimationsButton>
      <SkyGradient1></SkyGradient1>
      <SkyGradient2></SkyGradient2>
      <StarsWrapper animationsEnabled={animationsEnabled} depth={2}>
        {numbies.map((numby, index) => {
          return <Stars key={`stars1:${index}`} />;
        })}
      </StarsWrapper>
      <StarsWrapper animationsEnabled={animationsEnabled} depth={-2}>
        {numbies.map((numby, index) => {
          return <Stars key={`stars1:${index}`} />;
        })}
      </StarsWrapper>
      <StarsWrapper animationsEnabled={animationsEnabled} depth={-8}>
        {numbies.map((numby, index) => {
          return <Stars key={`stars1:${index}`} />;
        })}
      </StarsWrapper>
      <UFOWrapper>
        <UFO />
      </UFOWrapper>
      {/* <PlanetWrapper>
        <Planet />
      </PlanetWrapper> */}
      <IntroInfo>
        <div className="nameWrapper">
          <h1>Johnny Hane</h1>
        </div>
        <TaglineContainer>
          <TaglineElement>
            <ScrollingTextBox
              animationsEnabled={animationsEnabled}
              textList={[
                "full-stack",
                "javascript",
                "css",
                "SEO",
                "node",
                "react",
                "UX + UI",
                "event-driven",
                "python",
                "object-oriented",
                "mobile-first",
                "php",
                "RESTful",
                "redux",
                "git",
                "svg",
                "gatsby",
                "jest",
                "go",
                "WCAG",
              ]}
              textAlign="right"
            />
          </TaglineElement>
          <TaglineElement>
            <ScrollingTextBox
              animationsEnabled={animationsEnabled}
              textList={[
                "developer",
                "legend",
                "rocketeer",
                "wizard",
                "madman",
                "specialist",
                "virtuoso",
                "lunatic",
                "expert",
                "aficionado",
                "connoisseur",
                "master",
                "kinda guy",
              ]}
              textAlign="left"
            />
          </TaglineElement>
        </TaglineContainer>
      </IntroInfo>
      <Spacer />
    </>
  );
};

export default LandingZone;

const SkyGradient1 = styled.div`
  /* background: linear-gradient(black, #130f40); */
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(19, 15, 64, 1));
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -20;
`;

const SkyGradient2 = styled.div`
  /* background: linear-gradient(black, #130f40); */
  background: linear-gradient(rgba(14, 11, 64, 0), rgba(19, 15, 64, 1));
  height: 25vh;
  width: 100vw;
  position: absolute;
  top: 75vh;
  z-index: -10;
`;

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  transition: .2s all;
  transform: translateZ(${props => props.animationsEnabled ? props.depth : '0'}px);
  z-index: -15;
`;

const IntroInfo = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  position: absolute;
  top: 0;

  .nameWrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;

    h1 {
      font-size: 130px;
      font-weight: 200;
      background-color: rgba(5, 4, 18, .5);
      border-radius: 50%;
    }
  }
`;

const Spacer = styled.div`
  height: 100vh;
`;

const TaglineContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const TaglineElement = styled.div`
  display: inline-block;
  width: 50%;
`;

const UFOWrapper = styled.div`
  position: absolute;
  top: 300px;
  right: 50px;
  height: 50px;
  transform: translateZ(-1px);
  transform: rotate(-20deg);
`;

const PlanetWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 60px;
  transform: translateZ(-3px);
`;