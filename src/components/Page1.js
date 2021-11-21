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
    cursor: default;
  }
`;

const DownArrow = styled.div`
  height: 60px;
  color: black;
`;