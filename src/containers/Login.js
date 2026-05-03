import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginRequest, loginSuccess, loginFailure } from "../actions/authActions";
import { setUser } from "../actions/index";
import { getMockUsers } from "../static-data";
import LoginForm from "../components/LoginForm";

// Mock login API call (copied here to avoid dependency on authActions)
const mockLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getMockUsers();
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        resolve({ token: "fake-jwt-token", user });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 500);
  });
};

const Login = ({ isAuthenticated, error, loading, loginRequest, loginSuccess, loginFailure, setUser }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const handleSubmit = async (email, password) => {
    loginRequest(); // dispatch plain action
    try {
      const { token, user } = await mockLogin(email, password);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      loginSuccess(token, user);
      setUser(user); // update user reducer
      // Redirect will happen because isAuthenticated becomes true after state update
    } catch (err) {
      loginFailure(err.message);
    }
  };

  return <LoginForm onSubmit={handleSubmit} error={error} loading={loading} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  loginRequest,
  loginSuccess,
  loginFailure,
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
