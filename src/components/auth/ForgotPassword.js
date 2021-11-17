import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await forgotPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <Wrapper>
      {/* <Logo src={laurel} alt="logo" /> */}
      <h3>Forgot Password?</h3>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            id="email"
            //   autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField>
          <Button type="submit">
            {loading ? "Loading..." : "Send Email Link"}
          </Button>
        </FormField>
        <FormField>{error ? <Error>{error}</Error> : null}</FormField>
        <FormField>{message ? <Error>{message}</Error> : null}</FormField>
      </Form>
    </Wrapper>
  );
};

export default ForgotPassword;

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
  width: 93%;
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
