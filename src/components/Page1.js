import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Fade from "react-reveal/Fade";

function Page1() {
  return (
    <Container id="Page1">
      <Fade left>
        <Title>
          <h1 data-text="Witamy">Witamy na stronie Symulatora Lotu</h1>
        </Title>
        <DownArrow>
          <KeyboardArrowDownIcon fontSize="large" />
        </DownArrow>
      </Fade>
    </Container>
  );
}

export default Page1;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/plane.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  text-align: center;
`;

const Title = styled.div`
  h1 {
    margin-top: 15vh;
    font-size: 30px;
    text-shadow: 1px 1px 2px #3bc1e2;
    font-weight: 600;
  }
  h1:hover {
    text-shadow: 2px 2px 6px #3bc1e2;
    cursor: pointer;
  }
`;

const DownArrow = styled.div`
  height: 60px;
  color: black;
`;

//h1 {
//  padding-top: 15vh;
//  font-size: 30px;
//  font-weight: 540;
//}

/* 
    padding-top: 15vh;
    position: relative;
    font-family: "Montserrat", Arial, sans-serif;
    font-size: calc(10px + 1vw);
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 0.15em #1da9cc;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear forwards;
  }

  h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
  }

  h1::before {
    animation: crack1 2.5s linear forwards;
    -webkit-clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
  }

  h1::after {
    animation: crack2 2.5s linear forwards;
    -webkit-clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
  }

  @keyframes shake {
    5%,
    15%,
    25%,
    35%,
    55%,
    65%,
    75%,
    95% {
      filter: blur(0.018em);
      transform: translateY(0.018em) rotate(0deg);
    }

    10%,
    30%,
    40%,
    50%,
    70%,
    80%,
    90% {
      filter: blur(0.01em);
      transform: translateY(-0.018em) rotate(0deg);
    }

    20%,
    60% {
      filter: blur(0.03em);
      transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%,
    85% {
      filter: blur(0.03em);
      transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
      filter: blur(0.007em);
      transform: translate(0) rotate(-0.5deg);
    }
  }

  @keyframes crack1 {
    0%,
    95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-51%, -48%);
    }
  }

  @keyframes crack2 {
    0%,
    95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-49%, -53%);
    }
    */
