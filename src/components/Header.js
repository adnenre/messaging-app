import React from "react";
import "./Header.css";

function Header({ user }) {
  const { name, profile_pic, status } = user;

  return (
    <header className="Header">
    <div className="User__pic-container Header__img">
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__status"></div>
      </div>
        <div className="user__detail">
        <h1 className="Header__name">{name}</h1>
        <p className="Header__status">{status}</p>
      </div>
    </header>
  );
}

export default Header;
