import React from "react";
import "./Header.css";

const Header = ({ user }) => {
  if (!user) return <div className="header__placeholder">Select a chat</div>;

  const { name, profile_pic, status } = user;

  return (
    <div className="header">
      <div className="header__avatar">
        <img src={profile_pic} alt={name} className="header__avatar-img" />
      </div>
      <div className="header__info">
        <div className="header__name">{name}</div>
        <div className="header__status">{status || "online"}</div>
      </div>
    </div>
  );
};

export default Header;
