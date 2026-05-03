import React, { useState } from "react";
import WhatsAppLogo from "./icons/WhatsAppLogo";
import "./RegisterForm.css";

const RegisterForm = ({ onSubmit, error, loading }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    onSubmit({ name, email, password });
  };

  return (
    <div className="register">
      <div className="register__card">
        <div className="register__header">
          <WhatsAppLogo className="login__logo" />
          <h2 className="register__title">Create account</h2>
        </div>

        <form onSubmit={handleSubmit} className="register__form">
          <div className="register__input-group">
            <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required className="register__input" />
          </div>

          <div className="register__input-group">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="register__input" />
          </div>

          <div className="register__input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="register__input"
            />
          </div>

          <div className="register__input-group">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="register__input"
            />
          </div>

          {passwordError && <p className="register__error">{passwordError}</p>}

          <button type="submit" disabled={loading} className="register__button">
            {loading ? "Creating account..." : "Sign up"}
          </button>

          {error && <p className="register__error">{error}</p>}
        </form>

        <div className="register__footer">
          <p>
            Already have an account?{" "}
            <a href="/login" className="register__link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
