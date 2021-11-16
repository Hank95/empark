import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser, userInfo } = useAuth();

  console.log(userInfo);
  return (
    <ProfileCard>
      <h1>Profile</h1>

      <UserData>
        <GridItem> Email</GridItem>
        <GridItem>{userInfo.email}</GridItem>
        <GridItem> First Name</GridItem>
        <GridItem>{userInfo.firstName}</GridItem>
        <GridItem> Last Name</GridItem>
        <GridItem>{userInfo.lastName}</GridItem>
        <GridItem> Eagles Mere Phone</GridItem>
        <GridItem>{userInfo.emPhone}</GridItem>
        <GridItem> Home Phone</GridItem>
        <GridItem>{userInfo.homePhone}</GridItem>
        <GridItem>Mobile Phone</GridItem>
        <GridItem>{userInfo.mobilePhone}</GridItem>
        <GridItem>Home Address</GridItem>
        <GridItem>{userInfo.homeAddress1}</GridItem>
        {userInfo.homeAddress2 ? <GridItem>Home Address 2</GridItem> : null}
        {userInfo.homeAddress2 ? (
          <GridItem>{userInfo.homeAddress2}</GridItem>
        ) : null}
        <GridItem>City</GridItem>
        <GridItem>{userInfo.city}</GridItem>
        <GridItem>State</GridItem>
        <GridItem>{userInfo.state}</GridItem>
        <GridItem>Zip Code</GridItem>
        <GridItem>{userInfo.zipCode} </GridItem>
        <GridItem>Park Cottege Name</GridItem>
        <GridItem>{userInfo.parkCottageName}</GridItem>
        <GridItem>Eagles Mere Address</GridItem>
        <GridItem>{userInfo.emAddress}</GridItem>
      </UserData>
      <Button as={Link} to="/profile_form">
        Update Information
      </Button>
    </ProfileCard>
  );
};

export default Profile;

const ProfileCard = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const UserData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const GridItem = styled.div`
  min-height: 25px;
  padding: 4px;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
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
