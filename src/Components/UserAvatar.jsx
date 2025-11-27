import React from "react";
import "./UserAvatar.css";

const UserAvatar = ({ url, alt, caption }) => {
  return (
    <div className="avatar-container">
      <img src={url} alt={alt} className="avatar-img" />
      <p className="avatar-caption">{caption}</p>
    </div>
  );
};

export default UserAvatar;
