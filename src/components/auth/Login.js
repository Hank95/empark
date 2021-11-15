import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/directory");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  return (
    <>
      {/* <Image src={dock} alt="Dock" /> */}
      <Wrapper>
        {/* <Logo src={laurel} alt="logo" /> */}
        <h3>Please sign in!</h3>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button type="submit">{loading ? "Loading..." : "Login"}</Button>
          </FormField>
          <FormField>{error ? <Error>{error}</Error> : null}</FormField>
        </Form>
        <Divider />
        <Details>
          New here? &nbsp;
          <Button as={Link} to="/signup">
            Sign Up
          </Button>
        </Details>
        {/* <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p>
              Already have an account? &nbsp;
              <Button onClick={() => setShowLogin(true)}>Log In</Button>
            </p>
          </> */}
      </Wrapper>
    </>
  );
}
const Image = styled.img`
  width: 100%;
  position: absolute;
  /* height: 100vh; */
  z-index: -100;
`;
const Wrapper = styled.section`
  position: relative;
  max-width: 400px;
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
const Logo = styled.img`
  margin-left: 13%;
`;
const Details = styled.div`
  width: 100%;
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

export default Login;
