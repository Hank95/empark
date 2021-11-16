import React from "react";
import styled from "styled-components";
const ContactCard = ({ userDetals }) => {
  return (
    <Card>
      <p>Email: {userDetals.email}</p>
      <p>
        {userDetals.lastName}, {userDetals.firstName}
      </p>
    </Card>
  );
};

export default ContactCard;

const Card = styled.div`
  padding: 7px;
  margin-bottom: 10px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.33);
`;
