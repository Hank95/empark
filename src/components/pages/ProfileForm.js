import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { getDoc, doc, setDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const { userInfo, setUserInfo } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: userInfo.firstName || "",
    lastName: userInfo.lastName || "",
    emPhone: userInfo.emPhone || "",
    homePhone: userInfo.homePhone || "",
    mobilePhone: userInfo.mobilePhone || "",
    homeAddress1: userInfo.homeAddress1 || "",
    homeAddress2: userInfo.homeAddress2 || "",
    city: userInfo.city || "",
    state: userInfo.state || "",
    zipCode: userInfo.zipCode || "",
    parkCottageName: userInfo.parkCottageName || "",
    emAddress: userInfo.emAddress || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const userDoc = doc(db, "users", userInfo.id);
    // await updateDoc(userDoc, userData);
    await setDoc(doc(db, "users", userInfo.id), userData, {
      merge: true,
    });

    // console.log(newDoc.data());
    let userDoc = await getDoc(doc(db, "users", userInfo.id));
    setUserInfo({ ...userDoc.data() });
    setIsLoading(false);
    navigate("/profile");
  };
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="lastName">Last Name:</Label>
        <Input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="emPhone">Eagles Mere Phone:</Label>
        <Input
          type="text"
          name="emPhone"
          value={userData.emPhone}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="homePhone">Home Phone:</Label>
        <Input
          type="text"
          name="homePhone"
          value={userData.homePhone}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="mobilePhone">Mobile Phone:</Label>
        <Input
          type="text"
          name="mobilePhone"
          value={userData.mobilePhone}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="homeAddress1">Home Address 1:</Label>
        <Input
          type="text"
          name="homeAddress1"
          value={userData.homeAddress1}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="homeAddress2">Home Address 2:</Label>
        <Input
          type="text"
          name="homeAddress2"
          value={userData.homeAddress2}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="city">City:</Label>
        <Input
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="state">State:</Label>
        <Input
          type="text"
          name="state"
          value={userData.state}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="zipCode">zipCode:</Label>
        <Input
          type="text"
          name="zipCode"
          value={userData.zipCode}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="parkCottageName">Park Cottage Name:</Label>
        <Input
          type="text"
          name="parkCottageName"
          value={userData.parkCottageName}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="emAddress">Eagles Mere Address:</Label>
        <Input
          type="text"
          name="emAddress"
          value={userData.emAddress}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </Form>
  );
};

export default ProfileForm;

const Form = styled.form`
  margin-top: 25px;
  width: 65%;
  margin: 0 auto;
`;
const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Error = styled.div`
  color: red;
  font-size: 30px;
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const Input = styled.input`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;
const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0 16px 0;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  color: #fff;
  background-color: #294c60;
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
