import React from "react";
import Login from "../components/auth/Login.jsx";
import "./AuthPage.scss";

const AuthPage = () => {
  return (
    <>
      <div className="auth-page">
        <Login />
      </div>
    </>
  );
};

export default AuthPage;
