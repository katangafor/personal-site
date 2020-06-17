import React from 'react';
import styled from 'styled-components';

import GreenHill from '../../icons/green-hill.svg';

const EndingZone = () => {

  return (
    <EndingZoneWrapper >
      <GreenHillWrapper>
        <GreenHill />
      </GreenHillWrapper>
    </EndingZoneWrapper>
  )
}

export default EndingZone;

const EndingZoneWrapper = styled.div`
  min-height: 80vh;
  background-image: linear-gradient(#130e40, #01bfff);
  position: relative;
  overflow-y: hidden;
`;

const GreenHillWrapper = styled.div`
  width: 100vw;
  position: absolute;
  height: 200px;
  bottom: -100px;
`;