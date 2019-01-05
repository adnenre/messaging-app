import React from "react";
import "./User.css";
import store from "../store";
import { setActiveUserId } from "../actions";

const User = ({ user }) => {
  const { name, profile_pic } = user;

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <div className="User__pic-container">
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__status"></div>
      </div>
      
      <div className="User__details">
        <p className="User__details-name">{name}</p>
       
      </div>
    </div>
  );
};

function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserId(user_id));
}

export default User;
