import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/directory");
    } catch {
      setError("Failed to create an account, please contact the administrator");
    }

    setLoading(false);
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password Confirmation</Label>
          <Input
            type="password"
            name="password_confirmation"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            autoComplete="current-password"
          />
        </FormField>
        <FormField>
          <Button type="submit">{loading ? "Loading..." : "Sign Up"}</Button>
        </FormField>
        <FormField>{error ? <Error>{error}</Error> : null}</FormField>
      </Form>
      <Divider />
      <Details>
        <Button as={Link} to="/login">
          Log In
        </Button>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 50%;
  margin: 10vh auto;
  padding: 16px;
  background-color: white;
  border-radius: 6px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  /* align-content: center; */
  width: 100%;
`;

const Details = styled.div`
  width: 92%;
`;

const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid #ccc;
  margin: 16px 0 16px 0;
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
const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
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

export default SignUp;
