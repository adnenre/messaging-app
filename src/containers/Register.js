import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginSuccess, // <-- import from authActions, not index
} from "../actions/authActions";
import { setUser } from "../actions/index"; // <-- only setUser from index
import RegisterForm from "../components/RegisterForm";

// Mock register API call (simulate adding a new user)
const mockRegister = (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = { id: Date.now(), ...userData };
      resolve(newUser);
    }, 500);
  });
};

const Register = ({ isAuthenticated, error, loading, registerRequest, registerSuccess, registerFailure, loginSuccess, setUser }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (userData) => {
    registerRequest();
    try {
      const newUser = await mockRegister(userData);
      registerSuccess(newUser);
      // Auto-login after registration
      const fakeToken = "fake-jwt-token";
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(newUser));
      loginSuccess(fakeToken, newUser);
      setUser(newUser);
    } catch (err) {
      registerFailure(err.message);
    }
  };

  return <RegisterForm onSubmit={handleSubmit} error={error} loading={loading} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginSuccess,
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
