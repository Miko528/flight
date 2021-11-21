import React, { useState } from "react";
import styled from "styled-components";
import FlightIcon from "@material-ui/icons/Flight";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-scroll';

function Header() {
  const [burger, setBurger] = useState(false);
  <MenuIcon fontSize="large" />;
  return (
    <Container>
      <Link
        activeClass="active"
        to="Page1"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        <FlightIcon />
      </Link>

      <Menu>
        <Link
          activeClass="active"
          to="Page1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Witamy
        </Link>
        <Link
          activeClass="active"
          to="Page2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Oferta
        </Link>
        <Link
          activeClass="active"
          to="Page3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Nowości
        </Link>
        <Link
          activeClass="active"
          to="Page4"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          O nas
        </Link>
        <Link
          activeClass="active"
          to="Page3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Galeria
        </Link>
        <Link
          activeClass="active"
          to="Page3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Kontakt
        </Link>
      </Menu>
      <Open onClick={() => setBurger(true)} />
      <BurgerNav show={burger}>
        <CloseDiv>
          <Close onClick={() => setBurger(false)} />
        </CloseDiv>

        <Link
          onClick={() => setBurger(false)}
          activeClass="active"
          to="Page1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <li>Witamy</li>
        </Link>

        <Link
          onClick={() => setBurger(false)}
          activeClass="active"
          to="Page2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <li>Oferta</li>
        </Link>
        <Link
        onClick={() => setBurger(false)}
        to="/Page3"
        >
        <li>Nowości</li>
        </Link>

        <Link
          onClick={() => setBurger(false)}
          activeClass="active"
          to="Page3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <li>O nas</li>
        </Link>

        <Link
          onClick={() => setBurger(false)}
          activeClass="active"
          to="Page3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <li> Galeria</li>
        </Link>

        <Link
          onClick={() => setBurger(false)}
          activeClass="active"
          to="Page3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <li>Kontakt</li>
        </Link>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  font-size: 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  a {
    font-weight: 550;
    padding: 0 10px;
    background: linear-gradient(
      to right,
      royalblue,
      royalblue 50%,
      #80e3fc 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
  }

  a:hover {
    background-position: 0 100%;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const Open = styled(MenuIcon)`
  cursor: pointer;
  display: none !important;
  @media (max-width: 650px) {
    display: flex !important;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
`;

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;