import React from "react";
import styled from "styled-components";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Fade from "react-reveal/Fade";

function Page2() {
  return (
    <Container id="Page2">
      <Fade left>
        <Box>
          <SpaceImg>
            <FlightTakeoffIcon style={{ fontSize: 70 }} />
          </SpaceImg>
          <SpaceText>
            <h1>Zarezerwuj Lot już dzisiaj dzięki jednemu kliknięciu</h1>
            <button type="button">Zarezerwuj Lot</button>
          </SpaceText>
        </Box>
        <Box>
          <SpaceImg>
            <CreditCardIcon style={{ fontSize: 70 }} />
          </SpaceImg>
          <SpaceText>
            <h1>Kup komuś wymarzony prezent</h1>
            <button type="button">Kup voucher</button>
          </SpaceText>
        </Box>
      </Fade>
    </Container>
  );
}

export default Page2;

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background: #1a191d url("/images/back.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-evenly;
  padding-right: 50px;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: space-around;
    padding-right: 30px;
  }
`;

const Box = styled.div`
  display: flex;
  padding: 10px;

  @media (max-width: 650px) {
    transform: scale(0.8);
    padding-right: 0px;
  }
`;

const SpaceImg = styled.div``;

const SpaceText = styled.div`
  padding-left: 10px;

  h1 {
    padding-bottom: 10px;
  }

  button {
    background: transparent;
    border: 1px solid #3bc1e2;
    border-radius: 20px;
    height: 50px;
    width: 300px;
  }

  button:hover {
    background-color: #3bc1e2;
    color: black;
    cursor: pointer;
  }
`;
