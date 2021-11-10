import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <Nav>
        {currentUser ? (
          <Container>
            <GridItem>
              <Link to="/">Home</Link>
            </GridItem>
            <GridItem>
              <Link to="/about">About</Link>
            </GridItem>
            <GridItem>
              <Link to="/directory">Directory</Link>
            </GridItem>
            <GridItem>
              <Link to="/rules">Park Rules</Link>
            </GridItem>
            <GridItem>
              <Link to="/calendar">Calendar</Link>
            </GridItem>
            <GridItem>
              <Link to="/contractors">Recommended Contractors</Link>
            </GridItem>
          </Container>
        ) : (
          <Container>
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
        )}
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  background-color: green;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const GridItem = styled.div`
  width: 100px;
  inherits: none;
`;

export default NavBar;
