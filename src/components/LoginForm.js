import React, { useState } from "react";
import WhatsAppLogo from "./icons/WhatsAppLogo";
import "./LoginForm.css";

const LoginForm = ({ onSubmit, error, loading }) => {
  const [email, setEmail] = useState("alice@example.com");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__header">
          <WhatsAppLogo className="login__logo" />
          <h2 className="login__title">Sign in to continue</h2>
        </div>

        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__input-group">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="login__input" />
          </div>
          <div className="login__input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login__input"
            />
          </div>
          <button type="submit" disabled={loading} className="login__button">
            {loading ? "Signing in..." : "Sign in"}
          </button>
          {error && <p className="login__error">{error}</p>}
        </form>

        <div className="login__footer">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="login__link">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
