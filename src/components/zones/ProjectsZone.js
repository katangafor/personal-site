import React from "react";
import styled from "styled-components";

import ReactIcon from "../../icons/react-icon.svg";
import GatsbyIcon from "../../icons/gatsby-icon.svg";
import HTML5Icon from "../../icons/html5.svg";
import CSS3Icon from "../../icons/css3.svg";
import LatexIcon from "../../icons/latex-icon.svg";
import AphroditeIcon from '../../icons/aphrodite.svg';

const ProjectsZone = () => {
  return (
    <ProjectsZoneWrapper>
      <Project>
        <a href="http://openstudy.club/">
          <h2>OpenStudy </h2>
        </a>
        <h3>The project</h3>
        <p>
          To create a community-powered platform for students and educators to
          collaborate on (and get help with) textbook problems. Requires a
          robust voting and feedback system that incentivizes collaboration and
          incremental improvements to discussions.
        </p>
        <div className="project-wrapper">
          <div className="project-info">
            <h3>Interesting Problems</h3>
            <ul>
              <li>
                User-input areas must be able to parse and tokenize text based
                on delimiters to break input into text components, inline math
                components, and block math components
              </li>
              <li>
                Textbooks and textbook problems must be organized, error-free
                and duplicate-free, despite all information being provided by
                users
              </li>
              <li>
                Users must be able to add text, LaTeX (math typesetting), and
                images to the answers. Those answers must also be editable and
                extendable by other users.
              </li>
            </ul>
            <h3>Technologies used</h3>
            <HTML5IconWrapper>
              <HTML5Icon />
            </HTML5IconWrapper>
            <CSS3IconWrapper>
              <CSS3Icon />
            </CSS3IconWrapper>
            <ReactIconWrapper>
              <ReactIcon />
            </ReactIconWrapper>
            <LatexIconWrapper>
              <LatexIcon />
            </LatexIconWrapper>
          </div>
          <div className="images-wrapper">
            <img
              src={require("../../images/study-laptop.png")}
              className="laptop-image"
            />
            <img
              src={require("../../images/study-phone.png")}
              className="phone-image"
            />
          </div>
        </div>
      </Project>
      <Project>
        <a href="http://bethesdabikedoctor.com/">
          <h2>Bethesda Bike Doctor</h2>
        </a>
        <h3>The project</h3>
        <p>
          Create an eye-catching landing page that funnels users towards the
          contact form, and construct an authentication-protected page where the
          business owners/employees can view and manage clients' information.
        </p>
        <div className="project-wrapper">
          <div className="project-info">
            <h3>Interesting Problems</h3>
            <ul>
              <li>
                The uniqueness of the business requires the website to both
                explain the business <em>and</em> sell them on a service
              </li>
              <li>Site must load extremely fast and be optimized for SEO</li>
              <li>
                Users must be funneled towards contact information or the
                request repair form
              </li>
            </ul>
            <h3>Technologies used</h3>
            <HTML5IconWrapper>
              <HTML5Icon />
            </HTML5IconWrapper>
            <CSS3IconWrapper>
              <CSS3Icon />
            </CSS3IconWrapper>
            <ReactIconWrapper>
              <ReactIcon />
            </ReactIconWrapper>
            <GatsbyIconWrapper>
              <GatsbyIcon />
            </GatsbyIconWrapper>
          </div>
          <div className="images-wrapper">
            <img
              src={require("../../images/dr-laptop.png")}
              className="laptop-image"
            />
            <img
              src={require("../../images/dr-phone.png")}
              className="phone-image"
            />
          </div>
        </div>
      </Project>
      <Project>
        <a href="http://bethesdabikedoctor.com/">
          <h2>Elisa Darby Photography</h2>
        </a>
        <h3>The project</h3>
        <p>
          Create a portfolio/scheduling website for a photography studio based
          in LA. Site must be designed to showcase beautiful photography on
          every page, and convince potential clients' of the studio's value and
          professionalism.
        </p>
        <div className="project-wrapper">
          <div className="project-info">
            <h3>Interesting Problems</h3>
            <ul>
              <li>
                Site must simultaneously showcase large, high-resolution
                photography <em>and</em> information about the studio
              </li>
              <li>
                Portfolio page must fit photos together in a justified grid,
                regardless of size
              </li>
            </ul>
            <h3>Technologies used</h3>
            <HTML5IconWrapper>
              <HTML5Icon />
            </HTML5IconWrapper>
            <CSS3IconWrapper>
              <CSS3Icon />
            </CSS3IconWrapper>
            <ReactIconWrapper>
              <ReactIcon />
            </ReactIconWrapper>
            <AphroditeIconWrapper>
              <AphroditeIcon />
            </AphroditeIconWrapper>
          </div>
          <div className="images-wrapper">
            <img
              src={require("../../images/darby-laptop.png")}
              className="laptop-image"
            />
            <img
              src={require("../../images/darby-phone.png")}
              className="phone-image"
            />
          </div>
        </div>
      </Project>
    </ProjectsZoneWrapper>
  );
};

export default ProjectsZone;

const ProjectsZoneWrapper = styled.div`
  background-image: linear-gradient(rgba(19, 15, 64, 1), rgba(19, 15, 64, 1));
  min-height: 100vh;
  padding-top: 30px;
  margin-bottom: 0;
`;

const Project = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 0px;
  padding-bottom: 100px;
  color: white;

  h2 {
    font-size: 40px;
    color: white;
    display: inline-block;
    text-decoration: underline;
    :hover {
      color: gray;
      cursor: pointer;
    }
  }

  h3 {
    font-size: 33px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 45px;
    max-width: 750px;
  }

  ul {
    margin-bottom: 45px;
  }

  .project-wrapper {
    @media only screen and (min-width: 1000px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .project-info {
    @media only screen and (max-width: 1000px) {
    }

    @media only screen and (min-width: 1000px) {
      flex-basis: 50%;
      flex-grow: 0;
      flex-shrink: 1;
    }
  }

  .images-wrapper {
    flex-basis: 50%;
    margin-top: 30px;
    position: relative;

    @media only screen and (max-width: 1000px) {
      margin-left: 20px;
    }

    @media only screen and (min-width: 1000px) {
      margin-left: 40px;
    }
  }

  .laptop-image {
    @media only screen and (min-width: 1000px) {
      width: 550px;
      position: absolute;
      bottom: 0;
    }
  }

  .phone-image {
    position: absolute;
    left: -20px;
    bottom: 0px;
    @media only screen and (max-width: 1000px) {
      width: 140px;
    }
    @media only screen and (min-width: 1000px) {
      width: 100px;
    }
  }
`;

const ReactIconWrapper = styled.div`
  margin-right: 10px;
  height: 100px;
  display: inline-block;
  .icon-background {
    fill: #140f41;
    transition: 0.2s all;
  }
  .react__shape {
    fill: white;
    transition: 0.2s all;
  }
  :hover {
    cursor: pointer;
    .icon-background {
      fill: white;
    }
    .react__shape {
      fill: #61dbfb;
    }
  }
`;

const GatsbyIconWrapper = styled.div`
  margin-right: 10px;
  height: 100px;
  display: inline-block;
  .icon-background {
    fill: #140f41;
    transition: 0.2s all;
  }
  .gatsby__shape {
    fill: white;
    transition: 0.2s all;
  }
  :hover {
    cursor: pointer;
    .icon-background {
      fill: white;
    }
    .gatsby__shape {
      fill: #663399;
    }
  }
`;

const HTML5IconWrapper = styled.div`
  margin-right: 10px;
  height: 100px;
  display: inline-block;

  .icon-background {
    fill: #140f41;
    transition: 0.2s all;
  }

  .left-and-border {
    fill: white;
    transition: 0.2s all;
  }

  .right {
    fill: white;
    transition: 0.2s all;
  }

  .left-number {
    fill: #140f41;
    transition: 0.2s all;
  }

  .right-number {
    fill: #140f41;
    transition: 0.2s all;
  }

  .text {
    fill: white;
    transition: 0.2s all;
  }

  :hover {
    cursor: pointer;
    .icon-background {
      fill: white;
    }

    .left-and-border {
      fill: #e44d26;
    }

    .right {
      fill: #f16529;
    }

    .left-number {
      fill: #ebebeb;
    }

    .right-number {
      fill: #ffffff;
    }

    .text {
      fill: black;
    }
  }
`;

const CSS3IconWrapper = styled.div`
  margin-right: 10px;
  height: 100px;
  display: inline-block;

  .icon-background {
    fill: #140f41;
    transition: 0.2s all;
  }

  .left-and-border {
    fill: white;
    transition: 0.2s all;
  }

  .right {
    fill: white;
    transition: 0.2s all;
  }

  .left-number {
    fill: #140f41;
    transition: 0.2s all;
  }

  .right-number {
    fill: #140f41;
    transition: 0.2s all;
  }

  .text {
    fill: white;
    transition: 0.2s all;
  }

  :hover {
    cursor: pointer;
    .icon-background {
      fill: white;
    }

    .left-and-border {
      fill: #264de4;
    }

    .right {
      fill: #2965f1;
    }

    .left-number {
      fill: #ebebeb;
    }

    .right-number {
      fill: #ffffff;
    }

    .text {
      fill: black;
    }
  }
`;

const LatexIconWrapper = styled.div`
  height: 100px;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;

  .icon-background {
    fill: #140f41;
    transition: 0.2s all;
  }

  .latex__shape {
    fill: white;
    transition: 0.2s all;
  }

  :hover {
    .icon-background {
      fill: white;
    }

    .latex__shape {
      fill: #008080;
    }
  }
`;

const AphroditeIconWrapper = styled.div`
  height: 100px;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;

  .icon-background {
    fill: #140f41;
    transition: 0.2s all;
  }

  .aphrodite-text {
    fill: white;
    transition: 0.2s all;
  }

  :hover {
    .icon-background {
      fill: white;
    }

    .aphrodite-text {
      fill: #8e44ad;
    }
  }
`;