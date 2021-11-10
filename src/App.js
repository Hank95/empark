import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Directory from "./components/Directory";
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
            <Route path="/Login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
