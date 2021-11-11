import React from "react";
import styled from "styled-components";

function Page4() {
  return (
    <Container id="Page4">
      <SpaceTitle>
        <h1>O nas</h1>
      </SpaceTitle>
      <SpaceText>
        <h1>
          Już teraz przejmij stery 70-tonowej maszyny i poczuj się jak Kapitan
          najpopularniejszego samolotu pasażerskiego świata. W naszym salonie
          znajduje się najnowocześniejsza w Polsce replika kokpitu Boeinga
          737-800NG! Symulator jest odwzorowany w skali 1:1. Logika wszystkich
          systemów m.in. nawigacyjnych, elektrycznych i pneumatycznych została
          odwzorowana z najwyższą precyzją, aby zwiększyć realizm do granic
          możliwości. Człowiek jest w stanie polecieć dziś praktycznie w dowolny
          zakątek ziemi, jednak tylko nieliczni mogą usiąść za sterami samolotu
          pasażerskiego.{" "}
        </h1>
      </SpaceText>
    </Container>
  );
}

export default Page4;

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  background: #1a191d url("/images/back.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 650px) {
    height: 90vh;
    display: flex;
    align-items: center;
  }
`;

const SpaceTitle = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  h1 {
    font-size: 34px;
  }
`;

const SpaceText = styled.div`
  padding-left: 5px;
  max-width: 90%;
  text-align: center;

  ś h1 {
    font-size: 23px;
    word-spacing: 10px;

    @media (max-width: 650px) {
      font-size: 15px;
      word-spacing: 5px;
    }
  }

  h1:hover {
    cursor: default;
  }
`;
