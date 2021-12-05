import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import styled from "styled-components";
import ContactCard from "./ContactCard";

const Directory = () => {
  const { currentUser, userInfo } = useAuth();
  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Directory</h1>
      <Rolladex>
        {users.map((user) => (
          <ContactCard key={user.id} userDetails={user} />
        ))}
      </Rolladex>
    </div>
  );
};

export default Directory;

const Rolladex = styled.div`
  width: 75%;
  margin: 0 auto;
`;
