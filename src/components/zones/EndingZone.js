import React from 'react';
import styled from 'styled-components';

import GreenHill from '../../icons/green-hill.svg';
import Tree1 from '../../icons/tree-1.svg';
import Skyline from '../../icons/skyline.svg';
import Balloons from '../../icons/balloons.svg'

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  h2 {
    font-weight: 300;
    font-size: 50px;
  }

  a {
    color: white;
    h3 {
      color: white;
    }
  }
`;


const EndingZone = () => {

  return (
    <EndingZoneWrapper>
      <StyledSkyline />
      <StyledBalloons />
      <GreenHillWrapper>
        <GreenHill />
      </GreenHillWrapper>
      <TreeWrapper>
        <StyledTree1 height={70} y={15} x={0} fill="#e67e22" />
        <StyledTree1 height={70} y={12} x={-90} fill="#e67e22" />
        <StyledTree1 height={70} y={30} x={30} fill="#e74c3c" />
        <StyledTree1 height={70} y={3} x={-4} fill="#f1c40f" />
        <StyledTree1 height={70} y={10} x={12} fill="#e74c3c" />
        <StyledTree1 height={70} y={10} x={82} fill="#d35400" />
        <StyledTree1 height={70} y={0} x={-2} fill="#e74c3c" />
        <StyledTree1 height={70} y={30} x={30} fill="#f39c12" />
        <StyledTree1 height={70} y={3} x={-4} fill="#d35400" />
        <StyledTree1 height={70} y={10} x={12} fill="#e67e22" />
      </TreeWrapper>
      <ContactWrapper>
        <h2>Hit me up!</h2>
        <h3>johnnykane@gmail.com</h3>
        <a href="https://github.com/katangafor" target="_blank">
          <h3>Github</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/johnny-hane-5805171a2/"
          target="_blank"
        >
          <h3>LinkedIn</h3>
        </a>
      </ContactWrapper>
    </EndingZoneWrapper>
  );
}

export default EndingZone;

const EndingZoneWrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(#130e40, #c0392b);
  position: relative;
  overflow-y: hidden;
  color: white;
`;

const GreenHillWrapper = styled.div`
  width: 100vw;
  position: absolute;
  height: 200px;
  bottom: -100px;
`;

const TreeWrapper = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
`;

const StyledTree1 = styled(Tree1)`
  position: relative;

  @media only screen and (max-width: 700px) {
    height: ${props => props.height/1.5}px;
    bottom: ${props => props.y/1.5 - 35}px;
    left: ${props => props.x/1.5}px;
  }

  @media only screen and (min-width: 700px) {
    height: ${props => props.height}px;
    bottom: ${props => props.y}px;
    left: ${props => props.x}px;
  }

  .tree-fill {
    fill: ${props => props.fill};
  }
`;

const StyledSkyline = styled(Skyline)`
  position: absolute;
  bottom: 50px;
  right: 90px;
  height: 220px;

  @media only screen and (max-width: 800px) {
    height: 150px;
  }
`;

const StyledBalloons = styled(Balloons)`
  position: absolute;
  top: 330px;
  left: -200px;
  height: 190px;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;