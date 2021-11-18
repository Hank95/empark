import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Card>
      <h1>Welcome!</h1>
      <p>
        {" "}
        Welcome to the new Eagles Mere Park Association website. This site is
        meant to be a portal for our member so they can stay up to date with
        everthing going on in the park and a good tool for anyone new to the
        park. Behind our secure login we have a directory of all memebers, an
        archive of past park meetings, the annual letter from the president, a
        calendar of upcommign events, and a list of recommended contractors.
      </p>
      <p>
        Please continue to the next page to fill out some contact information
        that you would like other park memebers to have access to. This
        information will stay private and only park members will have access to
        it.{" "}
      </p>
      <Button as={Link} to="/profile-form">
        Continue
      </Button>
    </Card>
  );
};

export default Welcome;

const Card = styled.div`
  width: 55%;
  margin: 5vh auto;
  padding: 25px;
  border-radius: 9px;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.33);
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 75%;
  margin: 0 auto;
  background-color: #294c60;
  display: flex;
  justify-content: center;
  align-self: center;
  color: #fff;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
