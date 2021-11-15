import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import userIcon from "./assets/images/userCircle.svg";
import logo from "./assets/images/logo.svg";
import arrow from "./assets/images/arrow.svg";

const LoggedInNav = () => {
  const { logout } = useAuth();
  const [profileBoolean, setProfileBoolean] = useState(false);

  const handleClick = () => {
    setProfileBoolean(false);
  };

  return (
    <>
      <CenterLogo src={logo} alt="Eagles Mere Park Association" />
      <Container>
        <Logo src={logo} alt="Eagles Mere Park Association" />
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
        <GridItem onClick={() => setProfileBoolean(!profileBoolean)}>
          {profileBoolean ? (
            <>
              <img src={arrow} alt="arrow" />
              <Profile>
                <ProfileItem as={Link} to="/profile">
                  {/* <Link to="/profile">Profile</Link> */}
                  Profile
                </ProfileItem>
                <ProfileItem onClick={() => logout()}>Log out</ProfileItem>
              </Profile>
            </>
          ) : (
            <img src={userIcon} alt="user" />
          )}
        </GridItem>
      </Container>
    </>
  );
};

export default LoggedInNav;

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media (max-width: 1075px) {
    justify-content: center;
    height: 10%;
  }
`;
const Logo = styled.img`
  padding: 15px;
  height: 75%;
  @media (max-width: 1075px) {
    display: none;
  }
`;
const CenterLogo = styled.img`
  margin: auto;
  padding: 15px;
  height: 75px;
  @media (min-width: 1075px) {
    display: none;
  }
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
  &:hover {
    cursor: pointer;
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
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  right: 50px;
  background-color: white;
  transition: 500ms;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.33);
  @media (max-width: 1075px) {
    top: 155px;
  }
`;
const ProfileItem = styled.div`
  width: 100px;
  padding: 10px;
  /* background-color: rgb(82, 121, 111); */
  &:hover {
    background-color: rgb(208, 207, 207);
  }
`;
