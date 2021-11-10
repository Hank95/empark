import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
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
            <GridItem>
              <Button onClick={logout}>Log out</Button>
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
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  background-color: rgb(58, 142, 216);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default NavBar;
