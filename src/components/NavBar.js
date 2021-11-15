import React from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";

const NavBar = () => {
  const { currentUser } = useAuth();

  return <Nav>{currentUser ? <LoggedInNav /> : <LoggedOutNav />}</Nav>;
};

const Nav = styled.nav`
  width: 100%;
  background-color: rgb(82, 121, 111);
`;

export default NavBar;
