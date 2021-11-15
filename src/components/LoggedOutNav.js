import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/images/logo.svg";

const LoggedOutNav = () => {
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
  width: 100px;
  height: 100%;
  margin: 5px;
  inherits: none;
  justify-content: center;
  align-items: center;
  &:hover a {
    filter: brightness(1.2);
    color: white;
  }
  &:last-child {
    margin-left: auto;
    margin-right: 25px;
    padding: 8px;
    &:hover a {
      border-radius: 6px;
      background-color: rgb(208, 207, 207);

      color: black;
    }
  }
`;
