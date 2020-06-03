import React from 'react';
import styled from 'styled-components';

const BioZone = () => {
  return (
    <BioZoneWrapper>
      <h2>I make pretty stuff with shitty code</h2>
    </BioZoneWrapper>
  );
}

export default BioZone;

const BioZoneWrapper = styled.div`
  background-image: linear-gradient(#130f40, #2c3e50);
  height: 100vh;

  color: white;
`;