import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/routes/PrivateRoute";
import LoggedinRoute from "./components/routes/LoggedinRoute";
import SigninRoute from "./components/routes/SigninRoute";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Directory from "./components/pages/Directory";
import CalendarPage from "./components/pages/CalendarPage";
import Rules from "./components/pages/Rules";
import Profile from "./components/pages/Profile";
import Contractors from "./components/pages/Contractors";
import ProfileForm from "./components/pages/ProfileForm";
import Welcome from "./components/pages/Welcome";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
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
                  <CalendarPage />
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
              path="/profile-form"
              element={
                <PrivateRoute>
                  <ProfileForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <LoggedinRoute>
                  <Login />
                </LoggedinRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <SigninRoute>
                  <SignUp />
                </SigninRoute>
              }
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
