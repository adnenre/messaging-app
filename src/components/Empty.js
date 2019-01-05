import React from "react";
import "./Empty.css";

const Empty = () => {
  
  const first_name = "Adnen";
  const profile_pic = "https://avatars1.githubusercontent.com/u/11591834?s=460&v=4";
  const status ="You can never understand everything. But, you should push yourself to understand the system 'Ryan Dhal'";
  return (
    <div className="Empty">
      <h1 className="Empty__name">Welcome, {first_name} </h1>
      <img src={profile_pic} alt={first_name} className="Empty__img" />
      <p className="Empty__status">
        <b>Status:</b> {status}
      </p>
     
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};

export default Empty;
