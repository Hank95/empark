import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("The user is", currentUser);
    console.log("The user data is", userInfo.data());
  }, [currentUser, userInfo]);

  async function login(email, password) {
    let cred = await signInWithEmailAndPassword(auth, email, password);
    let userDoc = await getDoc(doc(db, "users", cred.user.uid));
    setUserInfo(userDoc);
  }

  async function signup(email, password) {
    // first find if input email matches approved email
    const emailDoc = await getDoc(doc(db, "emails", email));

    if (emailDoc.exists()) {
      let cred = await createUserWithEmailAndPassword(auth, email, password);
      let user = await setDoc(doc(db, "users", cred.user.uid), {
        email: email,
        admin: false,
      });
      setUserInfo(user);
    } else {
      console.log("not authenticated");
    }
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    });
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  function logout() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    forgotPassword,
    resetPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
