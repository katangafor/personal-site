import React, { useState } from "react";
import styled from "styled-components";

import Stars from "../../stars";
import ScrollingTextBox from './ScrollingTextBox';

const numbies = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const LandingZone = () => {
  // const [offsetZ, setOffsetZ] = useState(0);
  // const [numbies, setNumbies] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

  return (
    <>
      <SkyGradient1></SkyGradient1>
      <SkyGradient2></SkyGradient2>
      <StarsWrapper1>
        {numbies.map((numby, index) => {
          return <Stars key={`stars1:${index}`} />;
        })}
      </StarsWrapper1>
      <StarsWrapper2>
        {numbies.map((numby, index) => {
          return <Stars key={`stars2:${index}`} />;
        })}
      </StarsWrapper2>
      <StarsWrapper3>
        {numbies.map((numby, index) => {
          return <Stars key={`stars3:${index}`} />;
        })}
      </StarsWrapper3>
      <IntroInfo>
        <div className="nameWrapper">
          <h1>Johnny Hane</h1>
        </div>
        <TaglineContainer>
          <TaglineElement>
            <ScrollingTextBox
              // textList={["buddy", "stinky", "dooby", "silly", "smelly", "beepy"]}
              textList={["front-end", "javascript", "css", "SEO", "styled-components", "node", "react", "event-driven"]}
              textAlign="right"
            />
          </TaglineElement>
          <TaglineElement>
            <ScrollingTextBox
              textList={["developer", "legend", "rocketeer", "wizard", "madman", "specialist", "virtuoso", "lunatic", "expert"]}
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

const StarsWrapper1 = styled.div`
  position: absolute;
  top: 0;
  transform: translateZ(2px);
  z-index: -15;
`;

const StarsWrapper2 = styled.div`
  position: absolute;
  top: 0;
  transform: translateZ(-2px);
  z-index: -15;
`;

const StarsWrapper3 = styled.div`
  position: absolute;
  top: 0;
  transform: translateZ(-8px);
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