import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
              {" "}
              <Home />
          </Layout>
        }
      />

      <Route
        path="/signin"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />

      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;