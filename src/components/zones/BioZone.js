import React from "react";
import styled from "styled-components";

const BioZone = () => {
  return (
    <BioZoneWrapper>
      <div className="helloWrapper">
        <h2>I'm Johnny</h2>
        <p>
          I make nice-lookin' websites and webapps. For complex apps I usually use React
          + redux and node + express. For simple apps/pages I use Gatbsy, and
          for all my projects I use CSS-in-JS. I love to learn, and I never stop doing it! 
          I've recently been interested in high-performance APIs, and have been experimenting with Go + GraphQL.
        </p>
        <p>
          All of my websites are WCAG/Section 508 compliant, and make liberal
          use of mobile-first design + media queries to ensure a great UX on all
          devices.
        </p>
      </div>
    </BioZoneWrapper>
  );
};

export default BioZone;

const BioZoneWrapper = styled.div`
  /* background-image: linear-gradient(#130f40, #7510f7); */
  /* rgba(19, 15, 64, 1) */
  background-image: linear-gradient(rgba(19, 15, 64, 1), rgba(19, 15, 64, 1));
  padding: 35px 0px 35px 0px;
  color: white;

  .helloWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 40px;
      font-weight: 300;
      margin-top: 30px;
      text-shadow: 2px 2px 4px #000;      
    }

    p {
      max-width: 750px;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    width: 30%;
    color: black;
    text-align: center;
    min-height: 200px;
    border-radius: 5px;
    background-color: #ecf0f1;
  }
`;
