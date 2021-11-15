import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/images/logo.svg";
import menu from "./assets/images/menu.svg";
import login from "./assets/images/login.svg";

const LoggedOutNav = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Container>
        <Logo src={logo} alt="Eagles Mere Park Association" />

        <GridItem>
          <Link to="/">Home</Link>
        </GridItem>
        <GridItem>
          <Link to="/about">About</Link>
        </GridItem>
        <GridItem>
          <Link to="/login">Login</Link>
          {/* <img src={login} alt="login" /> */}
        </GridItem>
      </Container>
    </>
  );
};

export default LoggedOutNav;

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const Logo = styled.img`
  padding: 15px;
  height: 75%;
`;

const GridItem = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  width: 100px;
  height: 100%;
  margin: 5px;
  inherits: none;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 30px;
  border-radius: 6px;
  &:hover {
    background-color: #6d9c91;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.33);
  }

  &:hover a {
    filter: brightness(1.2);
    color: white;
  }
  &:last-child {
    margin-left: auto;
    margin-right: 25px;
  }
  @media (max-width: 645px) {
    display: none;
  }
`;

const Burger = styled.img`
  @media (min-width: 645px) {
    display: none;
  }
`;
