import React, { useState } from "react";
import styled from "styled-components";
const ContactCard = ({ userDetails }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Card onClick={() => setIsClicked(!isClicked)}>
        <Row>
          <Detail>{userDetails.firstName}</Detail>
          <Detail>Email: {userDetails.email}</Detail>
          <Detail>{userDetails.lastName}</Detail>
          <Detail>Mobile: {userDetails.mobilePhone}</Detail>
        </Row>
        {isClicked ? (
          <>
            <Divider />
            <Row>
              <Detail>
                <p>Home Address</p>
                <p> {userDetails.homeAddress1}</p>
                {userDetails.homeAddress2 ? (
                  <p> {userDetails.homeAddress2}</p>
                ) : null}
                <p>
                  {userDetails.city}, {userDetails.state} {userDetails.zipCode}
                </p>
              </Detail>
              <Detail>
                <p>Eagles Mere Phone {userDetails.emPhone}</p>
                <p> Home Phone: {userDetails.homePhone}</p>
                <p>Cottage Name: {userDetails.parkCottageName}</p>
                <p>Eagles Mere Address {userDetails.emAddress}</p>
              </Detail>
            </Row>
          </>
        ) : null}
      </Card>
    </>
  );
};

export default ContactCard;

const Card = styled.div`
  padding: 7px;
  margin-bottom: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.33);
  }
`;
const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  align-items: center;
`;
const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
const Detail = styled.div`
  min-width: 75px;
  margin: 5px;
`;

// const DetailedCard = ({ userDetails }) => {
//   <Card>
//     {" "}
//     <Card>
//       <Row>
//         <p>{userDetails.firstName}</p>
//         <p>{userDetails.lastName},</p>
//         <p>Email: {userDetails.email}</p>
//         <p>Mobile: {userDetails.mobilePhone}</p>
//       </Row>
//     </Card>
//   </Card>;
// };
