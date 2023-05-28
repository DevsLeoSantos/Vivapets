import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useState, useContext, Children } from "react";

import Home from "./Page/Home";
import Login from "./Page/Login/Index";

import { AuthProvicer, AuthContext } from "./Contexts/auth";
import Painel from "./Page/Painel";

const AppRouters = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    if (!authenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvicer>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/Painel"
            element={
              <Private>
                <Painel />
              </Private>
            }
          />
        </Routes>
      </AuthProvicer>
    </Router>
  );
};

export default AppRouters;
