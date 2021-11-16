import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Directory from "./components/pages/Directory";
import Calendar from "./components/pages/Calendar";
import Rules from "./components/pages/Rules";
import Profile from "./components/pages/Profile";
import Contractors from "./components/pages/Contractors";
import ProfileForm from "./components/pages/ProfileForm";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route
              path="/directory"
              element={
                <PrivateRoute>
                  <Directory />
                </PrivateRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute>
                  <Calendar />
                </PrivateRoute>
              }
            />
            <Route
              path="/rules"
              element={
                <PrivateRoute>
                  <Rules />
                </PrivateRoute>
              }
            />
            <Route
              path="/contractors"
              element={
                <PrivateRoute>
                  <Contractors />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile_form"
              element={
                <PrivateRoute>
                  <ProfileForm />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
