import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Login/Login";

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
      
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;