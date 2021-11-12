import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import userIcon from "./assets/images/userCircle.svg";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div>
      <Nav>
        {currentUser ? (
          <>
            <Container>
              <Logo>Eagle Mere Park Association</Logo>
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
                {/* <Button as={Link} to="/profile">
                User Pofile
              </Button>
              <Button onClick={logout}>Log out</Button> */}
                <Image src={userIcon} alt="user" />
              </GridItem>
            </Container>
          </>
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
  /* position: relative;
  top: 0;
  left: 0; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
const Logo = styled.div`
  height: 100%;
  font-family: "Times New Roman", Times, serif;
`;
const GridItem = styled.div`
  width: 100px;
  inherits: none;
  &:hover {
    background-color: beige;
  }
`;
const UserControl = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
const Image = styled.img`
  color: aqua;
`;

export default NavBar;
