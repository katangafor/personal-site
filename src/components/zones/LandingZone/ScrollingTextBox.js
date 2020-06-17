/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

var Chance = require("chance");
var chance = new Chance();

const ScrollingTextBox = ({ textList, textAlign, animationsEnabled }) => {

  const [offset, setOffset] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const randoNumber = chance.integer({ min: (textList.length - 1 ) * -1, max: 0});
      const pixelValue = randoNumber * 70;
      setOffset(pixelValue.toString());
    }, 1800)
  }, []);

  return (
    <>
      <ScrollingTextBoxContainer>
        <ScrollingTextBoxContent textAlign={textAlign} offset={offset} animationsEnabled={animationsEnabled}>
          {textList.map((text, index) => {
            return (
              <ScrollingTextElementContainer key={index}>
                <ScrollingTextElement textAlign={textAlign}>
                  <p>{text}</p>
                </ScrollingTextElement>
              </ScrollingTextElementContainer>
            );
          })}
        </ScrollingTextBoxContent>
      </ScrollingTextBoxContainer>
    </>
  );
};

export default ScrollingTextBox;

const ScrollingTextBoxContainer = styled.div`
  overflow: hidden;
  height: 70px;
  z-index: 20;
  @media only screen and (max-width: 750px) {
    color: white;
  }
`;

const ScrollingTextBoxContent = styled("div")`
  background-color: none;
  color: "white";
  position: relative;
  transition: 1s all ease-in-out;
  top: ${props => props.animationsEnabled ? props.offset : '0'}px;
`;

const ScrollingTextElementContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  
`;

const ScrollingTextElement = styled("div")`
  text-align: ${props => props.textAlign};
  margin: 0;
  margin-left: ${props => (props.textAlign === "left" ? "15px" : "0px")};
  height: 70px;
  line-height: 70px;
  display: inline-block;
  width: 100%;
  font-size: 50px;

  p {
    display: inline-block;
    background-color: rgba(11, 9, 38, 1);
    border-radius: 50%;
  }
`;
